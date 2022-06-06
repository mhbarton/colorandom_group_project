class Color {
  constructor(hex, id) {
    this.hex = hex;
    this.id = id;
    this.locked = false;
  }
}


class Palette {
  constructor(colors, id) {
    this.colors = [];
    this.id = id;
    this.locked = false;
  }
