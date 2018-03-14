console.log('Loaded!');

//Change the text of main-text
function ChangeMainText() {
var element = document.getElementById('main-text');
element.innerHTML = "Text Changed...";
}

//Move the madi png image
var img = document.getElementById('madi');

function moveRight() {
    var marginLeft = 0;
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () { //this is a nameless fucntion which also works
    var interval = setInterval(moveRight, 50);
    //img.style.marginLeft = '100px';
};