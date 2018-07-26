document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
function sliderLeft() {
    var line = document.getElementById('lineSlider');
    left = left - 225;
    if(left < -225){
        left = 0;
    }
    line.style.left = left + 'px';
}
document.getElementById('slider-right').onclick = sliderRight;

function sliderRight() {
    var line = document.getElementById('lineSlider');
    left += 225;
    if(left > 225){
        left = 0;
    }
    line.style.left = left + 'px';
}
function openMenu() {
    var x = document.getElementById('btnMenu');
    var y = document.getElementById('burgerMenuItems');
    if (x.className === 'btnMenu') {
        if(y.className === 'burgerMenuItems-active'){
            y.className = 'burgerMenuItems';
        }else{
            y.className += '-active';
        }

    }else{
        x.className = 'btnMenu';
    }
}
