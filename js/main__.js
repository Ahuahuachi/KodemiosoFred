// Add listeners on window load
window.onload = () => {
    addListeners();
}

// Function to add listeners
function addListeners() {
    // Start button listener
    document.getElementById('play').addEventListener('click', () => {
        /** Iniciarjuego */
    });

    // Game button listeners
    document.getElementsByClassName('game-button').addEventListener('click', (e) => {
        console.log(e.target);
    });
}