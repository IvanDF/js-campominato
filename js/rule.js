/**********************
 *  PRATO FIORITO
 *********************/

// ELEMENTI

// BOMBE
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


// UTENTE
var difficolta = 10

for ( i = 0; i < difficolta; i++ ) {
    var numUtente = parseInt( prompt( 'Inserisci un numero da 1 a 100' ) );
    while ( (isNaN(numUtente) ) || (numUtente <= 0) || (numUtente > 100) )  {
        numUtente = parseInt( prompt( 'Non hai inserito un carattere valido, prego inserire un numero da 1 a 100' ) );
    }

    if ( !bombeTot[numUtente] ) {
        alert('Hai perso!')
        break;
    }
}

if (i === difficolta) {
    alert('HAI VINTO')
}
console.log( 'Tentativi: ' + i);



// FUNZIONE GENERAZIONE NUMERI CASUALI
function genBombe(min, max) {
    return Math.floor( Math.random() * (max - min + 1 ) ) + min;
}