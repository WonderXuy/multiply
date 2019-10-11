module.exports = function multiply(first, second) {
  // your solution
  let firstNum = String(first).split('').reverse();
  let secondNum = String(second).split('').reverse();
  let answ = [];
  for (let i = 0; i < firstNum.length; i++) {
    for (let j = 0; j < secondNum.length; j++) {
      let mult = firstNum[i] * secondNum[j];
      if(!isNaN(answ[i + j])){
        answ[i + j] += mult;
      }
      else{
        answ[i + j] = mult;
      }
    }
  }
  for(let i = 0; i<answ.length; i++){
    let num = answ[i] % 10;
    let step = Math.floor(answ[i] / 10);
    answ[i] = num;
    if(!isNaN(answ[i+1])){
      answ[i+1]+=step;
    }
    else if(step!=0){
      answ[i+1] = step;
    }
  } 
  return answ.reverse().join('');
}
