console.log("This is destructuring")
/// Destructuring in Javascript

let a,b;
[a, b] = [22, 778];

console.log(a, b)
/// 22, 778

//// Array Destructuring 
let [e, f, g, ...h] = [1,2,3,4,5,6,7,8,9,10,11,12,13];

console.log(e) //// 1
console.log(f) /// 2
console.log(g) /// 3
console.log(h) //// ...h is a spread operator -->> [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const fruits = ["apple", "bananas", "Mangos"]
let [x, y, z] = fruits;
console.log(x, y, z)

//// Object Destructuring 
const laptop = {
    model: "HP Pavilion",
    age:"23 Days",
    net:" Male",
    start:function(){console.log("Started")}
}

const {model, age, net , start} = laptop;
console.log(model, age, net, start);
start.call();




