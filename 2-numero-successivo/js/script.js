/* numero successivo: Chiedere all'utente un numero, stampare il successivo */

/*
chiedi all'utente il numero
incrementa il numero dato di uno
mostra il numero incrementato all'utente
*/

const numberOriginal = parseInt(prompt('Dammi un numero, ti diro\' il successivo'));
// number = number + 1;
// number += 1;
// number++;
const numberIncremented = numberOriginal + 1
console.log(`Il successivo di ${numberOriginal} e' ${numberIncremented}`);