/*
1. stampare tutti gli elementi di un array
2. dato un array di numeri interi, stampare solo i numeri dispari
*/

/*
1. stampare tutti gli elementi di un array
creiamo myArr con un po' di valori
i = 0
RIPETI finche' e' vero che i < dimensione array
	stampa elemento myArr[i]
	incrementa i
FINE CICLO
*/

const myArr = [100, 200, 300, 400, 503, 600, 700, 801, 900, 1000, 1105, 1205];
console.log(myArr);

// const start = parseInt(prompt('Da quale indice vuoi iniziare?'));
// const step = parseInt(prompt('Ogni quanto vuoi stampare?'));
const start = 0;
const step = 1;

for (let i = start; i < myArr.length; i+=step) {
	console.log(myArr[i]);
}

console.log("Qui c'e' un break");
for (let i = start; i < myArr.length; i+=step) {
	if (i == 2) {
		break;
		// continue;
	}
	console.log(myArr[i]);
}

console.log('questo stampa al contrario');
for (let i = myArr.length - 1; i >= 0; i--) {
	console.log(myArr[i]);
}


/*
2. dato un array di numeri interi, stampare solo i numeri dispari
creiamo myArr con un po' di valori
i = 0
RIPETI finche' e' vero che i < dimensione array
	SE myArr[i] e' dispari
		stampa myArr[i]
	FINE SE
	incrementa i
FINE CICLO
*/

console.log('questo stampa solo i dispari')
for (let i = 0; i < myArr.length; i++) {
	if (myArr[i] % 2 == 1) {
		console.log(myArr[i]);
	}
}


// inizializzare il flag a false
let flag = false;
for (let i = 0; i < myArr.length; i++) {
	// settare il valore del flag se la mail e' stata trovata a true
}

/* vero se trovato */
/* falso se non trovato */