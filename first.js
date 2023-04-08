console.log("hello world")//used for printing

let num=2*3;// let is used define a data type
console.log(num)

console.log(num+4)

let username="dileep" //string
console.log(username)

const pi=3.14 //constant value which cant be changed

let num1=7.5 // all the numbers are basically float type
console.log(num1)

console.log(typeof(username)) //used to check type of data type

let num2=10/0 //it will give the outuput infinity
let num3=-10/0 // it will give the output -ve infinity

let firstname="dileep"
let lastname="sajja"// string conacatination
let fullname= firstname+ " " + lastname
console.log(fullname)

let bool=5>6//boolen data type
console.log(bool)

let num4=String(6)//converting number tio string (type conversion)
console.log(num4 , typeof num4)

let num5=Number("154")//string to number
console.log(num5 , typeof num5)

let x=8
console.log(x,typeof x)

x =x+""//coersion number + strng
console.log(x,typeof x)//final output string

x=x-2 // string + number
console.log(x,typeof x)//final output number

let y= parseInt("124 dileep")//it will do its hard work to convert string into number but it must have number at starting
console.log(y ,typeof y)

let z=Math.pow(5,2)// maths functions
console.log(z)

let a=100
let b= "a"
console.log(a>b)

//conditional statements
let c=4;
let d=7;
if(a>b)
{
    console.log("a is grater")
}else{
    console.log("b is grater")
}
// switch case

//tamplet litreal backtick "`"

console.log(`hello this ${a} is tamplet literal`)
console.log(`hello this is 
dileep`)// we can write in two lines

//while loop
let e=1
while(e<5){
    console.log("hi")
    e++
}

//do while loop
do{
    console.log("he")
    e++
}while(e<5)