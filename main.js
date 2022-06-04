var newPaletteButton = document.querySelector('.new-button');
var savePaletteButton = document.querySelector('.save-button');
var swatches = document.querySelectorAll('.swatches');
var hexName1 = document.querySelector('#swatch1');
var hexName2 = document.querySelector('#swatch2');
var hexName3 = document.querySelector('#swatch3');
var hexName4 = document.querySelector('#swatch4');
var hexName5 = document.querySelector('#swatch5');
var unlockButtons = document.querySelectorAll('.unlock-button');
var lockButtons = document.querySelectorAll('.lock-button');
var colorNames = document.querySelector('.color-names');


window.addEventListener('load', assignRandomColors);
newPaletteButton.addEventListener('click', assignRandomColors);
for (var i = 0; i < unlockButtons.length; i++) {
  unlockButtons[i].addEventListener('click', lockSwatch);
}
for (var i = 0; i < lockButtons.length; i++){
  lockButtons[i].addEventListener('click', unlockSwatch);
}

colorNames.addEventListener('click', function(event) {
  console.log(event.target.className)
  console.log(event.target.id)
// if (event.target.className.includes('unlock-button')) {
//   console.log("colorNames")
// removeHidden()
// } else if (event.target.className.includes('lock-button')) {
//   console.log("HELP!");
// addHidden()
// } else {
//   return
// }
});

function removeHidden(colorNames) {
colorNames.classList.remove('hidden');
}

function addHidden(colorNames) {
colorNames.classList.add('hidden');
}

function lockSwatch() {
    addHidden(unlockButtons)
    removeHidden(lockButtons)
        }

function unlockSwatch(){
  addHidden(lockButtons)
  removeHidden(unlockButtons)
}


// savePaletteButton.addEventListener('click', savePalette);
// clicking log

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
// clickig unlock button will SHOW

// function removeHidden(colorNames) {
// colorNames.classList.remove('hidden');
// colorNames.classList.add('hidden');
// }
//
// function addHidden(colorNames) {
// // colorNames.classList.remove('hidden');
// colorNames.classList.toggle('hidden');
// }


// // will show the lock button
// function removeHidden(event) {
// event.target.classList.remove('hidden');
// event.target.classList.add('hidden');
// }

// // will hide the unlock buttons
// function addHidden(event) {
// event.target.classList.remove('hidden');
// event.target.classList.add('hidden');
// }


// function saveSwatch(){
//  if (!this.locked) {
//     this.locked = true
//   return;
// }else if (this.locked === true) {
//   assignRandomColors()
//   }
//   unlockSwatch();
// }
// if (!this.locked) {
//    this.locked = true
//    return;
// } else if (this.locked === true)
