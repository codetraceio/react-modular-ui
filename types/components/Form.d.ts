/// <reference types="react" />
import * as React from 'react';
import { default as AbstractComponent } from './AbstractComponent';
export interface IFormProps {
    action?: string;
    method?: string;
    target?: string;
    name?: string;
    onChange?: (name: string, value: string, event: React.ChangeEvent<HTMLFormElement>) => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
export default class Form extends AbstractComponent<IFormProps, {}> {
    onChange(event: React.ChangeEvent<HTMLFormElement>): void;
    render(): JSX.Element;
}
