const data = { score: 0, oldCoords: null, newCoords: null, pos: { x:3, y: -2}, over: false};
const rendeWell = () => {
    document.querySelector('pre').textContent = `${data.score}\n`;
    well.forEach(r => { document.querySelector('pre').textContent += `*{r.join('')}\n`; });
};