/// <reference types="react" />
import * as React from 'react';
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface IToggleProps {
    size?: string | number;
    color?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (value: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}
export default class Toggle extends AbstractComponent<IToggleProps, {}> {
    getModifierObject(): IModifiers;
    isChecked(): boolean;
    onClick(e: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
