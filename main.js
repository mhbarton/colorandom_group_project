var colorNames = document.querySelector('.color-names');
var hexName1 = document.querySelector('#swatch1');
var hexName2 = document.querySelector('#swatch2');
var hexName3 = document.querySelector('#swatch3');
var hexName4 = document.querySelector('#swatch4');
var hexName5 = document.querySelector('#swatch5');
var lock1 = document.getElementById('lock-1');
var lock2 = document.getElementById('lock-2');
var lock3 = document.getElementById('lock-3');
var lock4 = document.getElementById('lock-4');
var lock5 = document.getElementById('lock-5');
var locks = [lock1, lock2, lock3, lock4, lock5];
var newPaletteButton = document.querySelector('.new-button');
var savePaletteButton = document.querySelector('.save-button');
var sideBar = document.querySelector('.side-bar')
var swatches = document.querySelectorAll('.swatches');

window.addEventListener('load', assignRandomColors);
newPaletteButton.addEventListener('click', assignRandomColors);
lock2.addEventListener('click', changeSrcLock, changeSrcUnlock);
lock3.addEventListener('click', changeSrcLock, changeSrcUnlock);
lock4.addEventListener('click', changeSrcLock, changeSrcUnlock);
lock5.addEventListener('click', changeSrcLock, changeSrcUnlock);
savePaletteButton.addEventListener('click', savePalette)
sideBar.addEventListener('click', deleteSaved)


function changeSrcLock() {
    for (var i = 0; i < locks.length; i++) {
      if ((locks[i].id === event.target.id) && (locks[i].src != "./assets/lock.png")) {
            locks[i].src = "./assets/lock.png"
          } else {
              locks[i].src = './assets/unlock.png'
    }
  }
}

function changeSrcUnlock() {
  for (var i = 0; i < locks.length; i++){
    if ((locks[i].id === event.target.id) && (locks[i].src != "./assets/unlock.png")) {
          locks[i].src = "./assets/unlock.png"
        } else {
            locks[i].src = './assets/lock.png'
    }
  }
}

function generateRandomPalette(event) {
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

  hexName1.innerText = randomColor1;
  hexName2.innerText = randomColor2;
  hexName3.innerText = randomColor3;
  hexName4.innerText = randomColor4;
  hexName5.innerText = randomColor5;
}

function savePalette() {
  var miniSwatchBox =
  `<section id="mini-swatch-box" class="mini-swatch-box">
    <container id="mini-1" style="background-color:${document.getElementById("1").style.backgroundColor}" class="mini-swatches" >
    </container>
    <container id="mini-2" style="background-color:${document.getElementById("2").style.backgroundColor}" class="mini-swatches" >
    </container>
    <container id="mini-3" style="background-color:${document.getElementById("3").style.backgroundColor}" class="mini-swatches" >
    </container>
    <container id="mini-4" style="background-color:${document.getElementById("4").style.backgroundColor}" class="mini-swatches" >
    </container>
    <container id="mini-5" style="background-color:${document.getElementById("5").style.backgroundColor}" class="mini-swatches" >
    </container>
    <container class="trash-icon">🗑
    </container>
    </section>`
    sideBar.innerHTML += miniSwatchBox
}

function deleteSaved(event){
  if (event.target.classList.contains("trash-icon")) {
    event.target.closest("section").remove();
  }
  for(var i = 0; i < sideBar.length; i++){
    if(sideBar[i].id == event.target.parentElement.id){
    sideBar.splice(i, 1);
    savePalette();
    return sideBar;
    }
  }
}
