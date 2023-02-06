function mindGame(numbers) {
   const result = ((10 + (numbers * 3)) / 2) - 5;
   return result;

}
const myInputNumber = mindGame(5);
const myInputNumber2 = mindGame(50);
const myInputNumber3 = mindGame(33);
console.log(myInputNumber);
console.log(myInputNumber2);
console.log(myInputNumber3);
