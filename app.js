// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
console.log("Hi");
document.write("i am the best");


let a=5;
let b=6;
let x="Ali";
console.log(a+b);


///////////////////addidtion////////////////////


let c=a+b;
document.write("The sum of A and B  "+ c);


///////////////////find data type////////////////


console.log(typeof(x));



/////////////concatination /////////////////


let fname="Ali";
let lname="Khan3";
console.log(fname+lname);



/////////////Object in javascript /////////////



let studentsDetails={
name:"Dilbar",
age:18,
points:3,
pass:true
    
}


// const points=studentsDetails.points;
// console.log(points)


/////////////////////Addidtion in Object /////////////



let status=studentsDetails.pass=false

console.log (status)



////////////////Add some thing object///////////



studentsDetails.room=15;


/////////////////Print Object///////////



console.log(studentsDetails)


///////////////Array///////////

let arr=["ali",'ahmad ','khan',12,15]
console.log(arr)

////////////////////Addidition in array ///////////



arr[5]='Ali Bahie';
console.log(arr)



/////////////////Length of array/////

let arrlen=arr.length;
console.log(arrlen)



///////////////reverse arr/////////////

console.log (arr.reverse ());





////////////////////Functions////////////////

function addition (a,b){
    let result=a+b;
    return (result) 
}
addition (4,6);
console.log(addition(4,5))





////////////some more examples of javascript////


// .💔💖-----------Global variable------------

let newpassword=null;

function password(){
    let original="Dilbar ali";
    newpassword=original;
    return newpassword;
}

let result=password();
console.log(result);






// --------------🤴👩‍🔧👩‍🔧--Conditions---------------------

let serverisrunning=true;
if(serverisrunning==true){
    console.log("Server is running  ");
    
}
else{
    console.log (" NOt Running  ");
    
    
}