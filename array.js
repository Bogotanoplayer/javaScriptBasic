let fruits = ["Banana", "Apple", "Tusidi"];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

let masFrutas = fruits.push("Caballo");
let feka = fruits.pop("Caballo");

let primero = fruits.unshift("polla");

let fekaTwo = fruits.shift("polla");
let positionunk = fruits.indexOf("Tusisdi")

fruits.sort()//(3) ['Apple', 'Banana', 'Tusidi']0: "Apple"1: "Banana"2: "Tusidi"length: 3[[Prototype]]: Array(0)
fruits.reverse()//(3) ['Tusidi', 'Banana', 'Apple']
fruits.slice(1)//(2) ['Banana', 'Apple']
fruits.push("Cherry")//4
fruits.splice(0,2)//(2) ['Tusidi', 'Banana']
fruits//(2) ['Apple', 'Cherry']
fruits.splice(0,2,'fortnite')//(2) ['Apple', 'Cherry']
fruits//['fortnite']
let x=[1,2,3]

let y=[4,5,6]

x.concat(y)//(6) [1, 2, 3, 4, 5, 6]

fruits.splice(0,0,'Summer')
fruits//(2) ['Summer', 'fortnite']