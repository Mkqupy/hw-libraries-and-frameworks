const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
let currentKeyIndex = Math.floor(Math.random() * keys.length);
let currentKey = keys[currentKeyIndex];

const messageElement = document.getElementById('message');
const keyElement = document.getElementById('key');

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keypress', preventDefault);
document.getElementById('new-game').addEventListener('click', startNewGame);

function handleKeyDown(event) {
  const pressedKey = event.key.toLowerCase();
  if (pressedKey === currentKey) {
    currentKeyIndex = (currentKeyIndex + 1) % keys.length;
    currentKey = keys[currentKeyIndex];
    keyElement.textContent = currentKey;
    displaySuccessMessage();
  } else {
    displayErrorMessage();
  }
}

function preventDefault(event) {
  event.preventDefault();
}

function startNewGame() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  currentKey = keys[currentKeyIndex];
  keyElement.textContent = currentKey;
  messageElement.textContent = '';
}

function displaySuccessMessage() {
  const notice = new PNotify({

  });
  notice.open();
}

function displayErrorMessage() {
  const notice = new PNotify({
    type: 'error'
  });
  notice.open();
}


