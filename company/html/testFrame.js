var threeFrame = 3;
// alert('你好呀，js');

var lefPos = (typeof window.screenLeft == 'number') ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == 'number') ? window.screenTop : window.screenY;

console.log('lefPos', lefPos, 'topPos', topPos);

window.moveTo(200, 300); //禁用了

var pageWidth = window.innerWidth, pageHeight = window.innerHeight;
console.log('pageWidth', pageWidth, 'pageHeight', pageHeight);

window.resizeTo(100, 100);

var wroWin = window.open('http://www.baidu.com/', 'wroxWindow', "height=400,width=200,top = 10,left = 10 ,resizable = yes");
wroWin.resizeTo(500, 500);
wroWin.moveTo(100, 100);