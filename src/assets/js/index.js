
var canvas = $('#bg')[0];
canvas.width = canvas.clientWidth * 2;
canvas.height = canvas.clientHeight * 2;
var ctx = canvas.getContext('2d');
var nWidth = canvas.width,
    nHeight = canvas.height,
    n = (nWidth + nHeight) * 0.005;//显示的彩球数量
var colorList = ["#FFC0CB", "	#9370DB", "#4169E1", "#98FB98", "#EEE8AA", "#FFA07A"]
var ball = [];
window.onload = function () {
    draw();
    move();
}

//初次定义小球
function draw() {
    ctx.clearRect(0, 0, nWidth, nHeight);
    for (var i = 0; i < n; i++) {
        ball[i] = {
            'x': Math.random() * nWidth,
            'y': Math.random() * nHeight,
            'r': Math.random() * 180 + 100,
            'startColor': colorList[Math.floor(Math.random() * colorList.length)],
            'endColor': colorList[Math.floor(Math.random() * colorList.length)]
        }
        drawBall(ball[i]);
    }
}

//绘制小球
function drawBall(ball) {
    var gradient = ctx.createLinearGradient(0, ball.y - ball.r, 0, ball.y + ball.r);
    gradient.addColorStop(0, ball.startColor);
    gradient.addColorStop(1, ball.endColor);
    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
}

//移动小球的事件
var move = function () {
    ctx.clearRect(0, 0, nWidth, nHeight);
    for (var i = 0; i < n; i++) {
        ball[i]['y'] += Math.random() * 2 - 1;
        ball[i]['x'] += Math.random() * 2 - 1;
        drawBall(ball[i]);
    }
    requestAnimationFrame(move);
}

/**
 * 移动端和pc端不同的触发事件
 * 修复ios safari 下的click bug
 */
if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    $('body').on('touchstart',draw);
    $('#demo').on('touchstart',demoClick);
    $('#return').on('touchstart',back);
}
else {
    $('body').on('click', draw);
    $('#demo').on('click',demoClick);
    $('#return').on('click',back);    
}

//点击demo按钮
function demoClick(){
    // console.log('ok')
    $('.person').fadeOut(500);
    $('.demo').fadeIn(500);
    // $('.demo').slideDown();
}

//点击demo 的返回

function back(){
    $('.demo').fadeOut(500);
    $('.person').fadeIn(500);
}











