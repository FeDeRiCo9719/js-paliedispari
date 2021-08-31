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
    a. chiedere all'utente di scegliere pari o dispari
    b. chiedere all'utente (prompt) */

/* 3. Dichiariamo chi ha vinto
    a. confrontare la somma ottenuta se è pari o dispari

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// 1. Dichiarare le funzioni 
//  a. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function RandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) + 1);
    console.log(randomNumber);
    return randomNumber;
}
RandomNumber(0, 5)