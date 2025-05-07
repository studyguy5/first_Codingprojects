let myObjectArr = [
    {
        "name" : "Max",
        "is_a_good_guy": true           //from "name" to "true" is one Element
    },
    {
        "name": "Peter",                //here begins the next Element
        "is_a_good_guy": false
    },
    {
        "name": "Arnold",
        "is_a_good_guy": true,
        "collegedegree": false
    },
    {
        "name": "Justus",
        "is_a_good_guy": true,
        "collegedegree": true , 
        "but comming soon": "keine Ahnung"
    },
    {
        "name": "Bombur",
        "is_a_good_guy": false
    }
]


    //here an Array name with a filter function combined with a arrow function
console.log(myObjectArr.findIndex(checkindex));

function checkindex(element){
    return element['collegedegree'] == false}



       //from return to 6 is the main body of the arrow function

//the arrow function has to end with a true or false statement
//the original syntax for the filter function: array.filter(function(currentValue, index, arr), thisValue)

//element is the parameter of the arrow function
// the equal plus arrow symbol  "=>"  stands for the word function in this case



let library = {
    "info": {
      "name": "Stadtbibliothek",
      "location": {
        "city": "Musterstadt",
        "coordinates": { "lat": 48.1351, "lon": 11.582 }
      }
    },
    "sections": {
      "fiction": [
        {
          "shelf": 1,
          "book": {
            "title": "Die Verwandlung",
            "author": {
              "name": "Franz Kafka",
              "born": "1883-07-03",
              "died": "1924-06-03"
            },
            "year": 1915,
            "status": "ausgeliehen"
          }
        },
        {
          "shelf": 2,
          "book": {
            "title": "1984",
            "author": {
              "name": "George Orwell",
              "born": "1903-06-25",
              "died": "1950-01-21"
            },
            "year": 1949,
            "status": "verfügbar"
          }
        }
      ],
      "nonFiction": [
        {
          "shelf": 3,
          "book": {
            "title": "Eine kurze Geschichte der Zeit",
            "author": {
              "name": "Stephen Hawking",
              "born": "1942-01-08",
              "died": "2018-03-14"
            },
            "year": 1988,
            "status": "verfügbar"
          }
        }
      ]
    }
  }

  
  console.log(library.sections.fiction[1].book.status);


  

 for (let i = 0; i < library.sections['fiction'].length; i++) {
  console.log(library.sections['fiction'][i].book.title + " >Titel der Fiction Reihe");
  
 };   // die Bücher Title des Arrays "fiction" anzeigen lassen
  

 console.log(library.sections);
 //beide sections anzeigen lassen ohne For-Schleife

 console.log(library.sections['nonFiction'][0].book.title);
 //nur den Titel der "nonFiction" section anzeigen lassen

 console.log(library.sections['fiction'][0].book.title);
 // erste Title der section "fiction" anzeigen lassen, ein Titel geht ohne For-Schleife

 for (let i = 0; i < library.sections; i++) {
  console.log(library.sections[Object.values(library.sections)][i] + " >Titel der Fiction Reihe");
  
 };

 for (let i = 0; i < Object.values(library.sections).length; i++) {
  // Durchlaufe jede Sektion (fiction, nonFiction)
  for (let j = 0; j < library.sections[Object.keys(library.sections)[i]].length; j++) {
    console.log(library.sections[Object.keys(library.sections)[i]][j].book.title);
  }
}
//zeigt alle Titel beider sections an (chat gpt Variante)