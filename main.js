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

// function assignRandomColors() {
//   for (var i = 1; i <= 6; i++) {
//     if (!$(`.color-${i}`).hasClass("lock")) {
//       var color = generateRandomPalette();
//       $(`.color-${i}-text`).text(color);
//       $(`.color-${i}`).css("background-color", color);
//     }
//   }
// }

function assignRandomColors() {

document.getElementById("1").style.backgroundColor = randomColor;
document.getElementById("2").style.backgroundColor = randomColor;
document.getElementById("3").style.backgroundColor = randomColor;
document.getElementById("4").style.backgroundColor = randomColor;
document.getElementById("5").style.backgroundColor = randomColor;

hexName1.innerText = randomColor;
hexName2.innerText = randomColor;
hexName3.innerText = randomColor;
hexName4.innerText = randomColor;
hexName5.innerText = randomColor;

}

//
// function currentPalette() {
//   var palette = new Palette ({
//     swatch1:{id: 1, color: generateRandomPalette(), locked: false},
//     swatch2:{id: 2, color: generateRandomPalette(), locked: false},
//     swatch3:{id: 3, color: generateRandomPalette(), locked: false},
//     swatch4:{id: 4, color: generateRandomPalette(), locked: false},
//     swatch5:{id: 5, color: generateRandomPalette(), locked: false},
//   })
//   }
//   currentPalette();
