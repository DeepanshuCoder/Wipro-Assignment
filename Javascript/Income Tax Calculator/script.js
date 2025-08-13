function calculateTax() {
    let name = document.getElementById("name").value.trim();
    let pan = document.getElementById("pan").value.trim();
    let dob = document.getElementById("dob").value;
    let income = parseFloat(document.getElementById("income").value);
    let resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";

    if (name === "" || pan === "" || dob === "" || isNaN(income)) {
        resultDiv.innerHTML = "<p class='error'>⚠ Please fill all fields correctly.</p>";
        return;
    }

    if (pan.length !== 10 || pan !== pan.toUpperCase()) {
        resultDiv.innerHTML = "<p class='error'>⚠ PAN must be 10 uppercase characters.</p>";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    let tax = 0;
    if (income > 250000 && income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income > 500000 && income <= 1000000) {
        tax = (250000 * 0.05) + ((income - 500000) * 0.20);
    } else if (income > 1000000) {
        tax = (250000 * 0.05) + (500000 * 0.20) + ((income - 1000000) * 0.30);
    }
    tax = Math.round(tax);

    resultDiv.innerHTML = `
        <strong>Name:</strong> ${name.toUpperCase()}<br>
        <strong>PAN:</strong> ${pan}<br>
        <strong>Age:</strong> ${age} years<br>
        <strong>Annual Income:</strong> ₹ ${income.toLocaleString()}<br>
        <strong>Calculated Tax:</strong> ₹ ${tax.toLocaleString()}
    `;
}