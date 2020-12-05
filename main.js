const totalOngoing = document.querySelector(".total-ongoing");
const total = document.querySelector(".total");

const numbers = document.querySelectorAll(".numbers");

const equal = document.getElementById("equal");
const clearAll = document.getElementById("clear-all");
const clearLast = document.getElementById("clear-last");
const backspace = document.getElementById("backspace");

numbers.forEach((element) => {
  element.addEventListener("click", numberClicked);
});

equal.addEventListener("click", compute);
clearAll.addEventListener("click", deleteAll);

function numberClicked(e) {
  console.log(e);
  num = e.target.textContent;

  totalOngoing.textContent += num;
}

function compute(e) {
  let str = totalOngoing.textContent;

  if (str.includes("+")) {
    addition();
  } else if (str.includes("-")) {
    subtraction();
  } else if (str.includes("*")) {
    multiplication();
  } else if (str.includes("/")) {
    division();
  }
}

function addition() {
  let str = totalOngoing.textContent;
  let array = str.split(/\W+/);
  console.table(array);
  let sum = 0;

  for (let i = 0; i < array.length-1; i++) {
    console.log(array[i]);
    sum += parseFloat(array[i]);

    total.textContent = sum;
  }
  totalOngoing.textContent = total.textContent;
}

function subtraction() {
  let str = totalOngoing.textContent;
  let array = str.split(/\W+/);
  console.log(array);
  let sum = 0;

  for (let i = 0; i < array.length-1; i++) {
    sum -= parseFloat(array[i]);
    total.textContent = sum + array[0] * 2;
  }
  totalOngoing.textContent = total.textContent;
}

function multiplication() {
  let str = totalOngoing.textContent;
  let array = str.split(/\W+/);
  console.log(array);
  let sum = array[0];

  for (let i = 1; i < array.length-1; i++) {
    sum *= parseFloat(array[i]);
    total.textContent = sum;
  }
  totalOngoing.textContent = total.textContent;
}

function division() {
  let str = totalOngoing.textContent;
  let array = str.split(/\W+/);
  console.log(array);
  let sum = array[0];

  for (let i = 1; i < array.length-1; i++) {
    sum /= parseFloat(array[i]);
    total.textContent = sum;
  }
  totalOngoing.textContent = total.textContent;
}

function deleteAll() {
  totalOngoing.textContent = "";
  total.textContent = 0;
}
