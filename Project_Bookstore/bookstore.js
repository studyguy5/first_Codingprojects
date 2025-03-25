

let books = [
  {
    "name": "Der Klang der Ewigkeit",
    "author": "Johanna Bernstein",
    "likes": 1340,
    "liked": true,
    "price": 20.99 + ' €',
    "publishedYear": 2022,
    "genre": "Mystery",
    "comments": [
      {
        "name": "Lesefuchs",
        "comment": "Ein fesselndes Buch mit einer unglaublichen Atmosphäre – absolute Empfehlung!"
      },
      {
        "name": "Bücherwurm77",
        "comment": "Die Handlung war tiefgründig und spannend, aber das Ende kam mir etwas zu abrupt."
      },
      {
        "name": "ThrillerQueen",
        "comment": "Ein Mystery-Roman mit vielen Wendungen – ich habe jede Seite geliebt!"
      }
    ]
  },
  {
    "name": "Zwischen Licht und Schatten",
    "author": "Markus Degen",
    "likes": 860,
    "liked": false,
    "price": 16.50 + ' €',
    "publishedYear": 2020,
    "genre": "Drama",
    "comments": [
      {
        "name": "Romanliebhaber",
        "comment": "Ein tiefgründiges Buch mit emotionalen Momenten, das mich sehr bewegt hat."
      },
      {
        "name": "Nachdenklich_99",
        "comment": "Eine Geschichte, die einen noch lange beschäftigt – sehr lesenswert!"
      }
    ]
  },
  {
    "name": "Die vergessenen Pfade",
    "author": "Sophie Keller",
    "likes": 1720,
    "liked": true,
    "price": 18.75 + ' €',
    "publishedYear": 2018,
    "genre": "Abenteuer",
    "comments": [
      {
        "name": "AbenteuerSeeker",
        "comment": "Spannend und mitreißend! Ich hatte das Gefühl, selbst auf der Reise zu sein."
      },
      {
        "name": "WandererX",
        "comment": "Die Landschaftsbeschreibungen sind atemberaubend – ein wirklich großartiges Buch!"
      },
      {
        "name": "BücherNerd12",
        "comment": "Abenteuer, Geheimnisse und starke Charaktere – eine perfekte Mischung!"
      }
    ]
  }
];


function init() {
  getFromLocalStorage();
  renderBook();
};




let keys = Object.keys(books[0])


function renderBook() {
  let bookone = document.getElementById('bookcontainer');
  bookone.innerHTML = "";
  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    bookone.innerHTML += `<div class="renderBookContainer"><h2>${books[bookIndex].name}<h2>
  <div class="start-div">
    <div class="bookImage"><img src="./book-illustration.png"></div>
      <div class="book-metainformation">
          <div class="price-likebutton">
            <h3>${books[bookIndex].price}</h3><h3>${books[bookIndex].likes}<span class="heart"><img onclick="likeBook(${bookIndex})" src="./like_heart.png"></h3></span>  
          </div>
          <div class="author-div">
            <table>
              <tr>
                <td class="keytd">${keys[1]}:</td>
                <td>${books[bookIndex].author}</td>
              </tr>
              <tr>
                <td class="keytd">${keys[5]}:</td>
                <td>${books[bookIndex].publishedYear}</td>
              </tr>
              <tr>
                <td class="keytd">${keys[6]}:</td>
                <td>${books[bookIndex].genre}</td>
            </table>
          </div>            
      </div> 
      
      <div id="comment-section" class="comment-section">
            <h3>Comments</h3>
            <table id="comment-table-${bookIndex}">
              <tr>
                <td>${books[bookIndex].comments.name}</td>
                <td>${books[bookIndex].comments.comment}</td>
              </tr>
              <tr>
                <td>${books[bookIndex].comments.name}</td>
                <td>${books[bookIndex].comments.comment}</td>
              </tr>
              <tr>
                <td>${books[bookIndex].comments.name}</td>
                <td>${books[bookIndex].comments.comment}</td>
              </tr> 
            </table>

      </div>
              <hr>
            <div class="inputSection">
              <input id="inputNameField-${bookIndex}" class="inputNameField" placeholder="type in your Name...."></input>
              <input id="inputField-${bookIndex}" class="inputField" placeholder="write a comment...."></input>
            
              <div class="comment-sectionButton">         
                <button type="submit" onclick="saveTheComment(${bookIndex})">add Comment</button>
                <button type="submit" onclick="clearPool(${bookIndex})">clear Comment</button>
              </div>
                
            </div>
            <div class="delete-Storage">
            <button type="reset" onclick="clearStorage(${bookIndex})">clear Storage</button>
            </div>
          </div>
        `;
    renderComments(bookIndex);
  }
}

// mit onclick ausgelöst
function saveTheComment(bookIndex) {

  let newComment = document.getElementById(`inputField-${bookIndex}`);
  let newName = document.getElementById(`inputNameField-${bookIndex}`);


  books[bookIndex].comments.push({ 'name': newName.value, 'comment': newComment.value });   //hier werden die Values beider Inputfelder gleichzeitig in das Array gepusht

  saveComment(books);
  renderComments(bookIndex)

  newName.value = "";
  newComment.value = "";





};

function renderComments(bookIndex) {
  let commentTable = document.getElementById(`comment-table-${bookIndex}`);
  let comments = books[bookIndex].comments;
  commentTable.innerHTML = "";
  for (let commentIndex = 0; commentIndex < comments.length; commentIndex++) {
    commentTable.innerHTML += `
    <table>
      <tr>
        <td>${comments[commentIndex].name}</td>
        <td>${comments[commentIndex].comment}</td>
      <tr>
    </table>`

      ;
  }
}

function likeBook(bookIndex) {
  sum = books[bookIndex].likes;           // Wert von books[bookIndex].likes wird in sum gespeichert - von rechts nach links gepackt!!!!
  if (books[bookIndex].liked !== true) {
    sum += 1;                             // += zur aktuellen Zahl 1 addieren (sum = 1 wäre eine Zuweisung von 1!!)
    books[bookIndex].liked = true;        // den status von false auf true setzen
  } else {
    sum -= 1;                               // das gleiche hier mit -= von der aktuellen Zahl 1 subtrahieren
    books[bookIndex].liked = false;
  }
  books[bookIndex].likes = sum;           //hier werden alle Änderungen in sum wieder nach links in das Array gepackt
  //Zusatz: auch hier ob von sum nach books[bookIndex].likes
  renderBook();                             //zum schluss, das gebiet, indem etwas geändert wurde, aktualisieren mit renderBook()

}


