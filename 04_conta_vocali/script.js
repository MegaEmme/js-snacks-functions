/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function findVowels(input){

    let vowels=0;
    for (let i=0; i<=input.length-1; i++){
        if (i==='a'|| i==='e' || i==='i'|| i==='o' ||i==='u'){
            vowels++;
        }
    }
    return vowels;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)