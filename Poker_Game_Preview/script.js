const canvas = document.getElementById('gameCanvas');
canvas.width = 800;
canvas.height = 450;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.font = '20px Arial';
ctx.fillText('Poker Table Preview (Demo)', 240, 225);
