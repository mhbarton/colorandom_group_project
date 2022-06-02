var newPaletteButton = document.querySelector('.new-button');
var savePaletteButton = document.querySelector('.save-button');
var swatch1 = document.querySelector('.swatch1');
var swatch2 = document.querySelector('.swatch2');
var swatch3 = document.querySelector('.swatch3');
var swatch4 = document.querySelector('.swatch4');
var swatch5 = document.querySelector('.swatch5');


window.addEventListener('load', generateRandomPalette);
newPaletteButton.addEventListener('click', generateRandomPalette);
// savePaletteButton.addEventListener('click', savePalette);

// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

// function randomPalette() {
// var palette = new Color(randomColors[getRandomIndex]
// }


function generateRandomPalette() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var randomColor = generateRandomPalette();
