

let str = "baris+bilgin*";

let array = str.split(/\W+/);
let array2 =str.split(/[\*\+\x2D\/]/);

console.log(str.length);
console.log(array);
console.log(array2);


let total = array[0] ;

for ( let i =1; i < array.length; i++) {

    console.log(array[i]);
    total/= parseFloat(array[i]);
    
}

console.log(total);

