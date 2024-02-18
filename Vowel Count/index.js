function getCount(str) {
    let count = 0;
    //split into different string in order to count each letter
    let newStr = str.split('');
    //loop through each string in newStr 
    for(let i = 0; i < newStr.length;i++){
      //if there is a vowel increase the count
      if(newStr[i] ==='a' || newStr[i] ==='e' || newStr[i] ==='i' || newStr[i] ==='o' || newStr[i] ==='u'){
        count++
      }
    }
    console.log(count);
  }
  
  getCount('abracadabra')