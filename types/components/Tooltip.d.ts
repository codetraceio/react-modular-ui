/// <reference types="react" />
import * as React from 'react';
import AbstractComponent from './AbstractComponent';
export interface ITooltipProps {
    title: string | JSX.Element;
    prefer?: string;
    portal?: JSX.Element[];
    onChange?: (value: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}
export interface ITooltipState {
    show: boolean;
}
export default class Tooltip extends AbstractComponent<ITooltipProps, ITooltipState> {
    private wrapperElement;
    private tooltipElement;
    constructor();
    updateWrapper(element: HTMLElement): void;
    updateTooltip(element: HTMLElement): void;
    onUpdateTooltip(): void;
    onShowTooltip(): void;
    onHideTooltip(): void;
    render(): JSX.Element;
}
