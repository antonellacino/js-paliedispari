//scegliamo chi pari che è dispari
//Generiamo 2 numeri random (sempre da 1 a 5)
//Sommiamo i due numeri e dichiariamo chi ha vinto.


var combinations, msg;
var result = getRandomIntInclusive(0,1);
combinations = pariDispari(result);

document.getElementById('utente1').innerHTML = combinations[0];
document.getElementById('utente2').innerHTML = combinations[1];
console.log(combinations[1]);
document.getElementById('control').addEventListener('click',
  function (){
    var number1 = generateNumber();
    var number2 = generateNumber();
    var somma = number1+number2;
    if (somma % 2 === 0 && combinations[0] == "pari") {
      msg = "é pari..Vince Utente 1";
    } else {
      msg = "é dispari..vince utente2";
    }
    document.getElementById('somma').innerHTML = "La somma è " + somma;
    document.getElementById('result').innerHTML = msg;
    }
);

//generazione numero
function generateNumber(){
  number = parseInt(Math.random()*5)+1;
  return number;
}

//num random 0/1
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

//decisione pari o dispari
function pariDispari(valore){
  var primo;
  var secondo;
  if (valore === 0) {
   primo = "dispari";
   secondo = "pari";
  } else {
    primo = "pari";
    secondo = "dispari";
  }
  var numeri = [primo,secondo];
  return numeri ;
}
