// alert('666');
var canvas = document.getElementById('bg');
canvas.width = canvas.clientWidth * 2;
canvas.height = canvas.clientHeight * 2;
var ctx = canvas.getContext('2d');
var nWidth = canvas.width,
    nHeight = canvas.height,
    n = 20;

var colorList = ["#FFC0CB", "	#9370DB", "#4169E1", "#98FB98", "#EEE8AA", "#FFA07A"]

window.onload=function(){
    draw();
}                         
function draw() {
    canvas.style.display='none';
    ctx.clearRect(0,0,nWidth,nHeight);
    for (var i = 0; i < n; i++) {
        var x = Math.random() * nWidth,
            y = Math.random() * nHeight,
            r = Math.random() * nWidth*0.08 + 100;
        var date = new Date().getTime();
        var gradient = gradient = ctx.createLinearGradient(0, y - r, 0, y + r);
        gradient.addColorStop(0, colorList[Math.floor(Math.random() * colorList.length)]);
        gradient.addColorStop(1, colorList[Math.floor(Math.random() * colorList.length)]);
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
    }
    canvas.style.display='block';
}

document.body.addEventListener('click', draw);






