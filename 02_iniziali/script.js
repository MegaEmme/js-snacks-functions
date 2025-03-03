/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function initials(namesArray){

    let letterArray = [];
    
   
    for(let i = 0; i <= namesArray.length -1; i++){
        
        let firstLetter = namesArray.indexOf(i);

        letterArray[i] += firstLetter;      
    }

    return letterArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(initials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]