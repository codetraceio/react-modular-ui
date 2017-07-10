/// <reference types="react" />
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface ITabsOption {
    title: string;
    value: string | number;
    count?: number;
    countColor?: string;
}
export interface ITabsProps {
    size?: string | number;
    color?: string;
    options: ITabsOption[];
    value: string | number;
    onChange?: (value: string | number, option: ITabsOption) => void;
}
export default class Button extends AbstractComponent<ITabsProps, {}> {
    private element;
    private lineElement;
    private optionElements;
    constructor();
    componentDidMount(): void;
    componentDidUpdate(): void;
    getModifierObject(): IModifiers;
    getOptionModifiers(option: ITabsOption): IModifiers;
    setElement(element: HTMLElement): void;
    setLineElement(element: HTMLElement): void;
    setOptionElement(name: string, element: HTMLElement): void;
    updateLine(): void;
    onChange(value: string | number, option: ITabsOption): void;
    renderLine(): JSX.Element;
    renderCount(option: ITabsOption): JSX.Element;
    renderOptions(): JSX.Element[];
    render(): JSX.Element;
}
