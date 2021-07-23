const data = { score: 0, oldCoords: null, newCoords: null, pos: { x:3, y: -2}, over: false};
const rendeWell = () => {
    document.querySelector('pre').textContent = `${data.score}\n`;
    well.forEach(r => { document.querySelector('pre').textContent += `*{r.join('')}\n`; });
};

let well = Array(20).fill(0).map(() => Array(10).fill('□'));
const tets = [
  [['□', '■', '□'], ['■', '■', '■'], ['□', '□', '□']],
  [['■', '□', '□'], ['■', '■', '■'], ['□', '□', '□']],
  [['□', '□', '■'], ['■', '■', '■'], ['□', '□', '□']],
  [['■', '■', '□'], ['■', '■', '□'], ['□', '□', '□']],
  [['□', '■', '■'], ['■', '■', '□'], ['□', '□', '□']],
  [['■', '■', '□'], ['□', '■', '■'], ['□', '□', '□']],
  [['□', '□', '□', '□'], ['■', '■', '■', '■'], ['□', '□', '□', '□']],
];

let tet = tets[Math.floor(Math.random() * tets.length)];
window.addEventListener('keydown', e => {
  e.code === 'ArrowDown' && canMove('down') && move('down');
  e.code === 'ArrowLeft' && !data.over && canMove('left') && move('left');
  e.code === 'ArrowRight' && !data.over && canMove('right') && move('right');
  e.code === 'ArrowUp' && !data.over && canMove('rotate') && move();
});