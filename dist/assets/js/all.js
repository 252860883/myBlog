function draw(){ctx.clearRect(0,0,nWidth,nHeight);for(var t=0;t<n;t++)ball[t]={x:Math.random()*nWidth,y:Math.random()*nHeight,r:180*Math.random()+100,startColor:colorList[Math.floor(Math.random()*colorList.length)],endColor:colorList[Math.floor(Math.random()*colorList.length)]},drawBall(ball[t])}function drawBall(t){var a=ctx.createLinearGradient(0,t.y-t.r,0,t.y+t.r);a.addColorStop(0,t.startColor),a.addColorStop(1,t.endColor),ctx.beginPath(),ctx.fillStyle=a,ctx.arc(t.x,t.y,t.r,0,2*Math.PI,!0),ctx.fill(),ctx.closePath()}var canvas=document.getElementById("bg");canvas.width=2*canvas.clientWidth,canvas.height=2*canvas.clientHeight;var ctx=canvas.getContext("2d"),nWidth=canvas.width,nHeight=canvas.height,n=.005*(nWidth+nHeight),colorList=["#FFC0CB","\t#9370DB","#4169E1","#98FB98","#EEE8AA","#FFA07A"],ball=[];window.onload=function(){draw(),move()};var move=function(){ctx.clearRect(0,0,nWidth,nHeight);for(var t=0;t<n;t++)ball[t].y+=2*Math.random()-1,ball[t].x+=2*Math.random()-1,drawBall(ball[t]);requestAnimationFrame(move)};document.body.addEventListener("click",draw);