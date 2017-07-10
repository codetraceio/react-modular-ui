/// <reference types="react" />
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface IPillProps {
    size?: string | number;
    color?: string;
    onChange?: (offset: number, page: number) => void;
}
export default class Pill extends AbstractComponent<IPillProps, {}> {
    getModifierObject(): IModifiers;
    render(): JSX.Element;
}
