export interface IClasses {
  block: string;
  element: string;
  modifier: string;
  separator: string;
}

export interface IIcons {
  [key: string]: any;
}

export class SettingService {
  private prefix: string = "c-";
  private classes: IClasses = {
    block: "{b}",
    element: "{b}--{e}",
    modifier: "-{m}",
    separator: "-",
  };
  private icons: {[key: string]: any} = {};
  private backend: boolean = false;

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

export default new SettingService();
