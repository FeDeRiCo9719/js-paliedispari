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

/* 3. Dichiariamo chi ha vinto
    a. confrontare la somma ottenuta se è pari o dispari

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// 1. DICHIARARE LE FUNZIONI
//  a. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function RandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) + 1);
    console.log(randomNumber);
    return randomNumber;
}
RandomNumber(0, 5)

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
var odd_even = prompt("choose even or odd");
// verifica
//   b. chiedere all'utente di inserisce un numero da 1 a 5 (prompt)
var number = prompt("choose a number between 1 and 5");
// verifica


