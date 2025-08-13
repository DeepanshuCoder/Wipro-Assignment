let books = [
    { title: "JavaScript Basics", author: "Anu", price: 450, available: true },
    { title: "HTML & CSS", author: "Devi", price: 350, available: false }
];

function displayBooks() {
    const allBooksList = document.getElementById("allBooksList");
    const availableBooksList = document.getElementById("availableBooksList");

    allBooksList.innerHTML = "";
    availableBooksList.innerHTML = "";

    for (let book of books) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `Title: ${book.title}, Author: ${book.author}, Price: ${book.price} ₹, Available: ${book.available}`;
        allBooksList.appendChild(li);
    }

    for (let book of books) {
        if (book.available) {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `Title: ${book.title}, Author: ${book.author}, Price: ${book.price} ₹`;
            availableBooksList.appendChild(li);
        }
    }
}

document.getElementById("addBookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const price = Number(document.getElementById("price").value);
    const available = document.getElementById("available").value === "true";

    books.push({ title, author, price, available });
    displayBooks();
    this.reset();
});

document.getElementById("updatePriceForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const updateTitle = document.getElementById("updateTitle").value;
    const newPrice = Number(document.getElementById("newPrice").value);

    let found = false;
    for (let book of books) {
        if (book.title.toLowerCase() === updateTitle.toLowerCase()) {
            book.price = newPrice;
            found = true;
            break;
        }
    }
    if (!found) alert("Book not found!");
    displayBooks();
    this.reset();
});

document.getElementById("deleteBookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const deleteTitle = document.getElementById("deleteTitle").value;

    const index = books.findIndex(book => book.title.toLowerCase() === deleteTitle.toLowerCase());
    if (index !== -1) {
        books.splice(index, 1);
    } else {
        alert("Book not found!");
    }
    displayBooks();
    this.reset();
});
displayBooks();