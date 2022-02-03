var π = 3.1415926535;
var e = 2.7182818284;
var degtorad = document.getElementById("degtorad");
var store = 0;
// Declare Function for Declaring all variables
function Declare() {
    var input = document.getElementById("history-value");
    var result = document.getElementById("output-value");
    var btnequal = document.getElementById("equal");
    return [input, result, btnequal];
}
// Num Function for add Number & Operator
function Num(value) {
    var _a = Declare(), input = _a[0], result = _a[1], btnequal = _a[2];
    btnequal.disabled = false;
    if (result.innerHTML != "") {
        input.innerHTML = result.innerHTML + value;
        result.innerHTML = "";
    }
    else {
        input.innerHTML += value;
    }
}
;
// Equal Function
var Equal = function () {
    var _a = Declare(), input = _a[0], result = _a[1];
    if (input.innerHTML === "") {
        alert("Input is Empty");
    }
    else {
        result.innerHTML = eval(input.innerHTML).toFixed(2);
    }
};
// Clear Function
var Remove = function () {
    var _a = Declare(), input = _a[0], result = _a[1], btnequal = _a[2];
    btnequal.disabled = false;
    document.getElementById("trigo").selected = true;
    document.getElementById("fun").selected = true;
    input.innerHTML = "";
    result.innerHTML = "";
};
// Backspace Function
var Backspace = function () {
    var input = Declare()[0];
    input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
};
// Power Function
var Power = function (value) {
    var _a = Declare(), input = _a[0], result = _a[1], btnequal = _a[2];
    btnequal.disabled = true;
    if (value == "x^2") {
        result.innerHTML = Math.pow(input.innerHTML, 2);
        input.innerHTML = "".concat(input.innerHTML, "<sup>2</sup>");
    }
    else if (value == "10^x") {
        result.innerHTML = Math.pow(10, input.innerHTML);
        input.innerHTML = "10<sup>".concat(input.innerHTML, "</sup>");
    }
    else if (value == "x^0.5") {
        result.innerHTML = Math.pow(input.innerHTML, 0.5);
        input.innerHTML = "<sup>2</sup>\u221A".concat(input.innerHTML);
    }
    else if (value == "e^x") {
        result.innerHTML = Math.pow(e, input.innerHTML);
        input.innerHTML = "e<sup>".concat(input.innerHTML, "</sup>");
    }
    else {
        result.innerHTML = Math.pow(input.innerHTML, -1);
        input.innerHTML = "1/".concat(input.innerHTML);
    }
};
// Trigonometry Function
var Trigonometry = function () {
    var _a = Declare(), input = _a[0], result = _a[1], btnequal = _a[2];
    btnequal.disabled = true;
    var x = document.getElementById("Trigonometry").value;
    switch (x) {
        case "sin":
            if (degtorad.value === "DEG") {
                result.innerHTML = Math.sin(input.innerHTML * (π / 180));
                input.innerHTML = "sin (".concat(input.innerHTML, ")");
            }
            else {
                result.innerHTML = Math.sin(eval(input.innerHTML));
                input.innerHTML = "sin (".concat(input.innerHTML, ")");
            }
            break;
        case "cos":
            if (degtorad.value === "DEG") {
                result.innerHTML = Math.cos(input.innerHTML * (π / 180));
                input.innerHTML = "cos (".concat(input.innerHTML, ")");
            }
            else {
                result.innerHTML = Math.cos(eval(input.innerHTML));
                input.innerHTML = "cos (".concat(input.innerHTML, ")");
            }
            break;
        case "tan":
            if (degtorad.value === "DEG") {
                result.innerHTML = Math.tan(input.innerHTML * (π / 180));
                input.innerHTML = "tan (".concat(input.innerHTML, ")");
            }
            else {
                result.innerHTML = Math.tan(eval(input.innerHTML));
                input.innerHTML = "tan (".concat(input.innerHTML, ")");
            }
            break;
        default:
            result.innerHTML = "Invalid Choice !!";
            result.style.color = "red";
            setTimeout(function () {
                result.innerHTML = "";
                result.style.color = "green";
            }, 2000);
    }
};
var Fun = function () {
    var _a = Declare(), input = _a[0], result = _a[1], btnequal = _a[2];
    btnequal.disabled = true;
    var x = document.getElementById("Function").value;
    switch (x) {
        case "abs":
            result.innerHTML = Math.abs(input.innerHTML);
            input.innerHTML = "abs (".concat(input.innerHTML, ")");
            break;
        case "acos":
            result.innerHTML = Math.acos(input.innerHTML);
            input.innerHTML = "acos (".concat(input.innerHTML, ")");
            break;
        case "asin":
            result.innerHTML = Math.asin(input.innerHTML);
            input.innerHTML = "asin (".concat(input.innerHTML, ")");
            break;
        default:
            result.innerHTML = "Invalid Choice !!";
            result.style.color = "red";
            setTimeout(function () {
                result.innerHTML = "";
                result.style.color = "green";
            }, 2000);
    }
};
// Deg to Rad Button Function
var DegtoRad = function () {
    if (degtorad.innerText === "DEG") {
        degtorad.style.color = "red";
        degtorad.innerText = "RAD";
        degtorad.value = "RAD";
    }
    else {
        degtorad.style.color = "darkgreen";
        degtorad.innerText = "DEG";
        degtorad.value = "DEG";
    }
};
// F - E Function
var toExp = function () {
    var _a = Declare(), input = _a[0], result = _a[1], btnequal = _a[2];
    btnequal.disabled = true;
    var number = Number(input.innerHTML);
    result.innerHTML = number.toExponential();
};
// '+/-' & '|x|' Function
var plusMinus = function (value) {
    var _a = Declare(), input = _a[0], result = _a[1], btnequal = _a[2];
    btnequal.disabled = true;
    if (value == "modeX") {
        // for |x| button
        var a = input.innerHTML.substr(0, 1);
        if (a == "-") {
            result.innerHTML = -input.innerHTML;
            input.innerHTML = "|".concat(input.innerHTML, "|");
        }
        else {
            result.innerHTML = input.innerHTML;
            input.innerHTML = "|".concat(input.innerHTML, "|");
        }
    }
    else {
        // for +/- button
        input.innerHTML = -input.innerHTML;
    }
};
// Factorial Function
var Factorial = function (value) {
    var _a = Declare(), input = _a[0], result = _a[1], btnequal = _a[2];
    btnequal.disabled = true;
    var num = input.innerHTML;
    var fact = 1;
    input.innerHTML += value;
    while (num >= 1) {
        fact = fact * num;
        num--;
    }
    result.innerHTML = fact;
};
// Logerithm Function
var Logerithm = function (value) {
    var _a = Declare(), input = _a[0], result = _a[1], btnequal = _a[2];
    btnequal.disabled = true;
    var log = input.innerHTML;
    if (value == "log") {
        // for log button
        input.innerHTML = "log ".concat(log);
        result.innerHTML = Math.log(log);
    }
    else {
        // for ln button
        input.innerHTML = "ln<sub>e</sub> ".concat(log);
        result.innerHTML = Math.log(log);
    }
};
// Function for MS Button
var Memory = function () {
    var _a = Declare(), input = _a[0], result = _a[1];
    document.getElementById("mr").disabled = false;
    document.getElementById("mc").disabled = false;
    if (result.innerText == "") {
        store = eval(input.innerText);
    }
    else {
        store = eval(result.innerText);
    }
};
// Function for MR Button
var MemoryRead = function () {
    var _a = Declare(), input = _a[0], result = _a[1];
    input.innerHTML = "";
    result.innerHTML = "";
    input.innerText = store;
};
// Function for MC Button
var MemoryClear = function () {
    var _a = Declare(), input = _a[0], result = _a[1];
    input.innerHTML = "";
    result.innerHTML = "";
    store = 0;
};
// Function for M+ Button
var MemoryPlus = function () {
    var _a = Declare(), input = _a[0], result = _a[1];
    if (result.innerText == "") {
        store += eval(input.innerText);
    }
    else {
        store += eval(result.innerText);
    }
};
// Function for M- Button
var MemoryMinus = function () {
    var _a = Declare(), input = _a[0], result = _a[1];
    if (result.innerText == "") {
        store -= eval(input.innerText);
    }
    else {
        store -= eval(result.innerText);
    }
};
