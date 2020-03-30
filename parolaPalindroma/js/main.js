//Chiedo a utente di inserire come input una parola
//tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
//dò output a utente dicendogli che ho verificato;

var msg;

document.getElementById('control').addEventListener('click',
  function (){
    //recupero in una variabile la parola inserita dall'utente
    var word = document.getElementById('word').value;
    var reversedWord = reverseString(word);
    console.log(reversedWord);
    //controllo se è palindroma
    if (word === reversedWord) {
      msg = "Si, la parola inserita è palindroma"
    } else {
      msg = "No, mi dispiace..questa parola non è palindroma"
    }
    document.getElementById('result').innerHTML = msg;
  }
)
//funzione che reverta la parola
function reverseString(string){
  var result = string.split("").reverse().join('');
  return result;
}

/*function(){
  //divido la parola in caratteri la parola
  var split = word.split("");
  console.log(split);
  //reverto la parola
  var revert = split.reverse();
  console.log(revert);
  var revert = split.join('');
  console.log(join);
}*/
