var images =  ['img/port01.jpg','img/port02.jpg','img/port03.jpg','img/port04.jpg','img/port05.jpg','img/port06.jpg'];
var i = 0;
function slideShow(){
    document.getElementById("images").src = images;
    
    if (i<images.length-1) {
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slideShow()" , 2000);
}
window .onload = slideShow;