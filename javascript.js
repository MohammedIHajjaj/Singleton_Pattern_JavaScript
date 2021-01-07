//Mohammed Issa Hajjaj
class ThemeSettings {
  constructor() {
    if (ThemeSettings._instance) {
      return ThemeSettings._instance;
    } else {
      ThemeSettings._instance = this;

      this.color = "white";
      this.font = "sans-serif";
      this.layout = "gridlayout";
    }
  }
}

let setting1 = new ThemeSettings();
let setting2 = new ThemeSettings();

console.log(setting2 === setting1);

setting2.color = "Black";

console.log(setting1.color);
