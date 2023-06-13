let myLibrary = [];

function Book(){

}

function addBookToLibrary(){
    let addButton = document.getElementById('add')
    addButton.addEventListener('click', function(){
        myLibrary.push('x');
        console.log(myLibrary);
    })
}
addBookToLibrary();



