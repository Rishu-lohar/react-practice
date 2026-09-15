let myname : string="Jhon";
let age : number=20;
let isStudent : boolean = true;

console.log(myname);
console.log(age);
console.log(isStudent);


let a : number=10;
let b : number = 20;
let sum = a+b;
console.log("Sum = ", sum);
if (a>b){
    console.log(a + "is larger");

}else{
    console.log(b + "is larger");
}

// With function
function add(a:number, b:number): number{
    return a+b;
}
console.log("Sum =", sum);


// Multiplication 
const multiply = (a:number,b:number):number =>{

    return a+b;
}
console.log("multiply = ", multiply(10,20));


// Factorial
let num : number = 5;
let fact: number = 1;

for (let i=1; i<=num; i++){
    fact *= i
}
console.log("Factorial", fact);


// Sum of the array 
let arr : number[] = [90,80,70,60];

let total= 0;

for (let num of arr){
    sum += num;
}
console.log("Sum = ", sum);

let numbers: number[] = [90,80,70,60];

let max = 0;

for (let value of numbers){
    if(value>max){
        max = value;
    }
}
console.log("Maximum = ", max);



