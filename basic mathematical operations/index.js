function basicOp(operation, value1, value2){
    let solution = 0;
    switch (operation) {
        case '+':
        result = value1 + value2;
        break;
        case '-':
        result = value1 - value2;
        break;
        case '*':
        result = value1 * value2;
        break;
        case '/':
        result = value1 / value2;
        break;
    }
    
    console.log(result)
    //return 0;
  }
  
  basicOp("*", 4, 4)