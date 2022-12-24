//7 8 9 x 4 5 6 - 1 2 3  +  /  0  .  =
//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
var buttonSet = document.getElementsByClassName("butStyle");
var answerButton = document.getElementsByClassName("answer");

var formula = "";
var operator = ["+", "-", "*", "/"];

//add event listener to each button, 
for(var i = 0; i < buttonSet.length; i++) {
    buttonSet[i].addEventListener("click", val => {
        if (val.target.attributes[2].value == "=") {
            calculate();
        }
        else if (!(operator.includes(val.target.attributes[2].value))) {
            formula = formula + val.target.attributes[2].value;
            document.getElementById("result").value = formula;
        }
        else {
            formula = formula + " " + val.target.attributes[2].value + " ";
            document.getElementById("result").value = formula;
        }
        
    });
}

//if click "=", calculate the result and display in the panel
function calculate() {
    var checker = formula.split(" ");
    checker = checker.filter(function(str) {
        return /\S/.test(str);
    });
    console.log(checker);


    var isOperator = 0;
    var errFormula = 0;
    for (var i = 0; i < checker.length; i++) {
        if (operator.includes(checker[i]) && isOperator == 1) {
            alert("Error Input!");
            errFormula = 1;
        }

        if (operator.includes(checker[i])) {
            isOperator = 1;
        }
        else {
            isOperator = 0;
        }
        
    }

    if (errFormula != 1) {
        var result = eval(formula);
        document.getElementById("result").value = result;
        formula = result + " ";
    }
    
}