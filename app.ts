const π: number = 3.1415926535;
const e: number = 2.7182818284;
let degtorad: any = document.getElementById("degtorad") as HTMLButtonElement;
let store: number = 0;
// Declare Function for Declaring all variables
function Declare(): any {
  let input: any = document.getElementById("history-value") as HTMLInputElement;
  let result: any = document.getElementById("output-value") as HTMLInputElement;
  let btnequal: any = document.getElementById("equal") as HTMLButtonElement;
  return [input, result, btnequal];
}
// Interface 'type'
interface type {
  value: string | number;
}
// Num Function for add Number & Operator
function Num(value: type): void {
  let [input, result, btnequal] = Declare();
  btnequal.disabled = false;
  if (result.innerHTML != "") {
    input.innerHTML = result.innerHTML + value;
    result.innerHTML = "";
  } else {
    input.innerHTML += value;
  }
};

// Equal Function
const Equal = (): void => {
  let [input, result] = Declare();
  if (input.innerHTML === "") {
    alert("Input is Empty");
  } else {
    result.innerHTML = eval(input.innerHTML).toFixed(2);
  }
};
// Clear Function
const Remove = (): void => {
  let [input, result, btnequal] = Declare();
  btnequal.disabled = false;
  (document.getElementById("trigo") as HTMLOptionElement).selected = true;
  (document.getElementById("fun") as HTMLOptionElement).selected = true;
  input.innerHTML = "";
  result.innerHTML = "";
};
// Backspace Function
const Backspace = (): void => {
  let [input] = Declare();
  input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
};
// Power Function
const Power = (value: any): void => {
  let [input, result, btnequal] = Declare();
  btnequal.disabled = true;
  if (value == "x^2") {
    result.innerHTML = Math.pow(input.innerHTML, 2);
    input.innerHTML = `${input.innerHTML}<sup>2</sup>`;
  } else if (value == "10^x") {
    result.innerHTML = Math.pow(10, input.innerHTML);
    input.innerHTML = `10<sup>${input.innerHTML}</sup>`;
  } else if (value == "x^0.5") {
    result.innerHTML = Math.pow(input.innerHTML, 0.5);
    input.innerHTML = `<sup>2</sup>√${input.innerHTML}`;
  } else if (value == "e^x") {
    result.innerHTML = Math.pow(e, input.innerHTML);
    input.innerHTML = `e<sup>${input.innerHTML}</sup>`;
  } else {
    result.innerHTML = Math.pow(input.innerHTML, -1);
    input.innerHTML = `1/${input.innerHTML}`;
  }
};
// Trigonometry Function
const Trigonometry = (): void => {
  let [input, result, btnequal] = Declare();
  btnequal.disabled = true;
  let x: any = (document.getElementById("Trigonometry") as HTMLSelectElement).value;
  switch (x) {
    case "sin":
      if (degtorad.value === "DEG") {
        result.innerHTML = Math.sin(input.innerHTML * (π / 180));
        input.innerHTML = `sin (${input.innerHTML})`;
      } else {
        result.innerHTML = Math.sin(eval(input.innerHTML));
        input.innerHTML = `sin (${input.innerHTML})`;
      }
      break;
    case "cos":
      if (degtorad.value === "DEG") {
        result.innerHTML = Math.cos(input.innerHTML * (π / 180));
        input.innerHTML = `cos (${input.innerHTML})`;
      } else {
        result.innerHTML = Math.cos(eval(input.innerHTML));
        input.innerHTML = `cos (${input.innerHTML})`;
      }
      break;
    case "tan":
      if (degtorad.value === "DEG") {
        result.innerHTML = Math.tan(input.innerHTML * (π / 180));
        input.innerHTML = `tan (${input.innerHTML})`;
      } else {
        result.innerHTML = Math.tan(eval(input.innerHTML));
        input.innerHTML = `tan (${input.innerHTML})`;
      }
      break;
    default:
      result.innerHTML = `Invalid Choice !!`;
      result.style.color = "red";
      setTimeout(() => {
        result.innerHTML = "";
        result.style.color = "green";
      },2000);
  }
};
const Fun = ():void => {
  let [input, result, btnequal] = Declare();
  btnequal.disabled = true;
  let x = (document.getElementById("Function") as HTMLSelectElement).value;
  switch (x) {
    case "abs":
      result.innerHTML = Math.abs(input.innerHTML);
      input.innerHTML = `abs (${input.innerHTML})`;
      break;
    case "acos":
      result.innerHTML = Math.acos(input.innerHTML);
      input.innerHTML = `acos (${input.innerHTML})`;
      break;
    case "asin":
      result.innerHTML = Math.asin(input.innerHTML);
      input.innerHTML = `asin (${input.innerHTML})`;
      break;
    default:
      result.innerHTML = `Invalid Choice !!`;
      result.style.color = "red";
      setTimeout(() => {
        result.innerHTML = "";
        result.style.color = "green";
      },2000);
  }
};
// Deg to Rad Button Function
const DegtoRad = () => {
  if (degtorad.innerText === "DEG") {
    degtorad.style.color = "red";
    degtorad.innerText = "RAD";
    degtorad.value = "RAD";
  } else {
    degtorad.style.color = "darkgreen";
    degtorad.innerText = "DEG";
    degtorad.value = "DEG";
  }
};
// F - E Function
const toExp = (): void => {
  let [input, result, btnequal] = Declare();
  btnequal.disabled = true;
  let number = Number(input.innerHTML);
  result.innerHTML = number.toExponential();
};
// '+/-' & '|x|' Function
const plusMinus = <G extends any>(value: G): void => {
  let [input, result, btnequal] = Declare();
  btnequal.disabled = true;
  if (value == "modeX") {
    // for |x| button
    let a: G = input.innerHTML.substr(0, 1);
    if (a == "-") {
      result.innerHTML = -input.innerHTML;
      input.innerHTML = `|${input.innerHTML}|`;
    } else {
      result.innerHTML = input.innerHTML;
      input.innerHTML = `|${input.innerHTML}|`;
    }
  } else {
    // for +/- button
    input.innerHTML = -input.innerHTML;
  }
};
// Factorial Function
const Factorial = <G extends number>(value: G): void => {
  let [input, result, btnequal] = Declare();
  btnequal.disabled = true;
  let num: G = input.innerHTML;
  let fact: number = 1;
  input.innerHTML += value;
  while (num >= 1) {
    fact = fact * num;
    num--;
  }
  result.innerHTML = fact;
};
// Logerithm Function
const Logerithm = (value: any): void => {
  let [input, result, btnequal] = Declare();
  btnequal.disabled = true;
  let log: number = input.innerHTML;
  if (value == "log") {
    // for log button
    input.innerHTML = `log ${log}`;
    result.innerHTML = Math.log(log);
  } else {
    // for ln button
    input.innerHTML = `ln<sub>e</sub> ${log}`;
    result.innerHTML = Math.log(log);
  }
};
// Function for MS Button
const Memory = (): void => {
  let [input, result] = Declare();
  (document.getElementById("mr") as HTMLButtonElement).disabled = false;
  (document.getElementById("mc") as HTMLButtonElement).disabled = false;
  if (result.innerText == "") {
    store = eval(input.innerText);
  } else {
    store = eval(result.innerText);
  }
};
// Function for MR Button
const MemoryRead = (): void => {
  let [input, result] = Declare();
  input.innerHTML = "";
  result.innerHTML = "";
  input.innerText = store;
};
// Function for MC Button
const MemoryClear = (): void => {
  let [input, result] = Declare();
  input.innerHTML = "";
  result.innerHTML = "";
  store = 0;
};
// Function for M+ Button
const MemoryPlus = (): void => {
  let [input, result] = Declare();
  if (result.innerText == "") {
    store += eval(input.innerText);
  } else {
    store += eval(result.innerText);
  }
};
// Function for M- Button
const MemoryMinus = (): void => {
  let [input, result] = Declare();
  if (result.innerText == "") {
    store -= eval(input.innerText);
  } else {
    store -= eval(result.innerText);
  }
};

