



function saveComment(books) {

    localStorage.setItem('books', JSON.stringify(books));  // hier wird das ganze Array gespeichert anstatt einzelne Einträge
};



function getFromLocalStorage() {
    let booksFromStorage = JSON.parse(localStorage.getItem("books"));
    if (booksFromStorage != null){              // = nicht verwenden - dies ist ein zusweisungsoperator auch in der If-Abfrage,
        books = booksFromStorage
    }
};

function clearPool(bookIndex){
    books[bookIndex].comments.splice(-1, books[bookIndex].comments.length);     // durch das -1 wird ganz am Ende der letzte Eintrag gelöscht
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