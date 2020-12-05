let str = "55+5-2";

let array = str.split(/\W+/);



console.log(array);

let total = array[0] ;

for ( let i =1; i < array.length; i++) {

    console.log(array[i]);
    total/= parseFloat(array[i]);
    
}

console.log(total);

console.log(10/5);