const taxRecords = [];

function logToConsole(record) {
    console.log("Tax Record:", record);
}

function displayOnPage(record) {
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    resultBox.innerHTML = `
            <strong>Name:</strong> ${record.name} <br>
            <strong>PAN:</strong> ${record.pan} <br>
            <strong>Income:</strong> ₹${record.income.toLocaleString()} <br>
            <strong>Tax Payable:</strong> ₹${record.tax.toLocaleString()}
        `;
}

function saveToRecords(record) {
    taxRecords.push(record);
    document.getElementById("recordsBox").textContent = JSON.stringify(taxRecords, null, 2);
}

function calculateTax(name, pan, income, callback) {
    let tax = 0;
    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
        tax = (250000 * 0.05) + (income - 500000) * 0.2;
    } else {
        tax = (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
    }

    const record = { name, pan, income, tax };
    callback(record);
}

document.getElementById("taxForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const pan = document.getElementById("pan").value.trim();
    const income = parseFloat(document.getElementById("income").value);

    if (pan.length !== 10) {
        alert("PAN must be exactly 10 characters!");
        return;
    }

    calculateTax(name, pan, income, function (record) {
        logToConsole(record);
        displayOnPage(record);
        saveToRecords(record);
    });

    this.reset();
});