class Settings {
  constructor() {
    this.prefix = 'c-';
    this.classes = {
      block: '{b}',
      element: '{b}--{e}',
      blockModifier: '-{m}',
      elementModifier: '-{m}',
      separator: '-'
    };
    this.icons = {};
    this.backend = false;
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

  getIcons() {
    return this.icons;
  }

  setIcons(icons) {
    this.icons = icons;
  }

  getIcon(name) {
    return this.icons[name];
  }

  isBackend() {
    return this.backend;
  }

  setBackend(backend) {
    this.backend = backend;
  }
}

export default new Settings();
