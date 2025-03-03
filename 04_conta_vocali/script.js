/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelsCounter(input){

    let vowels=0;

    for (let i=0; i<=input.length-1; i++){
        userInput=input.charAt(i);
        if (userInput==='a'|| userInput==='e' || userInput==='i'|| userInput==='o' ||userInput==='u'){
            vowels++;
        }
    }
    return vowels;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsCounter(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//arrow function

// const vowelsCounter = (input) => {
//     let vowels=0;

//     for (let i=0; i<=input.length-1; i++){
//         userInput=input.charAt(i);
//         if (userInput==='a'|| userInput==='e' || userInput==='i'|| userInput==='o' ||userInput==='u'){
//             vowels++;
//         }
//     }
//     return vowels;
// }

// console.log(vowelsCounter(word));