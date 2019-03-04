$(function(){
  var c = document.getElementById('housecanvas');
  var ctx = c.getContext('2d');

  ctx.fillStyle = '#d7823e';
  ctx.rotate(45 * Math.PI / 180);
  ctx.fillRect(100,-100,150,150);
  ctx.rotate(-45 * Math.PI / 180);

  ctx.fillStyle = 'lightblue';
  ctx.fillRect(35.8,106,212.132,212.132);

  ctx.fillStyle = 'grey';
  ctx.fillRect(60,140,40,40);
  ctx.fillRect(180,140,40,40);
  ctx.fillRect(120,218,40,100);
});
