console.log("hello world!");
//This is a single-line comment.
/*This is a multi-line
comment.*/

//Arithematic operators

// let a=7;
// let b=5;
// //let c=a+b;
// console.log("a=",a,"&b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);

// uniary operators
// let a=8;
// let b=4;
// console.log("a=",a,"&b=",b);
// // console.log("++a=",++a); //9(first change the value then print)
// // console.log("b++=",b++); //4(first print the value then change)
// // console.log("b=",b); //5
// console.log("--a=",--a); //8(first change the value then print)
// console.log("a=",a);
// console.log("b--=",b--); //(first print the value then change)
// console.log("b=",b);

// Assignment operator

// let a=8;
// let b=4;
// a+= 4;
// console.log("a=",a);
// a-=4;
// console.log("a=",a);
// a*=4;
// console.log("a=",a);

// c=6;
// c%=4;
// console.log("c=",c);

// b=2;
// b**=4;
// console.log("b=",b);

// Comparison operator
// let a=5;  
// let b="5";
// console.log("5==5",a==a);
// console.log("a!==b",a!==b);

// logical operator

// let a=8;
// let b=9;
// let cond1=a>b; 
// let cond2=a==8;
// console.log("cond1 && cond2=",cond1 && cond2);

// conditional statement

// let age=10;

// if(age>18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }

// let mode="light";
// let color;
// if(mode=="dark"){
//     color="black";
// }
// else{
//     color="white"; 
// }
// console.log(color);
 
// let num=10;
// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }
// let mode="dark";
// let color;
// if(mode==="dark"){
//     console.log("black");
// }else if(mode==="light"){
//     condole.log("white");
// }else{
//     console.log("Brown");
// }

let score=prompt("enter a scores:");

if(score>=90 && score<=100){
    console.log("garde:A");
}else if(score>=70 && score<=89){
    console.log("garde:B"); 
}else if(score>=60 && score<=69){
    console.log("garde:C");
}else if(score>=50 && score<=59){
    console.log("garde:D");
}else{
    console.log("garde:F");
}