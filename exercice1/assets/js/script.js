$(function(){
  var c = document.getElementById('housecanvas');
  var ctx = c.getContext('2d');


  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(100,300);
  ctx.lineTo(300,300);
  ctx.lineTo(300,100);
  ctx.closePath();
  ctx.fillStyle = 'lightblue';
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(200,10);
  ctx.lineTo(300,100);
  ctx.closePath();
  ctx.fillStyle = '#d7823e';
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(130,150); //windows left
  ctx.lineTo(160,150);
  ctx.lineTo(160,180);
  ctx.lineTo(130,180);
  ctx.lineTo(130,150);
  ctx.moveTo(230,150); // windows right
  ctx.lineTo(260,150);
  ctx.lineTo(260,180);
  ctx.lineTo(230,180);
  ctx.lineTo(230,150);
  ctx.moveTo(180,300); // porte
  ctx.lineTo(180,200);
  ctx.lineTo(220,200);
  ctx.lineTo(220,300);
  ctx.closePath();
  ctx.fillStyle = 'grey';
  ctx.fill();
  ctx.stroke();
});
