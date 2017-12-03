/////Happy Numbers

//loop through 1000
//push the summed squared broken numbers to the dom
//push unhappy numbers to array + console log
//break numbers apart (ie:  12 = '1' '2' )
//square each broken number (ie, 12 = 1^2, 2^2)
//add the squared broken numbers ((1^2 + 2^2))
let happyButton = document.getElementById("happyButton");
happyButton.addEventListener("click", function (){happyNumbers(1000)}, { once: true });

function happyNumbers(x) {
    for (i = 1; i<=x; i++) {
        reCur(i);
    }
};

function reCur(v) {
    let sumNum = (""+v).split("");
    let squareSum = sumNum.reduce(function (doneSquared, toSquare) {
        return +doneSquared + Math.pow(toSquare, 2);}, 0);
    if (squareSum === 1) {
        console.log("Happy Number!", i);
    } else if (/^(4|16|37|58|89|145|42|20)$/.test(squareSum)){
        return i;
    } else {
        reCur(squareSum);
    }
};
        //loop thru unHappy array 
        //(array placed at top of reCur function)
        //    let unHappy = [4, 16, 37, 58, 89, 145, 42, 20];
//         for (j = 0; j < unHappy.length; j++) {
//             if (unHappy.indexOf(squareSum) !== -1) {
//                 return i;
//             } else {
//                 reCur(squareSum);
//             }
//         }
//     }
// };
            // unHappy.forEach(function(z) {
            //     if (squareSum === z) {
            //         return;
            //     } else { 
            //         reCur(squareSum);
            //     };
            // };       