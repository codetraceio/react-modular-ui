/// <reference types="react" />
import * as React from 'react';
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface ITextAreaProps {
    size?: string | number;
    view?: string;
    color?: string;
    disabled?: boolean;
    height?: string | number;
    label?: string;
    name?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onKeyUp?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onKeyPress?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onFocus?: (value: string, event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (value: string, event: React.FocusEvent<HTMLTextAreaElement>) => void;
}
export default class TextArea extends AbstractComponent<ITextAreaProps, {}> {
    getModifierObject(): IModifiers;
    getStyle(): React.CSSProperties;
    onEvent(event: React.SyntheticEvent<HTMLTextAreaElement>, callback: (value: string, event: React.SyntheticEvent<HTMLTextAreaElement>) => void): void;
    renderLabel(): JSX.Element;
    render(): JSX.Element;
}
