function wordCount(arrayOfStrings) {
    var startTheMap = {};
    
    for(let i=0; i<arrayOfStrings.length; i++){
       const arrayLength = arrayOfStrings.filter((len) => len === arrayOfStrings[i]).length;
       startTheMap[arrayOfStrings[i]] = arrayLength;
    }
    return startTheMap;
    }


module.exports = wordCount;