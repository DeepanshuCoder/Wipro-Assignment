function portfolioTracker() {
    let portfolio = [];

    function buyShare(company, quantity, price) {
        const existing = portfolio.find(share => share.company === company);
        if (existing) {
            existing.quantity += quantity;
            existing.price = price;
        } else {
            portfolio.push({ company, quantity, price });
        }
        return `Bought ${quantity} shares of ${company} at ₹${price} each.`;
    }

    function sellShare(company, quantity) {
        const existing = portfolio.find(share => share.company === company);
        if (!existing) return `No shares of ${company} found.`;
        if (existing.quantity < quantity) return `Not enough shares to sell.`;
        existing.quantity -= quantity;
        if (existing.quantity === 0) {
            portfolio = portfolio.filter(share => share.company !== company);
        }
        return `Sold ${quantity} shares of ${company}.`;
    }

    function totalValue() {
        const value = portfolio.reduce((sum, share) => sum + (share.quantity * share.price), 0);
        return `Portfolio Value: ₹${value}`;
    }

    return { buyShare, sellShare, totalValue };
}

const myPortfolio = portfolioTracker();

const outputDiv = document.getElementById("output");

function buyShareHandler() {
    const company = document.getElementById("buyCompany").value.trim();
    const qty = parseInt(document.getElementById("buyQty").value);
    const price = parseFloat(document.getElementById("buyPrice").value);
    if (!company || qty <= 0 || price <= 0) {
        alert("Please enter valid buy details.");
        return;
    }
    const message = myPortfolio.buyShare(company, qty, price);
    outputDiv.textContent += message + "\n";
}

function sellShareHandler() {
    const company = document.getElementById("sellCompany").value.trim();
    const qty = parseInt(document.getElementById("sellQty").value);
    if (!company || qty <= 0) {
        alert("Please enter valid sell details.");
        return;
    }
    const message = myPortfolio.sellShare(company, qty);
    outputDiv.textContent += message + "\n";
}

function showPortfolioValue() {
    const message = myPortfolio.totalValue();
    outputDiv.textContent += message + "\n";
}