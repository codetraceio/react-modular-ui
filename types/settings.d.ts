export interface IClasses {
    block: string;
    element: string;
    blockModifier: string;
    elementModifier: string;
    separator: string;
}
export interface IIcons {
    [key: string]: any;
}
export declare class Settings {
    private prefix;
    private classes;
    private icons;
    private backend;
    constructor();
    getClasses(): IClasses;
    setClasses(classes: IClasses): void;
    getPrefix(): string;
    setPrefix(prefix: string): void;
    getIcons(): IIcons;
    setIcons(icons: IIcons): void;
    getIcon(name: string): any;
    isBackend(): boolean;
    setBackend(backend: boolean): void;
}
declare const _default: Settings;
export default _default;
