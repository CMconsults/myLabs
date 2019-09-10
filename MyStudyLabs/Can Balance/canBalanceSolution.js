//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.

var canBalanceSum = (a,b) => a+b;
function canBalance(array) {
  //Type your solutions here
  var totalOutput=[];
  var myArray= [];
  for(var i=0; i<array.length-1; i++){
    myArray.push(array[i]);
    var remains = array.slice(i+1,array.length);
    if(myArray.reduce(canBalanceSum) === remains.reduce(canBalanceSum)){
      totalOutput.push(myArray.length);
      totalOutput.push(remains.length);
    }
  }
  // return totalOutput.length>0 ? totalOutput : -1
if(totalOutput.length > 0){
  return totalOutput;
}
else{
  return -1;
}
}

module.exports = canBalance;