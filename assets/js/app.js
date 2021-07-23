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

