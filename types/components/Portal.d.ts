/// <reference types="react" />
import AbstractComponent from './AbstractComponent';
export interface IPortalProps {
    portal?: JSX.Element[];
    portalKey?: string;
    show: boolean;
}
export default class Portal extends AbstractComponent<IPortalProps, {}> {
    private portalElement;
    constructor();
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    addPortalElement(): void;
    updatePortal(): void;
    removePortalElement(): void;
    render(): null;
}
