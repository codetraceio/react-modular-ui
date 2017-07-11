/// <reference types="react" />
import * as React from 'react';
import AbstractComponent from './AbstractComponent';
export interface IModalProps {
    show?: boolean;
    portal?: JSX.Element[];
    name?: string;
    onClose?: () => void;
}
export default class Modal extends AbstractComponent<IModalProps, {}> {
    onClose(): void;
    onClickContent(event: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
