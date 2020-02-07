function numbers(){
    addItems(100);
}
function addItems(n){
    parent = document.getElementById(".mynumbers")
    for (var i = 0; i <= n; i++) {
        createNewItem(parent, i);
    } 
}
console.log(numbers());