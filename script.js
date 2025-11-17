document.getElementById('ToggleTheme').onclick = function() {
  document.body.classList.toggle('dark-mode');
};



const mycanvas = document.getElementById("myCanvas");
const ctx = mycanvas.getContext("2d");
ctx.shadowColor = 'rgba(0,0,0,0.7)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 6;
ctx.shadowOffsetY = 6;
ctx.fillStyle = '#cee';
ctx.fillRect(50, 50, 300, 100);
