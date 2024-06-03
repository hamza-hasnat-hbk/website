/*function Person(name, eyeColor, age){
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function(){
        return ++this.age;
    };
}
let person01 = new Person("Hamza", "Brown", 23);
let person02 = new Person("Umar", "Brown", 20);
let person03 = new Person("Umair", "Brown", 19);
let person04 = new Person("Muslim", "Brown", 13);*/


/*let getRandomNumber = function(start, range) {
    let getRandom = Math.floor((Math.random() * range) + start);
    while (getRandom > range){
        getRandom = Math.floor((Math.random() * range) + start);
    }
    return getRandom;
}

console.log(getRandomNumber(5, 15));*/

/*let start = 5;
let range = 10;
let getRandom = Math.floor((Math.random() * (range - start)) + start);
console.log(getRandom);*/

/*let getBody = document.body;
let newElement = document.createElement("h1");
let date = new Date();
let currentHour = date.getHours();

// this is the time displaying code
let createTextMsg;
if(currentHour >= 4 && currentHour < 10) {
    createTextMsg = "Good Morning!";
}else if(currentHour >= 10 && currentHour < 12) {
    createTextMsg = "Good Day!";
}else if(currentHour >= 12 && currentHour < 18) {
    createTextMsg = "Good Afternoon!";
}else if(currentHour >= 18 && currentHour < 22) {
    createTextMsg = "Good Evening!";
}else if(currentHour >= 22 && currentHour < 4) {
    createTextMsg = "Good Night!";
}else{
    createTextMsg = "Are you From another planet!";
}

let createEleText = document.createTextNode(createTextMsg);
newElement.appendChild(createEleText);
getBody.appendChild(newElement);
newElement.setAttribute("class", "welcome");
newElement.style.cssText = "text-align: center; font-size: 60px; font-family: arial;";*/

// events
let dragValue;
function(id){
    let element = document.getElementById(drag);
}