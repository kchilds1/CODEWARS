function pluck(objs, name) {
  //check to make sure I have an objs and a name for my object.  If not return undefined
    if(!objs || !name){
      return;
    } else {
        //value is an array that will be used to store results
      const value = [];
      //loop through all of my objects
      for(let i = 0; i < objs.length;i++){
        //checking each iteration to make sure it has it's own property then push that value to value
        if(objs[i].hasOwnProperty(name)){
          value.push(objs[i][name]);
        }
      }
      console.log(value);
    }
    }
    
    pluck ([{a:1}, {a:8}, {p:0}], 'p')