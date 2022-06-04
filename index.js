// Code your solutions in this file
let emptyArray = [];
function writeCards(cards){
    for (let i = 0; i < cards.length; i++){
        emptyArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return emptyArray
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}
countDown(8);
   