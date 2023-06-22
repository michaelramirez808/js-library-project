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

        let readStatusButton = document.createElement('button');
        readStatusButton.classList.add('readStatusButton');
        readStatusButton.textContent = book.status === 'read' ? 'Read' : 'Unread';
        readStatusButton.addEventListener('click', function(){
            book.status = book.status === 'read' ? 'unread' : 'read';
            addArrayToPage();
        })
        
        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function(){
            myLibrary.splice(i, 1);
            addArrayToPage();
        })

        bookDiv.innerHTML = `
        <h3>Title: ${book.title}</h3>
        <p>Author: ${book.author}</p
        <p>Pages: ${book.pages}</p>
        `;

        bookDiv.appendChild(removeButton);
        bookDiv.appendChild(readStatusButton);
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
    let readStatusCheckbox = document.getElementById('readStatus');
    let status = readStatusCheckbox.checked ? 'Read' : 'Unread';


    const newBook = new Book(title, author, pages, status);

    myLibrary.push(newBook);
    console.log(newBook);
    bookForm.reset();
    bookForm.style.display = 'none';


    addArrayToPage();
    });
}
addBookToLibrary();