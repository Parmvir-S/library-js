window.addEventListener("load", () => {
    displayBooks();
    bookCount.textContent = myLibrary.length;

})
let myLibrary = [];

//Book Object Constructor Function
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

//Make Book Object 
function makeBookObject() {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let status = document.getElementById("status").checked;
    let newBook = new Book(title, author, pages, status);
    return newBook;
}

//Add Book To LocalStorage
function addBookToStorage() {
    let book = makeBookObject();
    myLibrary.push(book)
    localStorage.setItem("Books", JSON.stringify(myLibrary))
    bookCount.textContent = myLibrary.length;
    displayBooks();
}


const addBookbutton = document.querySelector("#addBookButton");
addBookbutton.addEventListener("click", addBookToStorage);

//Get Book From LocalStorage
function getBook() {
    if (localStorage.getItem("Books") == null) {
        myLibrary = [];
    } else {
        let storedBooks = JSON.parse(localStorage.getItem("Books"));
        myLibrary = storedBooks;
    }
}

//Add Book Object Values To HTML Table
const table = document.querySelector("table");

//Display Books
function displayBooks() {
    getBook();

    let values = [];
    for (let row of table.rows) 
    {
        for(let cell of row.cells) 
        {
        let val = cell.innerText; // your code below
        values.push(val)
        }
    }

    for (let i = 0; i < myLibrary.length; i++) {
        if (values.includes(myLibrary[i]["title"])) {
            continue;
        } else {
            domAdditionFunction(myLibrary[i])
        }
    }

}

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

//Clear All Books
const clearAllBooksButton = document.querySelector(".clearbutton");
clearAllBooksButton.addEventListener("click", () => {
    myLibrary = [];
    localStorage.clear();
    while (table.childNodes.length > 1) {
        table.removeChild(table.lastChild);
    }
    bookCount.textContent = 0;
})

const bookCount = document.querySelector("#bookCount");