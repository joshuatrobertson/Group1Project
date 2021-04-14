
var bodyWidth = document.body.clientWidth
var bodyHeight = document.body.clientHeight;
var randPosX = Math.floor((Math.random()*bodyWidth));
var randPosY = Math.floor((Math.random()*bodyHeight));
var posLog = document.getElementById('pos_log');
var posXY = 'x: ' + randPosX + '<br />' + 'y: ' + randPosY;

$('#news-item').css('left', randPosX);
$('#news-item').css('top', randPosY);

posLog.innerHTML = posXY
