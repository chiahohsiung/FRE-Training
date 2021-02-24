function startGame(): void {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = 'Welcome to MutiMath! Starting new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);