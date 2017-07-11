/// <reference types="react" />
import * as React from 'react';
export interface IBaseViewProps {
    styles?: string;
    scripts?: string;
    title?: string;
    html?: string;
}
export default class BaseView extends React.Component<IBaseViewProps, {}> {
    renderStyle(): JSX.Element;
    renderScript(): JSX.Element;
    render(): JSX.Element;
}
