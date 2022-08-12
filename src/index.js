module.exports = function check(str, bracketsConfig) {
 let stack = [];
  
  for (let element of bracketsConfig) { 
  for (let i=0; i<str.length; i++) {
    let currentSymbol = str[i];
    if (element[0] === currentSymbol) {
        stack.push(currentSymbol);
        //console.log(stack);    
    } else {
      if (stack.length === 0) {
          return false;
      }
      let topSymbol = stack[stack.length-1]
      if (element[1] === currentSymbol && element.includes(topSymbol)) {
          stack.pop();
          //console.log(stack);
      } else {
        return false;
      }
    }

   // bracketsConfig.forEach((element) => {
      // if (currentSymbol === element[0]) {
      //   stack.push(currentSymbol);
      //   console.log(stack);
      //  } 
      //  else {
      //   if (currentSymbol === element[1]) {
      //     stack.pop();
      //     console.log(stack);
      //   }
      //   if (stack.length === 0) {
      //     return false;
      //   }
         
        //else {
      //     return false;
      //   }
       //}
   // }) 
    //return '1'
  }
}
  return stack.length === 0;
}
