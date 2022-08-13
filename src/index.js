module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.join('').replace(/,/g, '');
  //console.log(brackets);
  
  for (i=0; i<brackets.length; i++) {
    let subStr = `${brackets[i]}${brackets[i+1]}`;
    if (str.includes(subStr)) {
      //console.log(subStr);
      str = str.replace(subStr, '');
      //console.log(str);
      i= -1
      }
    }
   
  let result = str.length ? false : true
  return result
}
