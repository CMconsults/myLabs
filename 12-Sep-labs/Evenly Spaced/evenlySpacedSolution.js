
function evenlySpaced(first, second, last) {
    //Provide your solution here
    // if (first - second === 2 || -2 && second - last === 2 || -2){
    //     return true;
    // }else if(first - second !== 2 || -2 && second - last === 2 || -2){
    //     return false;
    // }

//    let space1 = first - second;
//    let space2 = second -last;
//    if (space1 === space2){
//        return true
//    }
//    else{
//        return false
//    }
 var smallest = Math.min(first,second,last);
 var medium =  Math.max(first,second,last) - Math.min(first,second,last);
 var largest = Math.max(first,second,last);

 let space1 = smallest - medium;
 let space2 = medium  - largest;
 // return space1 === space2;
 if (space1 === space2){
           return true
       }
       else{
           return false
       }
}

module.exports = evenlySpaced;