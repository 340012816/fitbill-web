(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
(function(d, p){var a = new XMLHttpRequest(),b = d.body;a.open("GET", p, true);a.send();a.onload = function(){var c = d.createElement("div");c.style.display = "none";c.innerHTML = a.responseText;b.insertBefore(c, b.childNodes[0]);}})(document, "css/plyr.svg");

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;if(thresholdPassed()){if($(window).width()>=1200){$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/zu-1-tu-xiang-128-6.png' : 'images/zu-1-tu-xiang-85-9.png') : 'images/zu-1-tu-xiang-43-9.png');
$('.js-4').attr('src', (dpi>1) ? 'images/situpt-120-13.png' : 'images/situpt-60-13.png');
$('.js-6').attr('src', (dpi>1) ? 'images/stepperst-120-10.png' : 'images/stepperst-60-10.png');
$('.js-8').attr('src', (dpi>1) ? 'images/abt-120-17.png' : 'images/abt-60-17.png');
$('.js-10').attr('src', (dpi>1) ? 'images/walkert-120-13.png' : 'images/walkert-60-13.png');
$('.js-12').attr('src', (dpi>1) ? 'images/biket-120-16.png' : 'images/biket-60-16.png');
$('.js-14').attr('src', (dpi>1) ? 'images/exercycle-120-11.png' : 'images/exercycle-60-11.png');
$('.js-16').attr('src', (dpi>1) ? 'images/treadmillt-120-14.png' : 'images/treadmillt-60-14.png');
$('.js-18').attr('src', (dpi>1) ? 'images/rowingt-120-16.png' : 'images/rowingt-60-16.png');
$('.js-20').attr('src', (dpi>1) ? 'images/elipticalt-120-19.png' : 'images/elipticalt-60-19.png');
$('.js-22').attr('src', (dpi>1) ? 'images/gymt-120-19.png' : 'images/gymt-60-19.png');
var a='data-src'; if($('.js-24').hasAttr('src')) { a='src'; } $('.js-24').attr(a, (dpi>1) ? 'images/zu-1-787-8.png' : 'images/zu-1-394-12.png');
var a='data-src'; if($('.js-28').hasAttr('src')) { a='src'; } $('.js-28').attr(a, (dpi>1) ? ((dpi>2) ? 'images/xiang-copy-600-16.jpg' : 'images/xiang-copy-400-16.jpg') : 'images/xiang-copy-200-17.jpg');
var a='data-src'; if($('.js-29').hasAttr('src')) { a='src'; } $('.js-29').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-me-600-15.jpg' : 'images/ye-mian-me-400-15.jpg') : 'images/ye-mian-me-200-15.jpg');
var a='data-src'; if($('.js-30').hasAttr('src')) { a='src'; } $('.js-30').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-xin-wen-600-11.jpg' : 'images/ye-mian-xin-wen-400-11.jpg') : 'images/ye-mian-xin-wen-200-11.jpg');
var a='data-src'; if($('.js-31').hasAttr('src')) { a='src'; } $('.js-31').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-xiang-600-12.jpg' : 'images/ye-mian-xiang-400-12.jpg') : 'images/ye-mian-xiang-200-12.jpg');
var a='data-src'; if($('.js-32').hasAttr('src')) { a='src'; } $('.js-32').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-yun-dong-zhong-600-11.jpg' : 'images/ye-mian-yun-dong-zhong-400-11.jpg') : 'images/ye-mian-yun-dong-zhong-200-11.jpg');
var a='data-src'; if($('.js-33').hasAttr('src')) { a='src'; } $('.js-33').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-li-shi-ji-lu-tu-biao2-600-9.png' : 'images/ye-mian-li-shi-ji-lu-tu-biao2-400-9.png') : 'images/ye-mian-li-shi-ji-lu-tu-biao2-200-9.png');
var a='data-src'; if($('.js-34').hasAttr('src')) { a='src'; } $('.js-34').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-chun-zi-tu-600-9.png' : 'images/ye-mian-chun-zi-tu-400-9.png') : 'images/ye-mian-chun-zi-tu-200-9.png');
var a='data-src'; if($('.js-35').hasAttr('src')) { a='src'; } $('.js-35').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-trainer2-600-9.jpg' : 'images/ye-mian-trainer2-400-9.jpg') : 'images/ye-mian-trainer2-200-9.jpg');
var a='data-src'; if($('.js-36').hasAttr('src')) { a='src'; } $('.js-36').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-ti-zhong-cheng3-600-9.png' : 'images/ye-mian-ti-zhong-cheng3-400-9.png') : 'images/ye-mian-ti-zhong-cheng3-200-9.png');
var a='data-src'; if($('.js-37').hasAttr('src')) { a='src'; } $('.js-37').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-ti-zhong-cheng4-600-9.jpg' : 'images/ye-mian-ti-zhong-cheng4-400-9.jpg') : 'images/ye-mian-ti-zhong-cheng4-200-9.jpg');
$('.js-38').attr('src', (dpi>1) ? ((dpi>2) ? 'images/yi-shilogo-01-605-2.png' : 'images/yi-shilogo-01-404-2.png') : 'images/yi-shilogo-01-202-3.png');
$('.js-39').attr('src', (dpi>1) ? ((dpi>2) ? 'images/zu-1-tu-xiang-213.png' : 'images/zu-1-tu-xiang-142.png') : 'images/zu-1-tu-xiang-71-3.png');}else{$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/zu-1-tu-xiang-89.png' : 'images/zu-1-tu-xiang-59.png') : 'images/zu-1-tu-xiang-30.png');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/situpt-72.png' : 'images/situpt-48.png') : 'images/situpt-24.png');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/stepperst-72.png' : 'images/stepperst-48.png') : 'images/stepperst-24.png');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/abt-72.png' : 'images/abt-48.png') : 'images/abt-24.png');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/walkert-72.png' : 'images/walkert-48.png') : 'images/walkert-24.png');
$('.js-12').attr('src', (dpi>1) ? ((dpi>2) ? 'images/biket-72.png' : 'images/biket-48.png') : 'images/biket-24.png');
$('.js-14').attr('src', (dpi>1) ? ((dpi>2) ? 'images/exercycle-72.png' : 'images/exercycle-48.png') : 'images/exercycle-24.png');
$('.js-16').attr('src', (dpi>1) ? ((dpi>2) ? 'images/treadmillt-72.png' : 'images/treadmillt-48.png') : 'images/treadmillt-24.png');
$('.js-18').attr('src', (dpi>1) ? ((dpi>2) ? 'images/rowingt-72.png' : 'images/rowingt-48.png') : 'images/rowingt-24.png');
$('.js-20').attr('src', (dpi>1) ? ((dpi>2) ? 'images/elipticalt-72.png' : 'images/elipticalt-48.png') : 'images/elipticalt-24.png');
$('.js-22').attr('src', (dpi>1) ? ((dpi>2) ? 'images/gymt-72.png' : 'images/gymt-48.png') : 'images/gymt-24.png');
var a='data-src'; if($('.js-24').hasAttr('src')) { a='src'; } $('.js-24').attr(a, (dpi>1) ? ((dpi>2) ? 'images/zu-1-660.png' : 'images/zu-1-440.png') : 'images/zu-1-220.png');
var a='data-src'; if($('.js-28').hasAttr('src')) { a='src'; } $('.js-28').attr(a, (dpi>1) ? ((dpi>2) ? 'images/xiang-copy-360.jpg' : 'images/xiang-copy-240.jpg') : 'images/xiang-copy-120.jpg');
var a='data-src'; if($('.js-29').hasAttr('src')) { a='src'; } $('.js-29').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-me-360.jpg' : 'images/ye-mian-me-240.jpg') : 'images/ye-mian-me-120.jpg');
var a='data-src'; if($('.js-30').hasAttr('src')) { a='src'; } $('.js-30').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-xin-wen-360.jpg' : 'images/ye-mian-xin-wen-240.jpg') : 'images/ye-mian-xin-wen-120.jpg');
var a='data-src'; if($('.js-31').hasAttr('src')) { a='src'; } $('.js-31').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-xiang-360.jpg' : 'images/ye-mian-xiang-240.jpg') : 'images/ye-mian-xiang-120.jpg');
var a='data-src'; if($('.js-32').hasAttr('src')) { a='src'; } $('.js-32').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-yun-dong-zhong-360.jpg' : 'images/ye-mian-yun-dong-zhong-240.jpg') : 'images/ye-mian-yun-dong-zhong-120.jpg');
var a='data-src'; if($('.js-33').hasAttr('src')) { a='src'; } $('.js-33').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-li-shi-ji-lu-tu-biao2-360.png' : 'images/ye-mian-li-shi-ji-lu-tu-biao2-240.png') : 'images/ye-mian-li-shi-ji-lu-tu-biao2-120.png');
var a='data-src'; if($('.js-34').hasAttr('src')) { a='src'; } $('.js-34').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-chun-zi-tu-360.png' : 'images/ye-mian-chun-zi-tu-240.png') : 'images/ye-mian-chun-zi-tu-120.png');
var a='data-src'; if($('.js-35').hasAttr('src')) { a='src'; } $('.js-35').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-trainer2-360.jpg' : 'images/ye-mian-trainer2-240.jpg') : 'images/ye-mian-trainer2-120.jpg');
var a='data-src'; if($('.js-36').hasAttr('src')) { a='src'; } $('.js-36').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-ti-zhong-cheng3-360.png' : 'images/ye-mian-ti-zhong-cheng3-240.png') : 'images/ye-mian-ti-zhong-cheng3-120.png');
var a='data-src'; if($('.js-37').hasAttr('src')) { a='src'; } $('.js-37').attr(a, (dpi>1) ? ((dpi>2) ? 'images/ye-mian-ti-zhong-cheng4-360.jpg' : 'images/ye-mian-ti-zhong-cheng4-240.jpg') : 'images/ye-mian-ti-zhong-cheng4-120.jpg');
$('.js-38').attr('src', (dpi>1) ? ((dpi>2) ? 'images/yi-shilogo-01-258.png' : 'images/yi-shilogo-01-172.png') : 'images/yi-shilogo-01-86.png');
$('.js-39').attr('src', (dpi>1) ? ((dpi>2) ? 'images/zu-1-tu-xiang-138.png' : 'images/zu-1-tu-xiang-92.png') : 'images/zu-1-tu-xiang-46.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
$('.js-24').unveil(50);
$('.js-79 source').unveil(50);
$('.js-28').unveil(50);
$('.js-80 source').unveil(50);
$('.js-29').unveil(50);
$('.js-81 source').unveil(50);
$('.js-30').unveil(50);
$('.js-82 source').unveil(50);
$('.js-31').unveil(50);
$('.js-83 source').unveil(50);
$('.js-32').unveil(50);
$('.js-84 source').unveil(50);
$('.js-33').unveil(50);
$('.js-85 source').unveil(50);
$('.js-34').unveil(50);
$('.js-86 source').unveil(50);
$('.js-35').unveil(50);
$('.js-87 source').unveil(50);
$('.js-36').unveil(50);
$('.js-88 source').unveil(50);
$('.js-37').unveil(50);
$('.js-89 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-2')[0], "1.20s", "0.50s", 1, 100);
wl.addAnimation($('.js-3')[0], "1.20s", "1.00s", 1, 100);
wl.addAnimation($('.js-4')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-5')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "1.60s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.00s", "1.70s", 1, 100);
wl.addAnimation($('.js-8')[0], "1.00s", "1.10s", 1, 100);
wl.addAnimation($('.js-9')[0], "1.00s", "1.20s", 1, 100);
wl.addAnimation($('.js-10')[0], "1.00s", "1.70s", 1, 100);
wl.addAnimation($('.js-11')[0], "1.00s", "1.80s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "1.30s", 1, 100);
wl.addAnimation($('.js-13')[0], "1.00s", "1.40s", 1, 100);
wl.addAnimation($('.js-14')[0], "1.00s", "1.80s", 1, 100);
wl.addAnimation($('.js-15')[0], "1.00s", "1.90s", 1, 100);
wl.addAnimation($('.js-16')[0], "1.00s", "1.40s", 1, 100);
wl.addAnimation($('.js-17')[0], "1.00s", "1.50s", 1, 100);
wl.addAnimation($('.js-18')[0], "1.00s", "1.90s", 1, 100);
wl.addAnimation($('.js-19')[0], "1.00s", "2.00s", 1, 100);
wl.addAnimation($('.js-20')[0], "1.00s", "1.50s", 1, 100);
wl.addAnimation($('.js-21')[0], "1.00s", "1.60s", 1, 100);
wl.addAnimation($('.js-22')[0], "1.00s", "2.00s", 1, 100);
wl.addAnimation($('.js-23')[0], "1.00s", "2.10s", 1, 100);
wl.addAnimation($('.js-24')[0], "3.10s", "0.50s", 1, 90);
wl.addAnimation($('.js-28')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-29')[0], "1.00s", "0.10s", 1, 100);
wl.addAnimation($('.js-30')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js-31')[0], "1.00s", "0.30s", 1, 100);
wl.addAnimation($('.js-32')[0], "1.00s", "0.40s", 1, 100);
wl.addAnimation($('.js-33')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-34')[0], "1.00s", "0.60s", 1, 100);
wl.addAnimation($('.js-35')[0], "1.00s", "0.70s", 1, 100);
wl.addAnimation($('.js-36')[0], "1.00s", "0.80s", 1, 100);
wl.addAnimation($('.js-37')[0], "1.00s", "0.90s", 1, 100);
wl.start();

});