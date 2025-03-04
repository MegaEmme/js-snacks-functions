/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const letter = prompt('Scegli una lettera').toUpperCase();

function filteredInitials (namesArray,chosenLetter){

    let filteredNames =[];

    for (let i=0; i<= namesArray.length -1; i++){

        const currentName = namesArray[i];

        if (currentName.at(0) === chosenLetter){
            filteredNames.push(currentName)
        } 
    }

    return filteredNames;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(filteredInitials(names,letter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//arrow funtion 

// const filteredInitials = (namesArray,chosenLetter) => {
//     let filteredNames =[];

//     for (let i=0; i<= namesArray.length -1; i++){

//         const currentName = namesArray[i];

//         if (currentName.at(0) === chosenLetter){
//             filteredNames.push(currentName)
//         } 
//     }

//     return filteredNames;
// }

// console.log(filteredInitials(names,letter));

// versione arrow function con .filter 

// const filteredInitials = (namesArray,chosenLetter) => namesArray.filter((element)=>{
//     const firsLetter = element[0];
//     if(firsLetter===chosenLetter){
//         return true;
//     }
// });

// console.log(filteredInitials(names,letter));