

function FuncionAleatorio(a,b) {
  a=1;
  b=9;
  var Aleatorio= Math.round(Math.random()*(b-a)+parseInt(a));


  switch (Aleatorio) {
    case 1:
    console.log(Aleatorio);
      document.getElementById("Divuno").style.opacity = 1;

    break;
    case 2:
document.getElementById("Divdos").style.opacity = 1;

console.log(Aleatorio);
    break;
    case 3:

    document.getElementById("Divtres").style.opacity = 1;
    console.log(Aleatorio);
    case 4:
    break;
      document.getElementById("Divcuatro").style.opacity = 1;
    console.log(Aleatorio);
    break;
    case 5:
      document.getElementById("Divcinco").style.opacity = 1;
    console.log(Aleatorio);
    break;
    case 6:
document.getElementById("Divseis").style.opacity = 1;
console.log(Aleatorio);
    break;
    case 7:
    document.getElementById("Divsiete").style.opacity = 1;
    console.log(Aleatorio);
    break;
    case 8:
document.getElementById("Divocho").style.opacity = 1;
console.log(Aleatorio);
break;
    case 9:
document.getElementById("Divnueve").style.opacity = 1;
console.log(Aleatorio);
    break;
}

}
