
let categorys = [
  {
    name : "Pizza",
    description: "Pizza's nach deinem Geschmack"
  },
  {
    name : "Pasta",
    description: "Pasta al dente und lecker"
  },
  {
    name : "Beilagen",
    description: "Beilagen, die dazu passen"
  },
  {
    name : "Getränke",
    description: "alkoholische Getränke / Limonaden"
    
  },
  {
    name : "Dessert",
    description: "Spezialitäten für Feinschmecker"
  },
];


let menu = [

  // Hauptgerichte - Pizza
  {
    id: 1,
    category: "Pizza",
    name: "Pizza Margherita",
    description: "Tomatensauce, Mozzarella, frisches Basilikum",
    price: Number("8.50"),
    amount: 0
  },
  {
    id: 2,
    category: "Pizza",
    name: "Pizza Salami",
    description: "Tomatensauce, Mozzarella, italienische Salami",
    price: Number("9.50"),
    amount: 0
  },
  {
    id: 3,
    category: "Pizza",
    name: "Pizza Funghi",
    description: "Tomatensauce, Mozzarella, Champignons",
    price: Number("9.00"),
    amount: 0
  },
  {
    id: 4,
    category: "Pizza",
    name: "Pizza Diavola",
    description: "Tomatensauce, Mozzarella, scharfe Salami, Peperoni",
    price: Number("10.0"),
    amount: 0
  },
  {
    id: 5,
    category: "Pizza",
    name: "Pizza Quattro Formaggi",
    description: "Vier Käsesorten, Tomatensauce",
    price: Number("10.5"),
    amount: 0
  },
  {
    id: 6,
    category: "Pizza",
    name: "Pizza Prosciutto e Funghi",
    description: "Schinken, Champignons, Tomatensauce, Mozzarella",
    price: Number("10.2"),
    amount: 0
  },

 //Pasta
  {
    id: 7,
    category: "Pasta",
    name: "Spaghetti Carbonara",
    description: "Mit Speck, Ei und Sahnesauce",
    price: Number("9.50"),
    amount: 0
  },
  {
    id: 8,
    category: "Pasta",
    name: "Penne all’Arrabbiata",
    description: "Scharfe Tomatensauce mit Knoblauch und Chili",
    price: Number("8.90"),
    amount: 0
  },
  {
    id: 9,
    category: "Pasta",
    name: "Lasagne al Forno",
    description: "Mit Hackfleischsauce und Bechamel überbacken",
    price: Number("10.5"),
    amount: 0
  },

 //beilage 
  {
    id: 10,
    category: "Beilagen",
    name: "Bruschetta",
    description: "Geröstetes Brot mit Tomaten und Basilikum",
    price: Number("4.50"),
    amount: 0
  },
  {
    id: 11,
    category: "Beilagen",
    name: "Caprese",
    description: "Mozzarella, Tomaten, Basilikum",
    price: Number("6.50"),
    amount: 0
  },
  {
    id: 12,
    category: "Beilagen",
    name: "Insalata Mista",
    description: "Gemischter Salat mit Hausdressing",
    price: Number("5.00"),
    amount: 0
  },

 //drink 
  {
    id: 13,
    category: "Getränke",
    name: "Coca-Cola (0,33l)",
    description: "",
    price: Number("2.50"),
    amount: 0
  },
  {
    id: 14,
    category: "Getränke",
    name: "Mineralwasser (0,5l)",
    description: "",
    price: Number("2.00"),
    amount: 0
  },
  {
    id: 15,
    category: "Getränke",
    name: "Rotwein (0,2l)",
    description: "Hauswein",
    price: Number("3.80"),
    amount: 0
  },
  {
    id: 16,
    category: "Getränke",
    name: "Espresso",
    description: "",
    price: Number("2.20"),
    amount: 0
  },

 //dessert 
  {
    id: 17,
    category: "Dessert",
    name: "Tiramisu",
    description: "Hausgemacht mit Espresso und Mascarpone",
    price: Number("5.00"),
    amount: 0
  },
  {
    id: 18,
    category: "Dessert",
    name: "Panna Cotta",
    description: "Mit Erdbeersauce",
    price: Number("4.80"),
    amount: 0
  }
];


shoppingCart = [];