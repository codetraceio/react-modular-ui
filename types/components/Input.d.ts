/// <reference types="react" />
import * as React from 'react';
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface IInputProps {
    size?: string | number;
    view?: string;
    color?: string;
    disabled?: boolean;
    name?: string;
    label?: string;
    value?: string;
    placeholder?: string;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyPress?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
    onFocus?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
}
export default class Input extends AbstractComponent<IInputProps, {}> {
    getModifierObject(): IModifiers;
    onEvent(event: React.SyntheticEvent<HTMLInputElement>, callback: (value: string, event: React.SyntheticEvent<HTMLInputElement>) => void): void;
    renderLabel(): JSX.Element;
    render(): JSX.Element;
}
