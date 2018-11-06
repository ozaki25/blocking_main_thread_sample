const button2 = document.getElementById('button2');

button2.addEventListener('click', onClick2);

function onClick2(e) {
  e.target.style.backgroundColor = generateColorCode2();
}

function generateColorCode2() {
  console.log('！！！！！！メインスレッドブロック開始！！！！！！');
  const now = performance.now();
  while (performance.now() - now < 3000) {
    // noop
  }
  console.log('#####メインスレッドブロック解除#####');

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
