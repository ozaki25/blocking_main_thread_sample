self.addEventListener('message', onMessage);

function onMessage(e) {
  if (e.data === 'generate-color') {
    const color = generateColorCode();
    self.postMessage(color);
  }
}

function generateColorCode() {
  console.log('！！！！！！メインスレッドブロック開始！！！！！！');
  const now = performance.now();
  while (performance.now() - now < 3000) {
    // noop
  }
  console.log('#####メインスレッドブロック解除#####');

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
