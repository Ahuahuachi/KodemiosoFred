var secuenciaPC = [];
var secuenciaUsuario = [];
var buttons = []



function turnoPC() {
    let a = 1,
        b = 9;

    var Aleatorio = Math.round(Math.random() * (b - a) + parseInt(a));
    secuenciaPC.push(Aleatorio);
    secuenciaPC.forEach((value, index, array) => {
        document.getElementById(`button-${value}`).style.opacity = .5;
        document.getElementById(`button-${value}`).style.opacity = 1;
    });
    startClock();
};

for (let index = 0; index < document.getElementsByClassName('game-button').length; index++) {
    buttons.push(document.getElementsByClassName('game-button')[index]);
}


buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
        let continuePlaying;
        secuenciaUsuario.push(e.target.getAttribute('data-button-number'));

        secuenciaUsuario.forEach((value, index) => {
            if (value == secuenciaPC[index]) {
                // reseteo de contador
                continuePlaying = true;
            } else {
                // Game over
                continuePlaying = false
            }
        });

        secuenciaPC = [];

        if (continuePlaying) {
            // Rutina para continuar
            startClock();
        }

    });
});

function startClock(){
    interval = setInterval(console.log('Start'), 3000);
}
