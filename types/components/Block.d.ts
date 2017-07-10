/// <reference types="react" />
import { default as AbstractComponent, IProp, IModifiers } from './AbstractComponent';
export interface IBlockProps {
    layout?: IProp<string>;
    wrap?: IProp<boolean>;
    padding?: IProp<string | number>;
    hide?: IProp<boolean>;
    margin?: IProp<string | number>;
    fit?: IProp<boolean>;
    grow?: IProp<string | number>;
    shrink?: IProp<string | number>;
    order?: IProp<string | number>;
    grid?: IProp<string | number>;
    align?: IProp<string>;
    justify?: IProp<string>;
    scroll?: IProp<string>;
    spaceHorizontal?: IProp<string | number>;
    spaceVertical?: IProp<string | number>;
    height?: IProp<string | number>;
    width?: IProp<string | number>;
    modifiers?: IModifiers;
}
export default class Block extends AbstractComponent<IBlockProps, {}> {
    getModifierObject(): IModifiers;
    render(): JSX.Element;
}
