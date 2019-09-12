//ages = [{name: 'Uche Egbo', age: 24, occupation: 'Trader'}, {name: 'solomon Ogbodo', age:30, Occupation: 'Accountant'}]; /* return 54*/

function sumAge(array){
   let total = 0;
for(let i=0; i<array.length; i++){
       
  total += array[i].age
}

return total;

}

console.log(sumAge([{name: 'Uche Egbo', age: 24, occupation: 'Trader'}, {name: 'solomon Ogbodo', age:30, Occupation: 'Accountant'}]));