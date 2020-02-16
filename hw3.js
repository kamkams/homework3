console.log("started HW");

function run(num) {
	parent = document.getElementById('main');
	addItems(parent,num);
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
if (number % 3 === 0 && number % 5 !== 0) { className += "Fizz"};// divides with 3 ONLY
if (number % 3 !== 0 && number % 5 === 0) { className += "Buzz"};// divides with 5 ONLY
if (number % 3 === 0 && number % 5 === 0) { className += "FizzBuzz"};// divides with 5 and 3 evenly
if (number % 3 !== 0 && number % 5 !== 0) { className += "Emty"};// does not divides with 5 and 3

	return className;
}
const myInput = document.querySelector(".num-input");
// const myBtnSM = document.querySelector("#submitBtn");
const myBtnF = document.querySelector("#FizzBtn");
const myBtnB = document.querySelector("#BuzzBtn");
const myBtnFB = document.querySelector("#FizzBuzzBtn");
const delButton = document.querySelector("#deleteBtn");

// console.log(`My value is ${myInput.value}`);




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
myInput.addEventListener("change",onInput);
function onInput(event){
	console.log("new value is",event.target.value);
}	

myBtnF.addEventListener("click",function() {
	var elements = document.querySelectorAll('.container > div');
	elements.forEach(function(el){
		 if(false === el.classList.contains("Fizz")){
		 el.remove();
	 }
	});

});

myBtnB.addEventListener("click", function () {
	var elements = document.querySelectorAll('.container > div');
	elements.forEach(function(el){
	 if(false === el.classList.contains("Buzz")){		 
		 el.remove();
	 }
	});
});

myBtnFB.addEventListener("click", function () {
	var elements = document.querySelectorAll('.container > div');
	elements.forEach(function(el){
	 if(false === el.classList.contains("FizzBuzz")){		 
		 el.remove();
	 }
	});
});
delButton.addEventListener("click", function () {
	var elements = document.querySelectorAll('.container > div');
	elements.forEach(function(el){
      el.remove();

	});

	run(100);// TODO

});

document.addEventListener('DOMContentLoaded', (event) => {
	run(100)
  })
// function showFizz(){
// 	var elements = document.querySelectorAll("Fiz");
// 	elements.forEach(function(el){
// 	 if(false === el.classList.contains("Fizz")){
// 	 	el.remove();
// 	 }
// 	});
// }

// // let nThrows = myInput.value;
    // let result = getAverage(nThrows);


// myBtnSM.onclick = onButtonClick;
// myBtnF.onclick = onButtonClick;
// myBtnB.onclick = onButtonClick;
// myBtnFB.onclick = onButtonClick;
// delButton.onclick = onDelete;





// function myFunction() {
// 	document.getElementById("FizzBtn").innerHTML = className"Fizz";}



