let myLibrary = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addArrayToPage(){
    let libraryContainer = document.getElementById('libraryContainer');
    libraryContainer.textContent = '';
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];

        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
        <h3>Title: ${book.title}</h3>
        <p>Author: ${book.author}</p
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.status}</p>
        `
        libraryContainer.appendChild(bookDiv);
    }
}

function addBookToLibrary(){
    let addButton = document.getElementById('add')
    addButton.addEventListener('click', function(){
        document.getElementById('bookForm').style.display = 'block';
    });
    let bookForm = document.getElementById('bookForm');
    bookForm.addEventListener('submit', function(event){
        event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').value;

    const newBook = new Book(title, author, pages, status);

    myLibrary.push(newBook);
    console.log(newBook);
    bookForm.reset();
    bookForm.style.display = 'none';


    addArrayToPage();
    });
}
addBookToLibrary();



