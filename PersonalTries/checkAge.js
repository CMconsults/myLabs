function checkAge(userInfo, defAge){
    for(let i=0; i<userInfo.length; i++){
      let currentObject = userInfo[i];
      if(!currentObject.age){
        currentObject.age = defAge;
      }
    }
    return userInfo;
    }
    
    console.log(checkAge([{name: "XYZ", age: 23}, {name: "ABC"}],33));