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

let buttonGo = document.querySelector("button");
buttonGo.addEventListener("click", addBookToLibrary)

function addBookToLibrary() {
    let title = prompt("Title: ");
    let author = prompt("Author: ");
    let pages = Number(prompt("Pages: "));
    let status = Boolean(prompt("Read: true/false?"));

    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook)
    displayBook(newBook)
}

const displayContainer = document.querySelector(".container");
function displayBook(newBook) {
    let newDiv = document.createElement("div");
    newDiv.style.cssText = "border: 2px solid black;";
    newDiv.textContent = newBook.fullString();
    displayContainer.appendChild(newDiv);
}