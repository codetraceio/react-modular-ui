'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent2 = require('./../components/AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Button = require('./../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Block = require('./../components/Block');

var _Block2 = _interopRequireDefault(_Block);

var _Input = require('./../components/Input');

var _Input2 = _interopRequireDefault(_Input);

require('../../styles/dist/default/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_AbstractComponent) {
  _inherits(App, _AbstractComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          _Block2.default,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'React Modular UI'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Default buttons'
          ),
          _react2.default.createElement(
            _Block2.default,
            { layout: 'horizontal', align: 'center', spaceHorizontal: '8' },
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24' },
                'default'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32' },
                'default'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48' },
                'default'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', disabled: true },
                'default'
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24', color: 'primary' },
                'primary'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32', color: 'primary' },
                'primary'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'primary' },
                'primary'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'primary', disabled: true },
                'primary'
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24', color: 'success' },
                'success'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32', color: 'success' },
                'success'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'success' },
                'success'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'success', disabled: true },
                'success'
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24', color: 'danger' },
                'danger'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32', color: 'danger' },
                'danger'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'danger' },
                'danger'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'danger', disabled: true },
                'danger'
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { backgroundColor: '#777777' } },
              _react2.default.createElement(
                _Block2.default,
                { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
                _react2.default.createElement(
                  _Button2.default,
                  { size: '24', color: 'light' },
                  'light'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '32', color: 'light' },
                  'light'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'light' },
                  'light'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'light', disabled: true },
                  'light'
                )
              )
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Flat buttons'
          ),
          _react2.default.createElement(
            _Block2.default,
            { layout: 'horizontal', align: 'center', spaceHorizontal: '8' },
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24', view: 'flat' },
                'default'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32', view: 'flat' },
                'default'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', view: 'flat' },
                'default'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', view: 'flat', disabled: true },
                'default'
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24', color: 'primary', view: 'flat' },
                'primary'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32', color: 'primary', view: 'flat' },
                'primary'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'primary', view: 'flat' },
                'primary'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'primary', view: 'flat', disabled: true },
                'primary'
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24', color: 'success', view: 'flat' },
                'success'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32', color: 'success', view: 'flat' },
                'success'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'success', view: 'flat' },
                'success'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'success', view: 'flat', disabled: true },
                'success'
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24', color: 'danger', view: 'flat' },
                'danger'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32', color: 'danger', view: 'flat' },
                'danger'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'danger', view: 'flat' },
                'danger'
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'danger', view: 'flat', disabled: true },
                'danger'
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { backgroundColor: '#777777' } },
              _react2.default.createElement(
                _Block2.default,
                { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
                _react2.default.createElement(
                  _Button2.default,
                  { size: '24', color: 'light', view: 'flat' },
                  'light'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '32', color: 'light', view: 'flat' },
                  'light'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'light', view: 'flat' },
                  'light'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'light', view: 'flat', disabled: true },
                  'light'
                )
              )
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Glass buttons'
          ),
          _react2.default.createElement(
            'div',
            { style: { backgroundColor: '#777777' } },
            _react2.default.createElement(
              _Block2.default,
              { layout: 'horizontal', align: 'center', spaceHorizontal: '8' },
              _react2.default.createElement(
                _Block2.default,
                { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
                _react2.default.createElement(
                  _Button2.default,
                  { size: '24', view: 'glass' },
                  'default'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '32', view: 'glass' },
                  'default'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', view: 'glass' },
                  'default'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', view: 'glass', disabled: true },
                  'default'
                )
              ),
              _react2.default.createElement(
                _Block2.default,
                { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
                _react2.default.createElement(
                  _Button2.default,
                  { size: '24', color: 'primary', view: 'glass' },
                  'primary'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '32', color: 'primary', view: 'glass' },
                  'primary'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'primary', view: 'glass' },
                  'primary'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'primary', view: 'glass', disabled: true },
                  'primary'
                )
              ),
              _react2.default.createElement(
                _Block2.default,
                { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
                _react2.default.createElement(
                  _Button2.default,
                  { size: '24', color: 'success', view: 'glass' },
                  'success'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '32', color: 'success', view: 'glass' },
                  'success'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'success', view: 'glass' },
                  'success'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'success', view: 'glass', disabled: true },
                  'success'
                )
              ),
              _react2.default.createElement(
                _Block2.default,
                { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
                _react2.default.createElement(
                  _Button2.default,
                  { size: '24', color: 'danger', view: 'glass' },
                  'danger'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '32', color: 'danger', view: 'glass' },
                  'danger'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'danger', view: 'glass' },
                  'danger'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'danger', view: 'glass', disabled: true },
                  'danger'
                )
              ),
              _react2.default.createElement(
                _Block2.default,
                { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
                _react2.default.createElement(
                  _Button2.default,
                  { size: '24', color: 'light', view: 'glass' },
                  'light'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '32', color: 'light', view: 'glass' },
                  'light'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'light', view: 'glass' },
                  'light'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'light', view: 'glass', disabled: true },
                  'light'
                )
              )
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Inputs'
          ),
          _react2.default.createElement(
            _Block2.default,
            { spaceHorizontal: '8' },
            _react2.default.createElement(_Input2.default, { label: 'Login', placeholder: 'Enter your login' })
          )
        )
      );
    }
  }]);

  return App;
}(_AbstractComponent3.default);

exports.default = App;