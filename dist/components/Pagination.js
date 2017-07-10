"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var AbstractComponent_1 = require("./AbstractComponent");
var Icon_1 = require("./Icon");
var Pagination = (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            color: this.props.color
        };
    };
    Pagination.prototype.getSize = function () {
        return this.props.size || 24;
    };
    Pagination.prototype.getInfo = function () {
        var count = parseInt(this.props.count) || 0;
        var limit = parseInt(this.props.limit) || 10;
        if (count <= limit) {
            return null;
        }
        var offset = parseInt(this.props.offset) || 0;
        if (offset < 0) {
            offset = 0;
        }
        if (offset > count - 2) {
            offset = count - 2;
        }
        var page = Math.ceil(offset / limit) + 1;
        var lastPage = Math.ceil(count / limit) || 1;
        var startPage = page - 2;
        if (startPage < 1) {
            startPage = 1;
        }
        var endPage = page + 2;
        if (endPage > lastPage) {
            endPage = lastPage;
        }
        var pages = [];
        pages.push(1);
        for (var i = startPage; i <= endPage; i++) {
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
    };
    Pagination.prototype.onChange = function (page) {
        var offset = (page - 1) * this.props.limit;
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(offset, page);
        }
    };
    Pagination.prototype.renderPrev = function (page) {
        var _this = this;
        return (react_1.default.createElement("div", { className: this.getElementName('pagination', 'prev', {
                disabled: page === 1
            }), onClick: function () { return _this.onChange(page - 1); } },
            react_1.default.createElement(Icon_1.default, { height: this.getSize(), name: "pagination" })));
    };
    Pagination.prototype.renderNext = function (page, lastPage) {
        var _this = this;
        return (react_1.default.createElement("div", { className: this.getElementName('pagination', 'next', {
                disabled: page === lastPage
            }), onClick: function () { return _this.onChange(page + 1); } },
            react_1.default.createElement(Icon_1.default, { height: this.getSize(), name: "pagination", rotate: "180" })));
    };
    Pagination.prototype.renderPages = function (pages, currentPage) {
        var _this = this;
        var prevPage = 0;
        var result = [];
        pages.forEach(function (page, index) {
            var afterEllipsis = false;
            if (page !== (prevPage + 1)) {
                result.push(react_1.default.createElement("div", { className: _this.getElementName('pagination', 'ellipsis'), key: 'ellipsis.' + page }, "\u2026"));
                afterEllipsis = true;
            }
            if (!(index === pages.length - 1 && afterEllipsis && _this.props.hideLastPage)) {
                var characterLength = page.toString().length;
                var characters = 'single';
                if (characterLength === 2) {
                    characters = 'double';
                }
                if (characterLength > 2) {
                    characters = 'multiple';
                }
                result.push(react_1.default.createElement("div", { key: page, className: _this.getElementName('pagination', 'item', {
                        current: page === currentPage,
                        characters: characters
                    }), onClick: function () { return _this.onChange(page); } }, page));
            }
            prevPage = page;
        });
        return result;
    };
    Pagination.prototype.render = function () {
        var info = this.getInfo();
        if (!info) {
            return null;
        }
        return (react_1.default.createElement("div", { className: this.getBlockName('pagination', this.getModifierObject()) },
            this.renderPrev(info.page),
            this.renderPages(info.pages, info.page),
            this.renderNext(info.page, info.lastPage)));
    };
    return Pagination;
}(AbstractComponent_1.default));
exports.default = Pagination;
