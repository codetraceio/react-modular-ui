/// <reference types="react" />
import * as React from 'react';
import { ITabsOption } from '../../components/Tabs';
export interface IAppViewProps {
    portal?: JSX.Element[];
}
export interface IAppViewState {
    tabValue: string;
    inputValue: string;
    checked: boolean;
    selected: string;
    showModal: boolean;
    count: number;
    offset: number;
    limit: number;
}
export default class App extends React.Component<IAppViewProps, IAppViewState> {
    constructor();
    getTabOptions(): ITabsOption[];
    onChangeTab(value: string): void;
    onChangeInput(value: string): void;
    onToggleChecked(value: boolean): void;
    onChangeSelected(value: string): void;
    onToggleModal(): void;
    onChangeOffset(offset: number): void;
    render(): JSX.Element;
}
