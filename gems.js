function gemsToDiamond(num1, num2, num3) {
    let totalDiamond = num1*21 + num2*32 + num3 * 43;
    if(totalDiamond > 1000 * 2){
        return totalDiamond - 2000;
    }
    else{
        return totalDiamond;
    }
}
const result = gemsToDiamond(1,1,1);
const result2 = gemsToDiamond(20, 200, 50);
const result3 = gemsToDiamond(100, 5, 1);
console.log(result);
console.log(result2);
console.log(result3);