let myObject = {
    'Name': 'Bob',
    'age' : 60,
    'job' : 'Baumeister',
    'good_guy': true,
};

let key = Object.keys(myObject);

let newkey = ['geplantes Array'];

for (let index = 0; index < key.length; index++) {
    const element = key[index];
    newkey.push(key[index]);
}

console.log(newkey);