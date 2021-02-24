function startGame() {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = 'Welcome to MutiMath! Starting new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
