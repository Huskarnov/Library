let section = document.querySelector('.bookGrid');

// let bookObject = document.createElement('div');




let myLibrary = ["hello", "Hi", "back", "moloko", "vitrol", "now", "redead"];

function Book(){
    // consructor
};

function curator(book){

};

let cardCreator = function(){

    myLibrary.forEach((book, index) => {
        
        let newBook = document.createElement('div');
        newBook.textContent = myLibrary[`${index}`] ;
        newBook.classList.add("card");
        section.appendChild(newBook);
        }
    );

}

cardCreator();