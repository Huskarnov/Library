let bookGrid = document.querySelector('.bookGrid');
const newButton = document.querySelector('.new-book');






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
            newBook.textContent = (myLibrary[`${index}`]).title ;
            newBook.classList.add("card");
            bookGrid.appendChild(newBook);
            }
        );
    }
}

cardCreator();

newButton.addEventListener('click', function(){
    
    
    myLibrary.forEach(function(){
        bookGrid.lastChild.remove();
    });

    curator('Malazan', 'image');
    console.log(myLibrary);

    cardCreator();
})