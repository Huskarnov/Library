let section = document.querySelector('.bookGrid');

let bookObject = document.createElement('div');
bookObject.textContent ="hi";



let myLibrary = ["hello", "Hi", "back", "moloko", "vitrol", "now"];

function Book(){
    // consructor
};

function curator(book){

};

let cardCreator = function(){

    myLibrary.forEach((book, index) => {
        let newBook = bookObject.cloneNode(true);
        newBook.textContent = myLibrary[`${index}`];
        newBook.classList.add("card");
        section.appendChild(newBook);
        }
    );

}

cardCreator();