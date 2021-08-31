/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// 1. creare la funzione
// 2. chiedere all’utente di inserire una parola
// 3. richiamare la funzione 
// 4. verificare se la parola inserita è palindroma

// 1. creare la funzione
function reverseString(string) {
    var supporto = "";
    for (var i = string.length - 1; i >= 0; i--) {
        supporto += string[i];  // "" = "" + ultima lettera di string
    }
    return supporto;
}

// 2. chiedere all’utente di inserire una parola
var userWord = (prompt("Inserisci una parola"));
// verifica parola
while ( !isNaN (userWord) ) {
    alert( "inserisci una parola per favore.." );
    userWord = (prompt("Inserisci una parola"));
}
console.log(userWord);

// 3. richiamare la funzione 
var reverseWord = reverseString(userWord);
console.log(reverseWord);

// 4. verificare se la parola inserita è palindroma
if (userWord == reverseWord ) {
    console.log("La parola inserita è palindroma!");
} else {
    console.log("La parola inserita non è palindroma!");
}
