/// <reference types="react" />
import * as React from 'react';
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface ICheckboxProps {
    size?: string | number;
    view?: string;
    color?: string;
    disabled?: boolean;
    checked?: boolean;
    name?: string;
    onChange?: (checked: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}
export default class Button extends AbstractComponent<ICheckboxProps, {}> {
    getModifierObject(): IModifiers;
    isChecked(): boolean;
    onChange(e: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
