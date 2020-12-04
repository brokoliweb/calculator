let str = "51.5+6";

let array = str.split("+");


console.log(array);

let total = 0;

for ( let i =0; i < array.length; i++) {
    console.log(array[i]);
    total+= parseFloat(array[i]);
    
}

console.log(total);