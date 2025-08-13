const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const form = $('#rtoForm');
const submitBtn = $('#submitBtn');
const progressBar = $('#progressBar');
const progressText = $('#progressText');

function setMaxDates() {
    const today = new Date().toISOString().split('T')[0];
    $('#purchaseDate').setAttribute('max', today);
    $('#insExpiry').setAttribute('min', today);
    $('#puc').setAttribute('min', today);
    const d = new Date();
    d.setFullYear(d.getFullYear() - 18);
    const maxDob = d.toISOString().split('T')[0];
    $('#dob').setAttribute('max', maxDob);
    $('#year').setAttribute('max', new Date().getFullYear());
}
setMaxDates();

['#pan', '#regNo', '#chassis', '#engine'].forEach(id => {
    $(id).addEventListener('input', e => { e.target.value = e.target.value.toUpperCase(); });
});

const hypo = $('#hypo');
const financeFields = $('#financeFields');
const bank = $('#bank');
const agreement = $('#agreement');

function syncFinanceRequired() {
    if (hypo.checked) {
        financeFields.classList.remove('d-none');
        bank.setAttribute('required', '');
        agreement.setAttribute('required', '');
    } else {
        financeFields.classList.add('d-none');
        bank.removeAttribute('required');
        agreement.removeAttribute('required');
        bank.classList.remove('is-valid', 'is-invalid');
        agreement.classList.remove('is-valid', 'is-invalid');
    }
    updateProgressAndButton();
}

hypo.addEventListener('change', syncFinanceRequired);

function validateFile(input, requiredTypes) {
    const file = input.files[0];
    if (!file) {
        input.setCustomValidity(input.required ? 'Please upload a file.' : '');
        return;
    }
    const max = 2 * 1024 * 1024;
    if (file.size > max) {
        input.setCustomValidity('File too large (max 2MB).');
        return;
    }
    if (requiredTypes) {
        const ok = requiredTypes.some(t => file.type.includes(t) || file.name.toLowerCase().endsWith(t));
        if (!ok) {
            input.setCustomValidity('Invalid file type.');
            return;
        }
    }
    input.setCustomValidity('');
}

$('#idProof').addEventListener('change', e => { validateFile(e.target, ['pdf', 'jpg', 'jpeg', 'png', '.pdf', '.jpg', '.jpeg', '.png']); updateProgressAndButton(); });
$('#insCopy').addEventListener('change', e => { validateFile(e.target, ['pdf', 'jpg', 'jpeg', 'png', '.pdf', '.jpg', '.jpeg', '.png']); updateProgressAndButton(); });
$('#vehImg').addEventListener('change', e => { validateFile(e.target, ['image']); updateProgressAndButton(); });

function validateFuel() {
    const anyChecked = $$('input[name="fuel"]').some(r => r.checked);
    const first = $('#petrol');
    if (!anyChecked) {
        first.setCustomValidity('Please choose a fuel type.');
    } else {
        first.setCustomValidity('');
    }
}
$$('input[name="fuel"]').forEach(r => r.addEventListener('change', () => { validateFuel(); updateProgressAndButton(); }));

function validateDates() {
    const purchase = $('#purchaseDate');
    const today = new Date();
    if (purchase.value) {
        const pd = new Date(purchase.value);
        purchase.setCustomValidity(pd > today ? 'Purchase date cannot be in the future.' : '');
    } else { purchase.setCustomValidity(''); }

    ['#insExpiry', '#puc'].forEach(id => {
        const el = $(id);
        if (el.value) {
            const d = new Date(el.value);
            el.setCustomValidity(d < new Date(new Date().toDateString()) ? 'Date must be today or later.' : '');
        } else { el.setCustomValidity(''); }
    });

    const dob = $('#dob');
    if (dob.value) {
        const ageMs = Date.now() - new Date(dob.value).getTime();
        const age = new Date(ageMs).getUTCFullYear() - 1970;
        dob.setCustomValidity(age < 18 ? 'You must be at least 18 years old.' : '');
    } else { dob.setCustomValidity(''); }
}

