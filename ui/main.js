console.log('Loaded!');

//Change the text of main-text
function ChangeMainText() {
var element = document.getElementById('main-text');
element.innerHTML = "Text Changed...";
}

//Move the madi png image
var img = document.getElementById('madi');

img.onclick = function move() {
    img.style.marginLeft = '100px';
};