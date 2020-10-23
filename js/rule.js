/**********************
 *  PRATO FIORITO
 *********************/

// ELEMENTI



// UTENTE



document.getElementById('bottone').addEventListener('click', function(){


    // VARIABILI PREDEFINITE
    var diff = 0;
    var numMax = 0;
    var numBombe = 16;
    
    // ARRAYS
    var bombeTot = []
    var numeriUtente = []
    
    
    // SELEZIONE DIFFICOLTÁ 
    var livelloScelto = document.getElementById('difficolta').value
    document.getElementById('livello-difficolta').innerHTML = 'Hai scelto la difficoltá ' + livelloScelto;

    switch(livelloScelto) {
        case 'facile':
            numMax = 100;
            diff = numMax - numBombe;
            break
        case 'normale':
            numMax = 80;
            diff = numMax - numBombe;
            break
        case 'difficile':
            numMax = 50;
            diff = numMax - numBombe;
            break
        default:
            'none'
    }

    // GENERAZIONE BOMBE
    while (bombeTot.length < numBombe) {
        var bomba = genBombe(1, numMax);
        
        if (! bombeTot.includes(bomba) ) {
            bombeTot.push(bomba);
        }
        
    }
    document.getElementById('n-tentativi').innerHTML = 'Numero di tentativi per vincere: ' + diff;
    document.getElementById('lista-bombe').innerHTML = 'Lista dei numeri bomba: ' + bombeTot;

    // RICHIESTA NUMERI
    for ( i = 0; i < diff; i++ ) {
        var numUtente = parseInt( prompt( 'Inserisci un numero da 1 a ' + numMax ) );
        
        while ( (isNaN(numUtente) ) || (numUtente <= 0) || (numUtente > 100) )  {
            numUtente = parseInt( prompt( 'Non hai inserito un carattere valido, prego inserire un numero da 1 a ' + numMax ) );
        }

        while ( numeriUtente.includes(numUtente) ) {
            numUtente = parseInt( prompt( 'Hai giá inserito questo numero, prego inserire un numero da 1 a ' + numMax ) );
        }
        
        numeriUtente.push(numUtente)
        console.log(numeriUtente);

        var risultato = document.getElementById('risultato')
    
        var check = bombeTot.includes(numUtente);
        if ( check == true ) {
            alert('Hai perso');
            risultato.innerHTML = 'Hai perso';
            break;
        }
    }
    if (i === diff) {
        alert('HAI VINTO')
        risultato.innerHTML = 'Hai vinto';
    }
    document.getElementById('tentativi').innerHTML = i + 1;
})

// FUNZIONE GENERAZIONE NUMERI CASUALI
function genBombe(min, max) {
    return Math.floor( Math.random() * (max - min + 1 ) ) + min;
}