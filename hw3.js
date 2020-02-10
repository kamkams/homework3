console.log("started HW");

function run(){
	parent = document.getElementById('main');
	addItems(parent,100);
}

function addItems(parent, n){
    for (var i = 1; i <= n; i++) {

		// console.log(i + " / " + n);
		var div =document.createElement("div");
	
		div.innerText = i + " =Buzz" + " Fizz";//TODO 
		div.className = getClassName(i);
		// TODO add id to div
		// var c = document.getElementById("div").getElementsByClassName;
		// document.getElementById("demo").innerHTML = c;
	
		parent.appendChild(div);			
		console.log(div);

	}
}  

function getClassName(number){
	var className = ""
	if (number % 3 === 0) {
		className = className + "divides3"
	} else if (number % 5 === 0) {
		className = className + "divides5"}
		else if (number % 3 , 5 === -1) {
			className = className + "dont divides"

		}

	//ADD ATHER IF statmant	

	return className;
	

}




// var Fizz = "Fizz";
// var Buzz = "Buzz";

// function addItemsFB (addItems, Fizz, Buzz){
//     for a = i/3;
//         console.log(addItems, Fizz);
// }  
// // var myNumbers = {
//     addItems, " =", "Fizz", "Buzz",
 
// };


// var element = document.createElement("tagName"[,i]);
// console.log("tagName",i);


/** 
 * 
 * TODO:
 * 	 + 1) Atradis elementu kam pievienot parejos
 * 	 + 2) Pievienot elementu div n
 *  3) Jasaprot kadiem kadiem elemtiem jabut
 * 		- jamak noradit specifiska klase (4 klases  divides3and5, divides3, divides5, notdivides3and5 )
 * 		- jamak teksts noradit
 * 		- jamak norradit unikals ID 1-100
 * 
 * 		
 * 
 * 
 */

