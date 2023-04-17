/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la modifica del .innerHtml o con la funzione .append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

/*
RIPETI per numero che va da 1 a 100
	SE numero % 3 == 0 AND numero % 5 == 0
		content = 'fizzbuzz'
	ALTRIMENTI SE numero % 3 == 0
		content = 'fizz';
	ALTRIMENTI SE numero % 5 == 0
		content = 'buzz'
	ALTRIMENTI
		content = numero
	FINE SE
	stampa content
FINE RIPETI
*/

// for (let numero = 1; numero <= 100; numero++) {
// 	let content = numero;
// 	if (numero % 3 == 0 && numero % 5 == 0) {
// 		content = 'fizzbuzz';
// 	} else if (numero % 3 == 0) {
// 		content = 'fizz';
// 	} else if (numero % 5 == 0) {
// 		content = 'buzz';
// 	}
// 	console.log(content);
// }

const eleGrid = document.querySelector('.grid');

/* metodo .innerHTML */
for (let numero = 1; numero <= 100; numero++) {
	let content = numero;
	let classes = 'cell';
	if (numero % 3 == 0 && numero % 5 == 0) {
		content = 'fizzbuzz';
		classes = 'cell fizzbuzz';
	} else if (numero % 3 == 0) {
		content = 'fizz';
		classes = 'cell fizz';
	} else if (numero % 5 == 0) {
		content = 'buzz';
		classes = 'cell buzz';
	}
	console.log(content);
	eleGrid.innerHTML = eleGrid.innerHTML + `<div class="${classes}">${content}</div>`;
}

/* metodo .append() */
// for (let numero = 1; numero <= 100; numero++) {
// 	let eleCell = document.createElement('div');
// 	eleCell.classList.add('cell');
// 	let content = numero;
// 	if (numero % 3 == 0 && numero % 5 == 0) {
// 		content = 'fizzbuzz';
// 		eleCell.classList.add('fizzbuzz');
// 	} else if (numero % 3 == 0) {
// 		content = 'fizz';
// 		eleCell.classList.add('fizz');

// 	} else if (numero % 5 == 0) {
// 		content = 'buzz';
// 		eleCell.classList.add('buzz');
// 	}
// 	console.log(content);

// 	eleCell.innerHTML = content;
// 	eleGrid.append(eleCell);
// }