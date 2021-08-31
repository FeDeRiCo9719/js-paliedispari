/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/* 1. Dichiarare le funzioni 
    a. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
    b. Sommiamo i due numeri (usando una funzione)
    c. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) */

/* 2. L'utente sceglie pari o dispari e inserisce un numero da 1 a 5
    a. chiedere all'utente di scegliere pari o dispari (prompt)
    b. chiedere all'utente di inserisce un numero da 1 a 5 (prompt) */

/* 3. Richiamare le funzioni
    a. richiamare il numero computer generato
    b. sommare il numero utente con il numero computer generato    
    c. confrontare la somma ottenuta se è pari o dispari

/* 4. Dichiariamo chi ha vinto
    a. dichiarare il vincitore

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// 1. DICHIARARE LE FUNZIONI
//  a. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function RandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) + 1);
    return randomNumber;
}
//  b. Sommiamo i due numeri (usando una funzione)
function sum( num1, num2 ) {    
    var result = num1 + num2; 
    return result; 
}    
//  c. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function evenOrOdd( num ) {    
    if (num % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
} 

// 2. L'utente sceglie pari o dispari e inserisce un numero da 1 a 5
//   a. chiedere all'utente di scegliere pari o dispari (prompt)
var userOddEven = prompt("choose even or odd");

// verifica pari o dispari
while ( userOddEven !== "even" && userOddEven !== "odd" ) {
    alert("Error");
    userOddEven = prompt("choose even or odd");
}
console.log(userOddEven);

//   b. chiedere all'utente di inserisce un numero da 1 a 5 (prompt)
var number = parseInt(prompt("choose a number between 1 and 5"));

// verifica numero da 1 a 5
while ( number<1 || number>5 || isNaN(number) ) {
    alert("Error");
    number = parseInt(prompt("choose a number between 1 and 5"));
}
console.log(number);

// 3. Richiamare le funzioni
//  a. richiamare il numero computer generato
var cpuNumber = RandomNumber(0, 5);
console.log(cpuNumber);
//  b. sommare il numero utente con il numero computer generato
var sumUserCpu = sum(number, cpuNumber);
console.log(sumUserCpu);
//  c. confrontare la somma ottenuta se è pari o dispari
var resultEvenOdd = evenOrOdd( sumUserCpu );
console.log(resultEvenOdd);



// 4. Dichiariamo chi ha vinto
//   a. dichiarare il vincitore
if ( resultEvenOdd == userOddEven ) {
    console.log("Hai vinto!!");
} else {
    console.log("Hai perso mi dispiace!");
}
