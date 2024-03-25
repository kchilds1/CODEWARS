function solution(str, ending) {
  const first = str.split("").reverse().join("");
  const second = ending.split("").reverse().join("");
  for (let i = 0; i < second.length; i++) {
    if (first[i] !== second[i]) {
      console.log(false);
    }
  }
  console.log(true);
}
solution("abcde", "cde");

//make first and second go in desc order.
//first is going to be str desc.
//second is going to be ending desc.
//loop through first second.length amount of times
//Within the loop see if first at i is  !== to second at i
//else return true
