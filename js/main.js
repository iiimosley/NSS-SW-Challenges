/// challenge #1 - syncing inputs

let numInput = document.getElementById("num");
let rangeInput = document.getElementById("slide");

numInput.addEventListener("input", function(e){
    rangeInput.value = e.target.value; 
});

rangeInput.addEventListener("input", function (e) {
    numInput.value = e.target.value;
});

