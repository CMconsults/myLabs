function checkPali(strPali){
    let finallyMe;
    let strPaliSplitted = strPali.split('');
    let reversedInput = strPaliSplitted.reverse();
    let reversedStringInput = reversedInput.join('');
    if (reversedStringInput === strPali){
      finallyMe = "this is a palindrum";
        
    }
    return finallyMe;
  }
  console.log(checkPali("madam"));