let myVar = 2

/* questo  */
let saluto;
let isVisible = false;

/* e' equivalente a questo */
let saluto2 = saluto == 2 ? 'due' : 'dieci';
let saluto3 = isVisible ? '' : 'hidden';

console.log(`<div class="${isVisible ? '' : 'hidden'}">Ciao</div>`);
// eleContainer.innerHTML += `<div class="${isVisible ? '' : 'hidden'}">Ciao</div>`;

// let saluto2 = myVar == 2 ? 'due' : (myVar == 10 ? 'dieci' : 'altro');
console.log(saluto2)
