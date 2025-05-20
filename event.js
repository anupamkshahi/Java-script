// let btn1=document.querySelector("#btn1");

// btn1.onclick=(e)=>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a); //26
// };

// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are inside div");
// };

let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light"; //dark
modebtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});