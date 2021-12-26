/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
 */

function printFizzBuzzBasedOn_3_5(num1, num2){
    for(let i=0;i<=100;i++){
        if(i%num1==0){
            console.log("Fizz")
        }
        if(i%num2==0){
            console.log("Buzz")
        }
    }
}

// printFizzBuzzBasedOn_3_5(3, 5);


function printFizzBuzzBasedOn_3_and_5(num1, num2){
    for(let i=0;i<=100;i++){
        if(i%num1==0 && i%num2==0){
            console.log("FizzBuzz", i)
        }
        if(i%num1==0){
            console.log("Fizz", i)
        }
        if(i%num2==0){
            console.log("Buzz", i)
        }


        
    }
}

// printFizzBuzzBasedOn_3_and_5(3, 5);

//// Final Solution

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
