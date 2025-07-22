const leafCount = 60;
const speed = 12; // seconds
const flower = document.getElementById('flower');for (let i = 0; i < leafCount; i++) {
const leaf = document.createElement('div');
leaf.className = 'leaf';
const angle = (360 / leafCount) * i;
const delay = -1 * (speed / leafCount) * i;
leaf.style.setProperty('--leafAngle', `${angle}deg`);
leaf.style.animationDelay = `${delay}s, ${delay / 2}s`;
leaf.style.backgroundColor = `hsl(${angle}, 75%, 75%)`;
flower.appendChild(leaf);
}
