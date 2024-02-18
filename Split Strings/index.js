function solution(str){
  //new array to hold the two character strings
 let newArray = [];
  //array for the split
  let splitStr = str.split('');
  //keep the count of strings in splitStr
  let count = 0;
  //loop through each string
  for(let i = 0; i < splitStr.length;i++){
    count++;
    }
  //if there is an odd number of strings, I'm adding an underscore
    if(count % 2 !== 0){
      splitStr.push("_");
  }
  //iterate through splitStr with a step of 2 to combine consecutive elements
  for(let j = 0; j < splitStr.length - 1; j += 2){
    //pushing the combination to newArray array
    newArray.push(splitStr[j] + splitStr[j+1])
  }
  return newArray
}

solution('abcde');