function run(num) {
	parent = document.getElementById('main');
	parent.innerHTML = "";
	addItems(parent,num);
}

function addItems(parent, n){
    for (let i = 1; i <= n; i++) {
	let div =document.createElement("div");
	div.innerText = i;
	div.className = getClassName(i);
	parent.appendChild(div);			
	}
}  

function getClassName(number){
	var className = " "		
if (number % 3 === 0 && number % 5 !== 0) { className += "Fizz"};
if (number % 3 !== 0 && number % 5 === 0) { className += "Buzz"};
if (number % 3 === 0 && number % 5 === 0) { className += "FizzBuzz"};
if (number % 3 !== 0 && number % 5 !== 0) { className += "Emty"};

	return className;
}

const myInput = document.querySelector(".num-input");
const myBtnF = document.querySelector("#FizzBtn");
const myBtnB = document.querySelector("#BuzzBtn");
const myBtnFB = document.querySelector("#FizzBuzzBtn");
const delButton = document.querySelector("#deleteBtn");

myInput.style.backgroundColor = "#fff9c7";
myBtnF.style.backgroundColor = "grey";
myBtnB.style.backgroundColor = "greenyellow";
myBtnFB.style.backgroundColor = "cornflowerblue";
delButton.style.backgroundColor = "yellow";


myInput.addEventListener("change",onInput);
function onInput(event){
	 run(event.target.value);
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

	run(myInput.value);
});

document.addEventListener('DOMContentLoaded', (event) => {
	run(myInput.value)
});