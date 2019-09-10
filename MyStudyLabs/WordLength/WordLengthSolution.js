function wordLength(arr) {
//code goes here
   const finalLength = new Map();
for(let i=0; i<arr.length; i++){
    const checkLength = arr[i].length;
    finalLength.set(arr[i], checkLength);
}
return finalLength;
}

module.exports = wordLength;