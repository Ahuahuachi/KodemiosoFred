

function turnoPC(){
  a=1;
  b=9;
  var Aleatorio= Math.round(Math.random()*(b-a)+parseInt(a));
  var secuencia=[];
  secuencia.append([Aleatorio]);
  secencia.foreach(function(elements){
     document.getElementById("button-"+elements).style.opacity=.75;
  })


};


function FuncionAleatorio(a,b) {
  console.log(Aleatorio);
  switch (Aleatorio) {
    case 1:
    document.getElementById("Divuno").style.opacity = 1;
    break;
    case 2:
    document.getElementById("Divdos").style.opacity = 1;
    break;
    case 3:
    document.getElementById("Divtres").style.opacity = 1;
    case 4:
    break;
    document.getElementById("Divcuatro").style.opacity = 1;
    break;
    case 5:
    document.getElementById("Divcinco").style.opacity = 1;
    break;
    case 6:
    document.getElementById("Divseis").style.opacity = 1;
    break;
    case 7:
    document.getElementById("Divsiete").style.opacity = 1;
    break;
    case 8:
    document.getElementById("Divocho").style.opacity = 1;
    break;
    case 9:
    document.getElementById("Divnueve").style.opacity = 1;
    break;
  }
}
