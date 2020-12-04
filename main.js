const totalOngoing = document.querySelector(".total-ongoing");
const total = document.querySelector(".total");

const numbers = document.querySelectorAll(".numbers");

const equal = document.getElementById("equal");

numbers.forEach((element) => {
  element.addEventListener("click", numberClicked);
});

equal.addEventListener("click", compute);

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
    }
  
  
}

function addition() {
    let str = totalOngoing.textContent;
    let array = str.split("+");
  console.log(array);
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    sum += parseFloat(array[i]);
    
    total.textContent = sum;
    
  }
  totalOngoing.textContent= "";
}

function subtraction() {
    let str = totalOngoing.textContent;
    let array = str.split("-");
  console.log(array);
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    
    sum -= parseFloat(array[i]) ;
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    total.textContent = sum + (array[0]*2);
    
  }
  totalOngoing.textContent= "";
}