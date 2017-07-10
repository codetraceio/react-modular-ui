/// <reference types="react" />
import * as React from 'react';
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface IIconProps {
    size?: string | number;
    width?: string | number;
    height?: string | number;
    color?: string;
    rotate?: string | number;
    name?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export default class Button extends AbstractComponent<IIconProps, {}> {
    getModifierObject(): IModifiers;
    render(): JSX.Element;
}
