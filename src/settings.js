class Settings {
  constructor() {
    this.prefix = 'ghost-';
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

  getPrefix() {
    return this.prefix;
  }

  setPrefix(prefix) {
    this.prefix = prefix;
  }
}

export default new Settings();