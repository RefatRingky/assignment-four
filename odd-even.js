
function evenOdd(string){
    for(let i = 0; i<string.length; i++){
        if(friendArray[i].length % 2 != 0 ){
            // console.log('odd')
            return string[i] +' '+ 'Odd';
            
        }
        else{
            // console.log('even')
            return string[i]  +' '+ 'Even';
        }
    }
}
const friendArray = ["Phero"];
// const friendArray2 = ["Batch7"];
// const friendArray3 = ["chatgpt"];
const myFriend = evenOdd(friendArray);
;
console.log(myFriend);



