/// <reference types="react" />
import { default as AbstractComponent, IModifiers } from './AbstractComponent';
export interface IPaginationProps {
    size?: string | number;
    color?: string;
    count?: string | number;
    limit?: string | number;
    offset?: string | number;
    hideLastPage?: boolean;
    onChange?: (offset: number, page: number) => void;
}
export interface IPaginationInfo {
    count: number;
    limit: number;
    offset: number;
    page: number;
    lastPage: number;
    pages: number[];
}
export default class Pagination extends AbstractComponent<IPaginationProps, {}> {
    getModifierObject(): IModifiers;
    getLimit(): number;
    getSize(): number;
    getInfo(): IPaginationInfo;
    onChange(page: number): void;
    renderPrev(page: number): JSX.Element;
    renderNext(page: number, lastPage: number): JSX.Element;
    renderPages(pages: number[], currentPage: number): JSX.Element[];
    render(): JSX.Element;
}
