function rentalCarCost(d) {
    const singleDay = 40;
    let total = d * singleDay;
    if(d>=7){
      total -= 50;
    }else if(d>=3){
      total -= 20;
    }
    console.log(total)
      //return total;
    }
    
  
  
  rentalCarCost(2)
  rentalCarCost(4)
  rentalCarCost(8)
  
  //single day rentals $40
  //d>=7 days there will be a $50 discount
  //d>=3 days there will be a $20 discount