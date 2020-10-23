/**********************
 *  PRATO FIORITO
 *********************/

// ELEMENTI
var bombeTot = []
var numBombe = 16

// GENERAZIONE BOMBE
while (bombeTot.length < numBombe) {
    var bomba = genBombe(1, 100);
    
    if (! bombeTot.includes(bomba) ) {
        bombeTot.push(bomba);
    }
    
}

console.log(bombeTot);



// FUNZIONE GENERAZIONE NUMERI CASUALI
function genBombe(min, max) {
    return Math.floor( Math.random() * (max - min + 1 ) ) + min;
}