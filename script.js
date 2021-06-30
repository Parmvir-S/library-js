
let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.fullString = function() {
        return this.title + " by " + this.author + ", has " + this.pages + " pages";
    }
}

function addBookToLibrary() {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let status = document.getElementById("status").checked;
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook)
    addLibraryToStorage(myLibrary)
    displayBooks()
    bookCount.textContent = myLibrary.length;
}

const addBookbutton = document.querySelector("#addBookButton");
addBookbutton.addEventListener("click", addBookToLibrary);

function addLibraryToStorage(library) {
    localStorage.setItem("item", JSON.stringify(library));
}

function displayBooks() {
    let items = localStorage.getItem("item");
    let parsedItems = JSON.parse(items);
    console.log(parsedItems)
    for (let i = 0; i < parsedItems.length; i++) {
        if (myLibrary.length == 0) {
            domAdditionFunction(parsedItems[i]);
        } else if (myLibrary.length > 1) {
            let bookName = parsedItems[i]["title"];
            if (table.innerHTML.includes(bookName)) {
                continue; 
            } else {
                domAdditionFunction(parsedItems[i]);
            }
        }
    }
}

const table = document.querySelector("table");
// console.log(table.innerHTML.includes("Naruto"))

function domAdditionFunction(book) {
    const tableContent = document.createElement("tr");
    tableContent.innerHTML = "<tr>" + "<td>" + book["title"] + "</td>" + 
                                    "<td>" + book["author"] + "</td>" + 
                                    "<td>" + book["pages"] + "</td>" + 
                                    "<td>" + "<button>" + book["readStatus"] + "</button>" + "</td>" +
                                    "<td>" + "<button>" + "remove" + "</button>" + "</td>" +
                                "</tr>"
    table.appendChild(tableContent);
}

const clearAllBooksButton = document.querySelector(".clearbutton");
clearAllBooksButton.addEventListener("click", () => {
    myLibrary = [];
})

const bookCount = document.querySelector("#bookCount");
