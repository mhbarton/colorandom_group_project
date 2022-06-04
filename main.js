var newPaletteButton = document.querySelector('.new-button');
var savePaletteButton = document.querySelector('.save-button');
var swatches = document.querySelectorAll('.swatches');
var hexName1 = document.querySelector('#swatch1');
var hexName2 = document.querySelector('#swatch2');
var hexName3 = document.querySelector('#swatch3');
var hexName4 = document.querySelector('#swatch4');
var hexName5 = document.querySelector('#swatch5');
// var unlockButton = document.querySelector('#ub2');
// var lockButton1 = document.querySelector('#lb1');
// var lockButton2 = document.querySelector('#lb2');


window.addEventListener('load', assignRandomColors);
newPaletteButton.addEventListener('click', assignRandomColors);
unlockButton.addEventListener('click', lockSwatch);
lockButton.addEventListener('click', unlockSwatch);

// savePaletteButton.addEventListener('click', savePalette);
// clicking lock button should show unlock button

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

// when the page loads, the user will see random Palettes
// all the buttons will be unlocked
// if user decieds to save a swatch, they will click the unlock button
// the unlock button will hide, and lock button will appear and will not invoke generateRandomPalette
// clicking unlock button will SHOW

// will show the lock button
function removeHidden(buttons) {
  buttons.classList.remove('hidden');
}

// will hide the unlock button
function addHidden(buttons) {
  buttons.classList.add('hidden');
}

document.getElementById("ub1").addEventListener('click', switchButtons)
function switchButtons() {
var target = e.target;

target.classList.toggle("unlock-button")
target.classList.toggle("lock-button")
}


// function lockSwatch() {
//     // if (unlockButton.click) {
//     addHidden(unlockButton1)
//     removeHidden(lockButton1)
//     addHidden(unlockButton2)
//     removeHidden(lockButton2)
//       // } else if (!unlockButton.click) {
//         // generateRandomPalette()
//           // lockButton.classList.remove('hidden');
// }
// lockSwatch();
//   function unlockSwatch() {
//   addHidden(lockButton1)
//   removeHidden(unlockButton1)
//   addHidden(lockButton2)
//   removeHidden(unlockButton2)
//   }
// unlockSwatch();
