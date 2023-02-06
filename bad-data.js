
function findingBadData(array) {
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
           
            count = count + 1;
        }
    }
    
    return count;

}

const myInputData = [ 1,2,5 ];
const myInputData2 = [ 2, -5, -7, -13 ];
const myInputData3 = [ -4, -9, -5, -33, -55 ];
console.log(findingBadData(myInputData));
console.log(findingBadData(myInputData2));
console.log(findingBadData(myInputData3));