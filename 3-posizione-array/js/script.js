/*
posizione array: Chiediamo un numero all'utente e stampiamo l'elemento
che si trova nella posizione indicata dall'utente all'interno dell'array.
*/

/*
creiamo l'array
chiediamo la posizione all'utente (intero compreso tra 0 e lunghezza dell'array) e mettiamolo nella variabile pos
stampiamo l'elemento in posizione pos dell'array
*/

// const myArr = ['ciao', 'a', 'tutti', 'quanti'];
const myArr = [
	'ciao',
	'a',
	'tutti',
	'quanti',
	'anche',
	'oggi',
];
console.log(myArr);

const pos = parseInt(prompt('Qual e\' la posizione che ti interessa?'));

if (!isNaN(pos) && pos >= 0 && pos < myArr.length) {
	console.log(`L'elemento in posizione ${pos} vale: ${myArr[pos]}`);
} else {
	console.log('I valori inseriti non sono accettabili');
}
