



function saveComment(books) {

    localStorage.setItem('books', JSON.stringify(books));
};



function getFromLocalStorage() {
    let booksFromStorage = JSON.parse(localStorage.getItem("books"));
    if (booksFromStorage != null){
        books = booksFromStorage
    }
};

function clearPool(bookIndex){
    books[bookIndex].comments.splice(-1, books[bookIndex].comments.length);
    renderComments(bookIndex);
    
}

function clearStorage() {
    localStorage.clear();
};

//if (booksFromStorage = null){       //falsche Variante
//    books != booksFromStorage
//}

//if (booksFromStorage != null){
//    books = booksFromStorage
//}