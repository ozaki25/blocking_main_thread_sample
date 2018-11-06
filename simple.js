const button1 = document.getElementById('button1');

button1.addEventListener('click', onClick1);

function onClick1(e) {
  e.target.style.backgroundColor = generateColorCode1();
}

function generateColorCode1() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
