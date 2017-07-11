/// <reference types="react" />
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface IProgressProps {
    size?: string | number;
    color?: string;
    value: string | number;
}
export default class Progress extends AbstractComponent<IProgressProps, {}> {
    getModifierObject(): IModifiers;
    render(): JSX.Element;
}
