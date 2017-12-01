/////Happy Numbers

//loop through 1000
//push the summed squared broken numbers to the dom
//push unhappy numbers to array + console log
//break numbers apart (ie:  12 = '1' '2' )
//square each broken number (ie, 12 = 1^2, 2^2)
//add the squared broken numbers ((1^2 + 2^2))
let happyButton = document.getElementById("happyButton");
happyButton.addEventListener("click", function (){happyNumbers(20)}, { once: true });

function happyNumbers(x) {
    for (i = 1; i<=x; i++) {
        // console.log("firstloop");
        reCur(i);
        // console.log(i+":", sumNum, squareSum);
    }
};

function reCur(v) {
    let unHappy = [4, 16, 37, 58, 89, 145, 42, 20];
    let sumNum = (""+v).split("");
    let squareSum = sumNum.reduce(function (doneSquared, toSquare) {
        return +doneSquared + Math.pow(toSquare, 2);
    }, 0);
    if (squareSum === 1){
        console.log("Happy Number!", v)
        return true;
    }  else {
        unHappy.forEach(function(z) {
            if (squareSum === z) {
                return;
            } else { 
                reCur(squareSum);
            };
        });
        return;
    }
    return;
} 