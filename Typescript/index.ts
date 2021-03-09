function startGame(): void {
    const messageElement: any = document.getElementById('message');
    messageElement.innerHTML = 'Welcome to MutiMath! Starting new game...';
}
const startBtn: any = document.getElementById('startGame');
startBtn.addEventListener('click', startGame);

function nodefault(): void {
    event?.preventDefault();
}