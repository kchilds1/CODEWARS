var countSheep = function (num){
    let result = " ";
    for (let i = 1; i <= num; i++){
      result += `${i} sheep...`;
      
    }
    console.log(result);
  }
  countSheep(5);
  //can't be a neg. number
  //create a var named result
  //create a for loop to iterate num amount of times.
  //put each iteration into result with a string saying sheep...
  //I need to return result