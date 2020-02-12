console.log("started HW");

function run() {
	parent = document.getElementById('main');
	addItems(parent,100);
}

function addItems(parent, n){
    for (let i = 1; i <= n; i++) {
	let div =document.createElement("div");
	div.innerText = i;
	div.className = getClassName(i);
	parent.appendChild(div);			
	console.log(div);

	}
}  

function getClassName(number){
	var className = " "		
if (number % 3 === 0 && number % 5 === 0) { className += "FizzBuzz"};// divides with 5 and 3 evenly
if (number % 3 === 0 && number % 5 !== 0) { className += "Fizz"};// divides with 3 ONLY
if (number % 3 !== 0 && number % 5 === 0) { className += "Buzz"};// divides with 5 ONLY
if (number % 3 !== 0 && number % 5 !== 0) { className += "Emty"};// does not divides with 5 and 3

	return className;
}
const myInput = document.querySelector(".num-input");
// const myBtnSM = document.querySelector("#submitBtn");
const myBtnF = document.querySelector("#FizzBtn");
const myBtnB = document.querySelector("#BuzzBtn");
const myBtnFB = document.querySelector("#FizzBuzzBtn");
const delButton = document.querySelector("#deleteBtn");

console.log(`My value is ${myInput.value}`);
// console.log (`Fizz btn was click ${myBtnF.value} `)



// myBtnSM.style.backgroundColor = "pink";
myInput.style.backgroundColor = "#fff9c7";
myBtnF.style.backgroundColor = "grey";
myBtnB.style.backgroundColor = "greenyellow";
myBtnFB.style.backgroundColor = "cornflowerblue";
delButton.style.backgroundColor = "yellow";




// myBtnSM.addEventListener("click", onButtonClick);
// function onButtonClick() {
// 	console.log("Button was clicked!");
// }
	

myBtnF.addEventListener("click", onButtonClick);
function onButtonClick() {
	console.log("Button was Fizz!");
	
}

myBtnB.addEventListener("click", onButtonClick);
function onButtonClick() {
	console.log("Button was Buzz!");
}

myBtnFB.addEventListener("click", onButtonClick);
function onButtonClick() {
	console.log("Button was FizzBuzz!");
}

delButton.addEventListener("click", onButtonClick);
function onDelete() {
	console.log("Button was clicked, delete!");
delButton.onclick = onDelete;
}


// let nThrows = myInput.value;
    // let result = getAverage(nThrows);


// myBtnSM.onclick = onButtonClick;
// myBtnF.onclick = onButtonClick;
// myBtnB.onclick = onButtonClick;
// myBtnFB.onclick = onButtonClick;
// delButton.onclick = onDelete;





// function myFunction() {
// 	document.getElementById("FizzBtn").innerHTML = className"Fizz";}



