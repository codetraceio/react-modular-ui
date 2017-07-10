/// <reference types="react" />
import * as React from 'react';
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface IUploadProps {
    size?: string | number;
    color?: string;
    disabled?: boolean;
    checked?: boolean;
    name?: string;
    onChange: (files: FileList) => void;
}
export interface IUploadState {
    active: boolean;
}
export default class Upload extends AbstractComponent<IUploadProps, IUploadState> {
    private element;
    private fileElement;
    private onDragOverListener;
    private onDragLeaveListener;
    private onDropListener;
    constructor();
    getModifierObject(): IModifiers;
    updateElement(element: HTMLDivElement): void;
    updateFileElement(element: HTMLInputElement): void;
    onDragOver(event: React.DragEvent<HTMLDivElement>): void;
    onDragLeave(): void;
    onDrop(event: React.DragEvent<HTMLDivElement>): void;
    onClick(): void;
    onChange(): void;
    render(): JSX.Element;
}