['#purchaseDate', '#insExpiry', '#puc', '#dob'].forEach(id => $(id).addEventListener('change', () => { validateDates(); updateProgressAndButton(); }));

let captchaAns = null;
function newCaptcha() {
    const a = 1 + Math.floor(Math.random() * 9);
    const b = 1 + Math.floor(Math.random() * 9);
    captchaAns = a + b;
    $('#captchaLabel').textContent = `Solve: ${a} + ${b} = ?`;
    $('#captchaInput').value = '';
}
$('#refreshCaptcha').addEventListener('click', () => { newCaptcha(); updateProgressAndButton(); });

function validateCaptcha() {
    const ci = $('#captchaInput');
    if (String(ci.value).trim() === String(captchaAns)) {
        ci.setCustomValidity('');
        return true;
    } else {
        ci.setCustomValidity('Incorrect answer.');
        return false;
    }
}
$('#captchaInput').addEventListener('input', () => { validateCaptcha(); updateProgressAndButton(); });
const sections = [
    { key: 'owner', fields: ['#fullName', '#email', '#mobile', '#dob', '#aadhaar', '#pan'] },
    { key: 'address', fields: ['#address1', '#city', '#state', '#pin'] },
    { key: 'vehicle', fields: ['#regNo', '#vehClass', 'fuel', '#make', '#model', '#chassis', '#engine', '#year', '#purchaseDate', '#color'] },
    { key: 'compliance', fields: ['#emission', '#policyNo', '#insurer', '#insExpiry', '#puc'] },
    { key: 'finance', fields: () => hypo.checked ? ['#bank', '#agreement'] : [] },
    { key: 'uploads', fields: ['#idProof', '#insCopy'] },
    { key: 'declarations', fields: ['#terms', '#captchaInput'] },
];

function sectionElements(fields) {
    const list = Array.isArray(fields) ? fields : fields();
    return list.flatMap(sel => sel === 'fuel' ? $$('input[name="fuel"]') : [$(sel)]);
}

function sectionValid(section) {
    validateFuel();
    validateDates();
    syncFinanceRequired();
    const els = sectionElements(section.fields);
    return els.length && els.every(el => el && el.checkValidity());
}

function updateUIClasses() {
    $$('input,select').forEach(el => {
        const handler = () => {
            if (el.type === 'radio') return;
            el.classList.toggle('is-valid', el.checkValidity());
            el.classList.toggle('is-invalid', !el.checkValidity() && (el.touched || document.activeElement !== el));
        };
        if (!el._bound) {
            el.addEventListener('input', () => { el.touched = true; handler(); updateProgressAndButton(); });
            el.addEventListener('change', () => { el.touched = true; handler(); updateProgressAndButton(); });
            el.addEventListener('blur', () => { el.touched = true; handler(); });
            el._bound = true;
        }
    });
}

function updateProgressAndButton() {
    updateUIClasses();
    validateCaptcha();

    const validSections = sections.filter(sec => sectionValid(sec)).length;
    const totalSections = sections.length;
    const pct = Math.round((validSections / totalSections) * 100);
    progressBar.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', pct);
    progressText.textContent = pct + '%';

    const allValid = sections.every(sec => sectionValid(sec));
    submitBtn.disabled = !allValid;
}

newCaptcha();
updateProgressAndButton();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    validateDates();
    validateCaptcha();
    validateFuel();
    updateProgressAndButton();

    if (!form.checkValidity() || submitBtn.disabled) {
        const firstInvalid = $(':invalid');
        if (firstInvalid) { firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        return;
    }

    const toastEl = document.getElementById('successToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();

    form.reset();
    ['#bank', '#agreement'].forEach(id => $(id).removeAttribute('required'));
    $$('input,select').forEach(el => el.classList.remove('is-valid', 'is-invalid'));
    newCaptcha();
    setMaxDates();
    updateProgressAndButton();
});

$$('#rtoAccordion .accordion-collapse').forEach(col => {
    col.addEventListener('hide.bs.collapse', updateProgressAndButton);
    col.addEventListener('shown.bs.collapse', updateProgressAndButton);
});