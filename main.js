

const totalOngoing = document.querySelector(".total-ongoing");
const total = document.querySelector(".total");
const exponent = document.querySelector(".exponent");

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");

const equal = document.getElementById("equal");
const clearAll = document.getElementById("clear-all");

const backspace = document.getElementById("backspace");


number.forEach((element) => {
  element.addEventListener("click", numberClicked);
});
operator.forEach((element) => {
  element.addEventListener("click", numberClicked);
});

equal.addEventListener("click", compute);
clearAll.addEventListener("click", deleteAll);
exponent.addEventListener("click", numberClicked);


function numberClicked(e) {
  console.log(e);
  num = e.target.textContent;
  totalOngoing.textContent += num;
  let str = totalOngoing.textContent;
  
  let array = str.split(/[\*\+\x2D\/\u02C6]/);
  console.log(array);
  if (array.length === 3) {
    totalOngoing.textContent = "Error";
    return;
  }
  
}

function compute() {
  let str = totalOngoing.textContent;
  console.log(str);
  let array = str.split(/[\*\+\x2D\/\u02C6]/);
  if (array[0] === "" || array[0] === "Error") {
    totalOngoing.textContent = "Error";
    return;
  }
  
  if (str.includes("+")) {
    addition();
  } else if (str.includes("-")) {
    subtraction();
  } else if (str.includes("*")) {
    multiplication();
  } else if (str.includes("/")) {
    division();
  } else if (str.includes("ˆ")) {
    calculateExponent();
  }
}

function addition() {
  let str = totalOngoing.textContent;
  let array = str.split(/[\*\+\x2D\/\u02C6]/);
  console.table(array);
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += parseFloat(array[i]);
    sum = Math.round(sum*1000) /1000;
    total.textContent = sum;
  }
  console.log(sum);
  totalOngoing.textContent = total.textContent;
}

function subtraction() {
  let str = totalOngoing.textContent;
  let array = str.split(/[\*\+\x2D\/\u02C6]/);
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum -= parseFloat(array[i]);
    sum = Math.round(sum*1000) /1000;
    total.textContent = sum + array[0] * 2;
  }
  totalOngoing.textContent = total.textContent;
}

function multiplication() {
  let str = totalOngoing.textContent;
  let array = str.split(/[\*\+\x2D\/\u02C6]/);
  let sum = array[0];

  for (let i = 1; i < array.length; i++) {
    sum *= parseFloat(array[i]);
    sum = Math.round(sum*1000) /1000;
    total.textContent = sum;
  }
  totalOngoing.textContent = total.textContent
}

function division() {
  let str = totalOngoing.textContent;
  let array = str.split(/[\*\+\x2D\/\u02C6]/);
  let sum = array[0];

  for (let i = 1; i < array.length; i++) {
    sum /= parseFloat(array[i]);
    sum = Math.round(sum*1000) /1000;
    total.textContent = sum;
  }
  totalOngoing.textContent = total.textContent
}

function calculateExponent() {
  
  let str = totalOngoing.textContent;
  let array = str.split(/[\*\+\x2D\/\u02C6]/);
  let sum = array[0]**array[1];
  total.textContent = sum;
  totalOngoing.textContent = total.textContent
}

function deleteAll() {
  totalOngoing.textContent = "";
  total.textContent = 0;
  array = [];
}
