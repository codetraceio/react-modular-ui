'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent2 = require('./AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_AbstractComponent) {
  _inherits(Pagination, _AbstractComponent);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'getModifierObject',
    value: function getModifierObject() {
      return {
        size: this.props.size,
        color: this.props.color
      };
    }
  }, {
    key: 'getInfo',
    value: function getInfo() {
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
    }
  }, {
    key: 'renderPrev',
    value: function renderPrev(page) {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          className: this.getElementClassName('pagination', 'prev', {
            disabled: page === 1
          }),
          onClick: function onClick() {
            return _this2.onChange(page - 1);
          }
        },
        _react2.default.createElement(_Icon2.default, { name: 'prev' })
      );
    }
  }, {
    key: 'renderNext',
    value: function renderNext(page, lastPage) {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        {
          className: this.getElementClassName('pagination', 'next', {
            disabled: page === lastPage
          }),
          onClick: function onClick() {
            return _this3.onChange(page - 1);
          }
        },
        _react2.default.createElement(_Icon2.default, { name: 'next' })
      );
    }
  }, {
    key: 'renderPages',
    value: function renderPages(pages, currentPage) {
      var _this4 = this;

      var prevPage = 0;
      var result = [];
      pages.forEach(function (page, index) {
        var afterEllipsis = false;
        if (page !== prevPage + 1) {
          result.push(_react2.default.createElement('div', { className: 'ellipsis', key: 'ellipsis.' + page }));
          afterEllipsis = true;
        }

        if (!(index === pages.length - 1 && afterEllipsis && _this4.props.hideLastPage)) {
          result.push(_react2.default.createElement(
            'div',
            {
              key: page,
              className: _this4.getElementClassName('pagination', 'item', {
                current: page === currentPage,
                characters: page.toString().length
              }),
              onClick: function onClick() {
                return _this4.onChange(page);
              }
            },
            page
          ));
        }
        prevPage = page;
      });
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var info = this.getInfo();
      return _react2.default.createElement(
        'div',
        {
          className: this.getBlockName('pagination', this.getModifierObject())
        },
        this.renderPrev(info.page),
        this.renderPages(info.pages, info.page),
        this.renderNext(info.page, info.lastPage)
      );
    }
  }]);

  return Pagination;
}(_AbstractComponent3.default);

exports.default = Pagination;