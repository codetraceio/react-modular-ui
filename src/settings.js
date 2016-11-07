class Settings {
  constructor() {
    this.classes = {
      block: '{b}',
      element: '{b}--{e}',
      modifier: '-{m}',
      modifierWithValue: '-{mk}-{mv}'
    }
  }

  getClasses() {
    return this.classes;
  }

  setClasses(classes) {
    this.classes = classes;
  }
}

export default new Settings();