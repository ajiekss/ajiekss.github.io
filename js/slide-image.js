var images =  ['img/port01.jpg','img/port02.jpg','img/port03.jpg','img/port04.jpg','img/port05.jpg','img/port06.jpg'];
var i = 0;
var b;
var txt = "";
var dots = document.getElementsByClassName("dot");
var  cc = document.getElementById("c");

var slideIndex = 0;

function dotslide(n) {
    slideShow(slideIndex = n);
}

function slideShow(n){
    document.getElementById("image").src = images[slideIndex];
    // if (i<images.length) {
    //     i++;
    // }
    // else{
    //     i=0;
    // }
    // setTimeout("slideShow()" , 1000);
    // cc.innerHTML = slideIndex;
    // for(b = n ; b<=images.length; b++){
    //     dots[slideIndex].className += " active";
    //     dots[slideIndex].className = dots[slideIndex].className.replace(" active", "");
    // }

}
window.onload = slideShow;


for(b = 0 ; b <= images.length-1; b++){
    txt += '<span id="p" class="dot" onClick="dotslide('+b+')"></span>';
}
document.getElementById("p").innerHTML = txt;

