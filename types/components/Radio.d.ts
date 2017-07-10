/// <reference types="react" />
import * as React from 'react';
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface IRadioProps {
    size?: string | number;
    view?: string;
    color?: string;
    disabled?: boolean;
    name?: string;
    value?: string | number | boolean;
    checked?: boolean;
    placeholder?: string;
    onChange?: (value: string | number | boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}
export default class Radio extends AbstractComponent<IRadioProps, {}> {
    getModifierObject(): IModifiers;
    onChange(e: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
