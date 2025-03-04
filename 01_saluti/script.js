/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

function sayHello (input) {
    return `Ciao ${input}`;
}
// Invoca la funzione qui e stampa il risultato in console

console.log(sayHello(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario

// Arrow function 

// const sayHello=(input) => {
//     return `Ciao ${input}`;
// }

// console.log(sayHello(userName));