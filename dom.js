// let button=document.getElementById("myId"); //h1
// console.dir(button);     

// let headings= document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// let parahs=document.getElementsByTagName("p");
// console.dir(parahs);

// let firstEl=document.querySelector("p");    //1st element
// console.dir(firstEl);

// let allEl=document.querySelectorAll("p");    //all elements
// console.dir(allEl);

let newBtn=document.createElement("button");
newBtn.innerText="click me!";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

document.querySelector("body").prepend(newBtn);