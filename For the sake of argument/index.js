
function numbers(...args) {
  
    let result =  args.every(arg => typeof arg === 'number' || !isNaN(arg) && typeof arg !== 'string' && arg !== null);
  return result;
  //console.log(result)
}


numbers ("1", "2", "3", "4")
numbers(1, 12, 3, 100)