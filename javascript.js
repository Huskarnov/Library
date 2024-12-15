let bookGrid = document.querySelector('.bookGrid');
let section = document.querySelector('section');
let titleInput = document.querySelector('#titleInput');
let urlInput = document.querySelector('#urlInput');

const newButton = document.querySelector('.new-book');
const newBookForm = document.querySelector('.newBookForm');
const submitButton = document.querySelector('.submitButton');






let myLibrary = [{title:'Book1', image:'link'}, {title:'Book2', image:'link'}];

function Book(title, image){
    this.title = title,
    this.image = image
};

function curator(title, image){
    let nBook = new Book(title, image);
    myLibrary.push(nBook);
};

let cardCreator = function(){

    if(myLibrary.length > 0){
        myLibrary.forEach((book, index) => {
            
            let newBook = document.createElement('div');

            let bookTitle = document.createElement('div');
            let bookImage = document.createElement('img');
            
            bookTitle.textContent = (myLibrary[`${index}`]).title ;
            bookImage.src = (myLibrary[`${index}`]).image ;

            newBook.appendChild(bookTitle);
            newBook.appendChild(bookImage);


            // newBook.textContent = (myLibrary[`${index}`]).title ;
            newBook.classList.add("card");
            bookGrid.appendChild(newBook);
            }
        );
    }
}

cardCreator();



newButton.addEventListener('click', function(){
    section.style.filter = 'blur(10px)';

    newBookForm.style.visibility = 'visible';

    
    
});

newBookForm.addEventListener('submit', function(e){
    
    e.preventDefault();
    myLibrary.forEach(function(){
        bookGrid.lastChild.remove();
    });

    let title = titleInput.value;
    let url = urlInput.value;

    curator(title, url);
    console.log(myLibrary);

    cardCreator();
    
    newBookForm.style.visibility = 'hidden';
    section.style.filter = 'none';

});