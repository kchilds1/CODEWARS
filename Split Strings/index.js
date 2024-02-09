function solution(str){
    let newStr = [];
    let pairs = [];
     for(let i = 0; i < str.length; i++){
       newStr.push(str[i]);
     }
    if (newStr % 2 !== 0){
      newStr.push('_');
    }
    for(let j = 0; j < newStr.length; j += 2){
      //make sure there isn't another element after the current element
      if(j + 1 < newStr.length){
        pairs.push(newStr[j] + newStr[j + 1]);
      }
    }
    return pairs;
  }
  solution("")
  solution("abcdef")
  solution("abcdefg")
  //split into individual stings
  //if string is an odd number add _
  //start putting the pairs together making sure each iteration is incremented by two
  //make sure there isn't any more letters before moving forward to pushing into the pairs array
  //Push the letter pairs to the pairs array
  //return pairs