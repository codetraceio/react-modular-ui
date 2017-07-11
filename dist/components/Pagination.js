"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
const Icon_1 = require("./Icon");
class Pagination extends AbstractComponent_1.default {
    getModifierObject() {
        return {
            size: this.props.size,
            color: this.props.color
        };
    }
    getLimit() {
        if (typeof this.props.limit === 'string' || typeof this.props.limit === 'number') {
            return parseInt(this.props.limit.toString(), 10);
        }
        return 10;
    }
    getSize() {
        if (typeof this.props.size === 'string' || typeof this.props.size === 'number') {
            return parseInt(this.props.size.toString(), 10);
        }
        return 24;
    }
    getCount() {
        if (typeof this.props.count === 'string' || typeof this.props.count === 'number') {
            return parseInt(this.props.count.toString(), 10);
        }
        return 0;
    }
    getOffset() {
        if (typeof this.props.offset === 'string' || typeof this.props.offset === 'number') {
            return parseInt(this.props.offset.toString(), 10);
        }
        return 0;
    }
    getInfo() {
        const count = this.getCount();
        const limit = this.getLimit();
        if (count <= limit) {
            return null;
        }
        let offset = this.getOffset();
        if (offset < 0) {
            offset = 0;
        }
        if (offset > count - 2) {
            offset = count - 2;
        }
        const page = Math.ceil(offset / limit) + 1;
        const lastPage = Math.ceil(count / limit) || 1;
        let startPage = page - 2;
        if (startPage < 1) {
            startPage = 1;
        }
        let endPage = page + 2;
        if (endPage > lastPage) {
            endPage = lastPage;
        }
        let pages = [];
        pages.push(1);
        for (let i = startPage; i <= endPage; i++) {
            if (i !== 1 && i !== lastPage) {
                pages.push(i);
            }
        }
        if (lastPage !== 1) {
            pages.push(lastPage);
        }
        return {
            count: count,
            limit: limit,
            offset: offset,
            page: page,
            lastPage: lastPage,
            pages: pages
        };
    }
    onChange(page) {
        const offset = (page - 1) * this.getLimit();
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(offset, page);
        }
    }
    renderPrev(page) {
        return (React.createElement("div", { className: this.getElementName('pagination', 'prev', {
                disabled: page === 1
            }), onClick: () => this.onChange(page - 1) },
            React.createElement(Icon_1.default, { height: this.getSize(), name: "pagination" })));
    }
    renderNext(page, lastPage) {
        return (React.createElement("div", { className: this.getElementName('pagination', 'next', {
                disabled: page === lastPage
            }), onClick: () => this.onChange(page + 1) },
            React.createElement(Icon_1.default, { height: this.getSize(), name: "pagination", rotate: "180" })));
    }
    renderPages(pages, currentPage) {
        let prevPage = 0;
        const result = [];
        pages.forEach((page, index) => {
            let afterEllipsis = false;
            if (page !== (prevPage + 1)) {
                result.push(React.createElement("div", { className: this.getElementName('pagination', 'ellipsis'), key: 'ellipsis.' + page }, "\u2026"));
                afterEllipsis = true;
            }
            if (!(index === pages.length - 1 && afterEllipsis && this.props.hideLastPage)) {
                const characterLength = page.toString().length;
                let characters = 'single';
                if (characterLength === 2) {
                    characters = 'double';
                }
                if (characterLength > 2) {
                    characters = 'multiple';
                }
                result.push(React.createElement("div", { key: page, className: this.getElementName('pagination', 'item', {
                        current: page === currentPage,
                        characters: characters
                    }), onClick: () => this.onChange(page) }, page));
            }
            prevPage = page;
        });
        return result;
    }
    render() {
        const info = this.getInfo();
        if (!info) {
            return null;
        }
        return (React.createElement("div", { className: this.getBlockName('pagination', this.getModifierObject()) },
            this.renderPrev(info.page),
            this.renderPages(info.pages, info.page),
            this.renderNext(info.page, info.lastPage)));
    }
}
exports.default = Pagination;
