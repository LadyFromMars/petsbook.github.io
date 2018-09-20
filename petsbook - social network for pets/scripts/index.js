
// Change arrow picture to green

var moreImg = document.querySelector('img');

moreImg.onmouseover = function more () {
moreImg.setAttribute ('src','images/arrowGreen.png');
};

moreImg.onmouseout = function moreOut () {
moreImg.setAttribute ('src','images/arrowYellow.png');
};
