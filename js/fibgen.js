//smallest number -- no remainder
let remainderButton = document.getElementById("remainder");
remainderButton.addEventListener("click", runRemainder);

function runRemainder() {
for (var i = 0; i < 10; i++) {
    console.log ("nope", "nvm");
}};


//Fibonacci Generator
var numbers = [];

let genButton = document.getElementById("fibGen");
genButton.addEventListener("click", startGen);

function startGen() {
    console.log("under construction");
    for (var i = 0; i <= 21; i++) {
        if (i===0) {
            console.log(0);
            console.log(1);
        } else {
            console.log(i);
        }
    }
}