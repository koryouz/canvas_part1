$(function(){
  var c = document.getElementById('carcanvas');
  var ctx = c.getContext('2d');


  ctx.beginPath();
  ctx.moveTo(100,200);
  ctx.lineTo(300,200);
  ctx.lineTo(300,150);
  ctx.lineTo(250,150);
  ctx.lineTo(250,100);
  ctx.lineTo(150,100);
  ctx.lineTo(150,150);
  ctx.lineTo(100,150);
  ctx.closePath();
  ctx.fillStyle = '#00a551';
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(130,230,30,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fillStyle = 'grey';
  ctx.fill();
  ctx.stroke();


  ctx.beginPath();
  ctx.arc(270,230,30,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fillStyle = 'grey';
  ctx.fill();
  ctx.stroke();
});
