export interface Classes {
  block: string;
  element: string;
  modifier: string;
  separator: string;
}

export interface Icons {
  [key: string]: any;
}

export class SettingService {
  private prefix: string = "c-";
  private classes: Classes = {
    block: "{b}",
    element: "{b}--{e}",
    modifier: "-{m}",
    separator: "-",
  };
  private icons: {[key: string]: any} = {};
  private backend: boolean = false;

  public getClasses(): Classes {
    return this.classes;
  }

  public setClasses(classes: Classes) {
    this.classes = classes;
  }

  public getPrefix(): string {
    return this.prefix;
  }

  public setPrefix(prefix: string) {
    this.prefix = prefix;
  }

  public getIcons(): Icons {
    return this.icons;
  }

  public setIcons(icons: Icons) {
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
