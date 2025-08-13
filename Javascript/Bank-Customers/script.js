let customers = [];

function registerCustomers() {
    customers = [];
    let num = parseInt(document.getElementById("numCustomers").value);
    if (isNaN(num) || num <= 0) {
        alert("Please enter a valid number of customers.");
        return;
    }

    for (let i = 0; i < num; i++) {
        let name = prompt(`Enter name of customer ${i + 1}:`);
        if (!name) {
            alert("Customer name cannot be empty!");
            i--; 
            continue;
        }
        customers.push(name.trim());
    }

    let output = document.getElementById("output");
    output.textContent = `Original Customers: ${customers.join(", ")}\n`;

    document.getElementById("manipulateBtn").disabled = false;
}

function manipulateCustomers() {
    let output = document.getElementById("output");
    output.textContent += "\nCustomers using for...of:\n";
    for (let name of customers) {
        output.textContent += name + "\n";
    }

    output.textContent += "\nCustomer IDs using for...in:\n";
    for (let index in customers) {
        output.textContent += index + "\n";
    }

    customers.push("Neeraj");
    output.textContent += `\nAfter push('Neeraj'): ${customers.join(", ")}\n`;

    customers.pop();
    output.textContent += `After pop(): ${customers.join(", ")}\n`;

    customers.splice(1, 0, "Ayush");
    output.textContent += `After insert 'Ayush' at position 1: ${customers.join(", ")}\n`;

    customers.splice(2, 1);
    output.textContent += `After delete at position 2: ${customers.join(", ")}\n`;

    output.textContent += `\nFinal Customers: ${customers.join(", ")}`;
}