const checkedLenght = (str,num) =>{
  const checkStr = str;
  if(checkStr.length <= num){
    return true;
  } return false;
};
checkedLenght('проверяемая строка', 20);

const isPalindrom = (string) =>{
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for(let i = tempString.length - 1; i >= 0; i--){
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};
isPalindrom('довод');

const extractNamber = (string)=>{
  let result = '';
  for(let i = 0; i < string.length;i++){
    if(!Number.isNaN(parseInt(string.at(i), 10))){
      result += string.at(i);
    }
  }
  return parseInt(result,10);
};
extractNamber('1234gd');

const myPadStart = (string, minLenght, pad) =>{
  const actualPad = minLenght - string.length;
  if(actualPad <= 0){
    return string;
  }
  return pad.slice(0,actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
myPadStart('1', 2, '0');
