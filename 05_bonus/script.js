/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const aName = 'Mario';


// Dichiara la funzione qui.

function differentGreetingTimes (input){
    
    let actualTime = new Date().getHours();

    console.log(`Sone le ${actualTime}`);

    let greetings;

    if (actualTime>=6 && actualTime<13){
        greetings = `Buongiorno ${input}`;
    } else if (actualTime>=13 && actualTime<17){
        greetings = `Buon pomeriggio ${input}`;
    } else if (actualTime>=17 && actualTime <0){
        greetings = `Buonasera ${input}`;
    } else {
        greetings = `Buonanotte ${input}`;
    }
    return greetings;

}



// Invoca la funzione qui e stampa il risultato in console

console.log(differentGreetingTimes(aName));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

//arrow function

// const differentGreetingTimes = (input) =>{
//     let actualTime = new Date().getHours();

//     console.log(`Sone le ${actualTime}`);

//     let greetings;

//     if (actualTime>=6 && actualTime<13){
//         greetings = `Buongiorno ${input}`;
//     } else if (actualTime>=13 && actualTime<17){
//         greetings = `Buon pomeriggio ${input}`;
//     } else if (actualTime>=17 && actualTime <0){
//         greetings = `Buonasera ${input}`;
//     } else {
//         greetings = `Buonanotte ${input}`;
//     }
//     return greetings;
// }

// console.log(differentGreetingTimes(aName));