/// <reference types="react" />
import * as React from 'react';
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface IButtonProps {
    size?: string | number;
    view?: string;
    color?: string;
    shape?: string;
    disabled?: boolean;
    padding?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    name?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export default class Button extends AbstractComponent<IButtonProps, {}> {
    getModifierObject(): IModifiers;
    render(): JSX.Element;
}
