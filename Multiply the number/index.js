function multiply(number){
    let count = 0;
    let numberString = number.toString();
    for(let i = 0; i < numberString.length; i++){
      if(numberString[i] === '-'){
        numberString = numberString.substring(1);
        console.log(numberString)
      }
      count ++;
    }
    return ( number * Math.pow(5,count));
  }
  
  multiply(-3)
  //convert to a string
  //make sure to not count the "-" as apart of the string count
  //count the number of digits found in number
  //multiply 5 by the count
  //multiply by the number