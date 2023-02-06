function isLGSeven(number) {
    let inputNumber = number - 7;
    if(inputNumber < 7){
        return inputNumber;
    }
    else{
        return number * 2;
    }
}
const isNumberSeven = isLGSeven(6);
const isNumberSeven2 = isLGSeven(-15);
const isNumberSeven3 = isLGSeven(15);
console.log(isNumberSeven);
console.log(isNumberSeven2);
console.log(isNumberSeven3);