let myLibrary = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
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
    let pages = document.getElementById('author').value;
    let status = document.getElementById('status').value;

    const newBook = new Book(title, author, pages, status);

    myLibrary.push(newBook);
    console.log(newBook);
    bookForm.reset();
    bookForm.style.display = 'none';

    });
}
addBookToLibrary();



