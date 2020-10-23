/**********************
 *  PRATO FIORITO
 *********************/

document.getElementById('bottone').addEventListener('click', function(){

    // SELEZIONE DIFFICOLTÁ 
    var diff = 0;
    var numMax = 0;

    var livelloScelto = document.getElementById('difficolta').value
    console.log(livelloScelto);

    switch(livelloScelto) {
        case 'facile':
            diff = 20 - numBombe;
            numMax = 100;
            break
        case 'normale':
            diff = 24 - numBombe;
            numMax = 80;
            break
        case 'difficile':
            diff = 28 - numBombe;
            numMax = 50;
            break
        default:
            'none'
    }

    // BOMBE
    var bombeTot = []
    var numBombe = 16

    // GENERAZIONE BOMBE
    while (bombeTot.length < numBombe) {
        var bomba = genBombe(1, numMax);
        
        if (! bombeTot.includes(bomba) ) {
            bombeTot.push(bomba);
        }
        
    }

    console.log(bombeTot);
    console.log(diff);

    for ( i = 0; i < diff; i++ ) {
        var numUtente = parseInt( prompt( 'Inserisci un numero da 1 a ' + numMax ) );
        while ( (isNaN(numUtente) ) || (numUtente <= 0) || (numUtente > 100) )  {
            numUtente = parseInt( prompt( 'Non hai inserito un carattere valido, prego inserire un numero da 1 a 100' ) );
        }
    
        var check = bombeTot.includes(numUtente);
        if ( check == true ) {
            alert('hai perso');
            break;
        }
    }
    if (i === diff) {
        alert('HAI VINTO')
        console.log('hai vinto');
    }
    console.log( 'Tentativi: ' + i);
})


// FUNZIONE GENERAZIONE NUMERI CASUALI
function genBombe(min, max) {
    return Math.floor( Math.random() * (max - min + 1 ) ) + min;
}