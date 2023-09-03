// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";

const myImage = document.querySelector("img");

myImage.onclick = ()=>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-icon.jpeg"){
        myImage.setAttribute("src", "images/firefox2.jpg");
    } 
    else{
        myImage.setAttribute("src", "images/firefox-icon.jpeg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const MyName = prompt("Please enter your name.");
    if(!MyName){
        setUserName();
    }
    else{
        localStorage.setItem("name", MyName);
        myHeading.textContent = `Mozilla is cool, ${MyName}`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = ()=>{
    setUserName();
};