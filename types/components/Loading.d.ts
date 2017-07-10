/// <reference types="react" />
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface ILoadingProps {
    size?: string | number;
    color?: string;
}
export default class Loading extends AbstractComponent<ILoadingProps, {}> {
    getModifierObject(): IModifiers;
    render(): JSX.Element;
}
