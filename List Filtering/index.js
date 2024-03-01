function filter_list(l) {
    //used the filtering method to find numbers and put the numbers into a new array
    console.log(l.filter(x => typeof x === "number"))
  }
  filter_list(["1","2", 8, 9])