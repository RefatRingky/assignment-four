function evenOdd(string) {
    const myString = string.length;
    if(myString % 2 != 0){
        return 'Odd'
    }
    else{
        return 'Even'
    }
}

const isEvenOrOdd = evenOdd("Phero");
const isEvenOrOdd2 = evenOdd("Batch7");
const isEvenOrOdd3 = evenOdd("chatgpt");
console.log(isEvenOrOdd);
console.log(isEvenOrOdd2);
console.log(isEvenOrOdd3);