///// Array
let myNumbers = [1,2,3,4,5,6];

console.log(myNumbers[4]);

///// push -->> add element at the end of an array
myNumbers.push(7);
console.log(myNumbers);
/// pop -->> remote last element form an array 
myNumbers.pop();
console.log(myNumbers);

//// Objects 
let myName = {
    fName:'Vrushabh',
    lName:'Dhatrak',
}

console.log(myName.fName, myName.lName);
console.log(myName.state);
myName.state = 'Maharashtra';

console.log(myName);


///// deleting a property form an object
let newObj = {
    userName:123456,
    email:'l@gamil.com',
    password:'xyz',
}

console.log(newObj);

delete newObj.email;

console.log("adminAccess" in newObj);


//// printing keys of an object

let dummyObj = {
    x:1,
    y:2,
    z:3
    
};

console.log(Object.keys(dummyObj));

//// adding and assign new property to an existing object

Object.assign(dummyObj, {y:5, newVal:"sgsgsg"});

console.log(dummyObj)

