console.log('Loaded!');

//Change the text of main-text
function ChangeMainText() {
var element = document.getElementById('main-text');
element.innerHTML = "Text Changed...";
}

//Move the madi png image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    do {
        marginLeft = marginLeft + 5;
        img.style.marginLeft = marginLeft + 'px';
    }while(marginLeft < 1000);
}
img.onclick = function () { //this is a nameless fucntion which also works
    var interval = setInterval(moveRight, 100);
    //img.style.marginLeft = '100px';
};