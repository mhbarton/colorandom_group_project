class Color {
  constructor(hex, id) {
    this.hex = hex;
    this.id = id;
    this.locked = false;
  }
}

// on page load, a new instance of Palette will be created
class Palette {
  constructor(colors, id) {
    this.colors = [];
    this.id = id;
    this.locked = false;
  }

  // replaces unlocked swatches
  replaceSwatch() {
    this.colors = '';
    if (this.locked === false) {
      return this.colors
    }
  }

// lock swatch
  lockSwatch() {
    this.locked = true
  }
}




// Color class will be a random hex code that is a series of numbers 0-9 and A-F
// This will display as the hex code and swatch color on the site underneath the color swatch with the lock
// Color will have an event listener so the user can lock in a color selection
// All colors begin unlocked

// Palette class a new instance of palette will be declared on page load - event listener on page load
// A new instance will be created and used until the palette is Saved
// It should have 5 colors
// The user should be able to lock colors
// The user should only replace unlocked colors
