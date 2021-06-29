

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
    bookCount.textContent = myLibrary.length;
}

const addBookbutton = document.querySelector("#addBookButton");
addBookbutton.addEventListener("click", addBookToLibrary);


const clearAllBooksButton = document.querySelector(".clearbutton");
clearAllBooksButton.addEventListener("click", () => {
    myLibrary = [];
})

const bookCount = document.querySelector("#bookCount");
