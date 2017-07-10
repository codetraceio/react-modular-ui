export interface IClasses {
  block: string;
  element: string;
  blockModifier: string;
  elementModifier: string;
  separator: string;
}

export interface IIcons {
  [key: string]: any
}

class Settings {
  private prefix: string;
  private classes: IClasses;
  private icons: {[key: string]: any};
  private backend: boolean;

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

  public getClasses(): IClasses {
    return this.classes;
  }

  public setClasses(classes: IClasses) {
    this.classes = classes;
  }

  public getPrefix(): string {
    return this.prefix;
  }

  public setPrefix(prefix: string) {
    this.prefix = prefix;
  }

  public getIcons(): IIcons {
    return this.icons;
  }

  public setIcons(icons: IIcons) {
    this.icons = icons;
  }

  public getIcon(name: string): any {
    return this.icons[name];
  }

  public isBackend(): boolean {
    return this.backend;
  }

  public setBackend(backend: boolean) {
    this.backend = backend;
  }
}

export default new Settings();
