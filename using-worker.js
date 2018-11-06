const button3 = document.getElementById('button3');
const worker = new Worker('worker.js');

button3.addEventListener('click', onClick3);
worker.addEventListener('message', onMessage);

function onClick3() {
  worker.postMessage('generate-color');
}

function onMessage(e) {
  button3.style.backgroundColor = e.data;
}
