const totalOngoing = document.querySelector(".total-ongoing");
const total = document.querySelector(".total");
const exponent = document.querySelector(".exponent");

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");

const equal = document.getElementById("equal");
const clearAll = document.getElementById("clear-all");
const remainder = document.querySelector(".remainder");
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
backspace.addEventListener("click", deleteLast);
remainder.addEventListener("click", numberClicked);

function numberClicked(e) {
  num = e.target.textContent;
  totalOngoing.textContent += num;
  let str = totalOngoing.textContent;

  let array = str.split(/[%\*\+\/\u02C6]/);
  let array2 = str.split(/[%\*\+\x2D\/\u02C6]/);
  let array4 = array2.filter((e) => {
    return e !== "";
  });
  let op = ["+", "-", "/", "*", "%", "ˆ"];

  if (
    array.length === 3 ||
    (array2[0] === "" && array2.length > 4) ||
    (array2[0] !== "" && array2.length > 3) ||
    (array4.length === 2 && op.includes(str[str.length - 1]))
  ) {
    totalOngoing.textContent = "Error";
    return;
  }
}

function compute() {
  let str = totalOngoing.textContent;

  let array = str.split(/[%\*\+\/\u02C6]/);
  if (array[0] === "" || array[0] === "Error") {
    totalOngoing.textContent = "Error";
    return;
  }

  if (str.includes("+")) {
    addition();
  } else if (str.includes("*")) {
    multiplication();
  } else if (str.includes("/")) {
    division();
  } else if (str.includes("ˆ")) {
    calculateExponent();
  } else if (str.includes("%")) {
    calculateRemainder();
  } else if (str.includes("-")) {
    subtraction();
  }
}

function addition() {
  let str = totalOngoing.textContent;
  let array = str.split(/[\*\+\/\u02C6]/);

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += parseFloat(array[i]);
    sum = Math.round(sum * 1000) / 1000;
    total.textContent = sum;
  }

  totalOngoing.textContent = total.textContent;
}

function subtraction() {
  let str = totalOngoing.textContent;
  let array = str.split("-");

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum -= parseFloat(array[i]);

    if (array[0] === "") {
      total.textContent = -array[1] - array[2];
    } else {
      sum = Math.round(sum * 1000) / 1000;
      total.textContent = sum + array[0] * 2;
    }
  }
  totalOngoing.textContent = total.textContent;
}

function multiplication() {
  let str = totalOngoing.textContent;
  let array = str.split(/[\*\+\/\u02C6]/);
  let sum = array[0];

  for (let i = 1; i < array.length; i++) {
    sum *= parseFloat(array[i]);
    sum = Math.round(sum * 1000) / 1000;
    total.textContent = sum;
  }
  totalOngoing.textContent = total.textContent;
}

function division() {
  let str = totalOngoing.textContent;
  let array = str.split(/[\*\+\/\u02C6]/);
  let sum = array[0];

  for (let i = 1; i < array.length; i++) {
    sum /= parseFloat(array[i]);
    sum = Math.round(sum * 1000) / 1000;
    total.textContent = sum;
  }
  totalOngoing.textContent = total.textContent;
}

function calculateExponent() {
  let str = totalOngoing.textContent;
  let array = str.split(/[\*\+\/\u02C6]/);
  let sum = array[0] ** array[1];
  total.textContent = sum;
  totalOngoing.textContent = total.textContent;
}

function calculateRemainder() {
  let str = totalOngoing.textContent;
  let array = str.split(/[%\*\+\/\u02C6]/);
  let sum = array[0] % array[1];
  total.textContent = sum;
  totalOngoing.textContent = total.textContent;
}

function deleteLast() {
  let str = totalOngoing.textContent;

  str = str.substring(0, str.length - 1);

  totalOngoing.textContent = str;
}

function deleteAll() {
  totalOngoing.textContent = "";
  total.textContent = 0;
  array = [];
}
