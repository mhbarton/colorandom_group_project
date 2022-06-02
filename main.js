var newPaletteButton = document.querySelector('.new-button');
var savePaletteButton = document.querySelector('.save-button');
var swatches = document.querySelectorAll('.swatches');
var hexName1 = document.querySelector('#swatch1');
var hexName2 = document.querySelector('#swatch2');
var hexName3 = document.querySelector('#swatch3');
var hexName4 = document.querySelector('#swatch4');
var hexName5 = document.querySelector('#swatch5');


window.addEventListener('load', assignRandomColors);
newPaletteButton.addEventListener('click', assignRandomColors);

// savePaletteButton.addEventListener('click', savePalette);


function generateRandomPalette() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function assignRandomColors() {
var randomColor1 = generateRandomPalette();
var randomColor2 = generateRandomPalette();
var randomColor3 = generateRandomPalette();
var randomColor4 = generateRandomPalette();
var randomColor5 = generateRandomPalette();

document.getElementById("1").style.backgroundColor = randomColor1;
document.getElementById("2").style.backgroundColor = randomColor2;
document.getElementById("3").style.backgroundColor = randomColor3;
document.getElementById("4").style.backgroundColor = randomColor4;
document.getElementById("5").style.backgroundColor = randomColor5;

hexName1.innerHTML = randomColor1;
hexName2.innerText = randomColor2;
hexName3.innerText = randomColor3;
hexName4.innerText = randomColor4;
hexName5.innerText = randomColor5;

}
