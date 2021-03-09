function startGame() {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = 'Welcome to MutiMath! Starting new game...';
}
var startBtn = document.getElementById('startGame');
startBtn.addEventListener('click', startGame);
function nodefault() {
    event === null || event === void 0 ? void 0 : event.preventDefault();
}
