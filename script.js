class Book {
    constructor(title, author, pages, status) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.status = status;
    }
  }
  
  class Library {
    constructor() {
      this.myLibrary = [];
      this.addArrayToPage = this.addArrayToPage.bind(this);
      this.addBookToLibrary = this.addBookToLibrary.bind(this);
    }
  
    addArrayToPage() {
      let libraryContainer = document.getElementById('libraryContainer');
      libraryContainer.textContent = '';
  
      for (let i = 0; i < this.myLibrary.length; i++) {
        let book = this.myLibrary[i];
  
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
  
        let readStatusButton = document.createElement('button');
        readStatusButton.classList.add('readStatusButton');
        readStatusButton.textContent = book.status === 'read' ? 'Read' : 'Unread';
        readStatusButton.addEventListener('click', () => {
          book.status = book.status === 'read' ? 'unread' : 'read';
          this.addArrayToPage();
        });
  
        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
          this.myLibrary.splice(i, 1);
          this.addArrayToPage();
        });
  
        bookDiv.innerHTML = `z
          <h3>Title: ${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Pages: ${book.pages}</p>
        `;
  
        bookDiv.appendChild(removeButton);
        bookDiv.appendChild(readStatusButton);
        libraryContainer.appendChild(bookDiv);
      }
    }
  
    addBookToLibrary() {
      let addButton = document.getElementById('add');
      addButton.addEventListener('click', () => {
        document.getElementById('bookForm').style.display = 'block';
      });
  
      let bookForm = document.getElementById('bookForm');
      bookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let readStatusCheckbox = document.getElementById('readStatus');
        let status = readStatusCheckbox.checked ? 'Read' : 'Unread';
  
        const newBook = new Book(title, author, pages, status);
        this.myLibrary.push(newBook);
        console.log(newBook);
  
        bookForm.reset();
        bookForm.style.display = 'none';
  
        this.addArrayToPage();
      });
    }
  }
  
  const library = new Library();
  library.addBookToLibrary();
  