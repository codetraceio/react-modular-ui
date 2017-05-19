'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Block = require('../../components/Block');

var _Block2 = _interopRequireDefault(_Block);

var _Checkbox = require('../../components/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Input = require('../../components/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('../../components/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Loading = require('../../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Pill = require('../../components/Pill');

var _Pill2 = _interopRequireDefault(_Pill);

var _Tabs = require('../../components/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Textarea = require('../../components/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Toggle = require('../../components/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _Tooltip = require('../../components/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Progress = require('../../components/Progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _Upload = require('../../components/Upload');

var _Upload2 = _interopRequireDefault(_Upload);

var _settings = require('../../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_settings2.default.setIcons({
  github: _react2.default.createElement(
    'svg',
    { height: '24', width: '24', viewBox: '0 0 16 16' },
    _react2.default.createElement('path', { d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z' })
  ),
  checkbox: _react2.default.createElement(
    'svg',
    { height: '24', width: '24', viewBox: '0 0 24 24' },
    _react2.default.createElement('path', { d: 'M20.785 5.745l-2.346-1.85c-.074-.06-.164-.103-.266-.103-.103 0-.197.043-.27.107L9.37 14.865s-3.356-3.227-3.45-3.32c-.094-.095-.218-.253-.406-.253-.188 0-.273.132-.37.23-.074.077-1.27 1.334-1.86 1.958-.035.04-.056.06-.086.09-.05.073-.085.155-.085.244 0 .094.034.17.085.244l.12.11s5.953 5.72 6.05 5.818c.1.098.22.222.395.222.17 0 .312-.184.393-.265L20.802 6.267c.05-.073.085-.154.085-.248 0-.108-.042-.198-.102-.275z' })
  )
});

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      tabValue: 'profile',
      inputValue: '',
      checked: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onToggleChecked',
    value: function onToggleChecked(value) {
      this.setState({
        checked: value
      });
    }
  }, {
    key: 'getTabOptions',
    value: function getTabOptions() {
      return [{
        title: 'Profile',
        value: 'profile'
      }, {
        title: 'Followers',
        value: 'followers',
        count: 151,
        countColor: 'primary'
      }, {
        title: 'Following',
        value: 'following',
        count: 1
      }];
    }
  }, {
    key: 'onChangeTab',
    value: function onChangeTab(value) {
      this.setState({
        tabValue: value
      });
    }
  }, {
    key: 'onChangeInput',
    value: function onChangeInput(value) {
      this.setState({
        inputValue: value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          _Block2.default,
          {
            padding: {
              xsUp: '64 0',
              xsDown: '32 0'
            }
          },
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
                { size: '24', onClick: this.onClick },
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
            'Icons'
          ),
          _react2.default.createElement(
            _Block2.default,
            { layout: 'horizontal', align: 'center', spaceHorizontal: '8' },
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '24' }),
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '32' }),
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '48' })
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '24', color: 'primary' }),
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '32', color: 'primary' }),
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '48', color: 'primary' })
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '24', color: 'success' }),
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '32', color: 'success' }),
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '48', color: 'success' })
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '24', color: 'danger' }),
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '32', color: 'danger' }),
              _react2.default.createElement(_Icon2.default, { name: 'github', size: '48', color: 'danger' })
            ),
            _react2.default.createElement(
              'div',
              { style: { backgroundColor: '#777777' } },
              _react2.default.createElement(
                _Block2.default,
                { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '24', color: 'light' }),
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '32', color: 'light' }),
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '48', color: 'light' })
              )
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Buttons with icons'
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
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '16', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'default'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '24', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'default'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '32', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'default'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', disabled: true },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '32', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'default'
                )
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24', color: 'primary' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '16', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'primary'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32', color: 'primary' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '24', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'primary'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'primary' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '32', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'primary'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'primary', disabled: true },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '32', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'primary'
                )
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24', color: 'success' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '16', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'success'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32', color: 'success' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '24', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'success'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'success' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '32', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'success'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'success', disabled: true },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '32', color: 'light' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'success'
                )
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Button2.default,
                { size: '24', color: 'danger' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '16' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'danger'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '32', color: 'danger' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '24' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'danger'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'danger' },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '32' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'danger'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { size: '48', color: 'danger', disabled: true },
                _react2.default.createElement(_Icon2.default, { name: 'github', size: '32' }),
                _react2.default.createElement(
                  'div',
                  null,
                  'danger'
                )
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
                  _react2.default.createElement(_Icon2.default, { name: 'github', size: '16' }),
                  _react2.default.createElement(
                    'div',
                    null,
                    'light'
                  )
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '32', color: 'light' },
                  _react2.default.createElement(_Icon2.default, { name: 'github', size: '24' }),
                  _react2.default.createElement(
                    'div',
                    null,
                    'light'
                  )
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'light' },
                  _react2.default.createElement(_Icon2.default, { name: 'github', size: '32' }),
                  _react2.default.createElement(
                    'div',
                    null,
                    'light'
                  )
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { size: '48', color: 'light', disabled: true },
                  _react2.default.createElement(_Icon2.default, { name: 'github', size: '32' }),
                  _react2.default.createElement(
                    'div',
                    null,
                    'light'
                  )
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
            { spaceVertical: '8' },
            _react2.default.createElement(_Input2.default, {
              size: '24',
              label: 'Login',
              placeholder: 'Enter your login',
              value: this.state.inputValue,
              onChange: function onChange(value) {
                return _this2.onChangeInput(value);
              }
            }),
            _react2.default.createElement(_Input2.default, {
              size: '32',
              label: 'Login',
              placeholder: 'Enter your login',
              value: this.state.inputValue,
              onChange: function onChange(value) {
                return _this2.onChangeInput(value);
              }
            }),
            _react2.default.createElement(_Input2.default, {
              size: '48',
              label: 'Login',
              placeholder: 'Enter your login',
              value: this.state.inputValue,
              onChange: function onChange(value) {
                return _this2.onChangeInput(value);
              }
            })
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Loading'
          ),
          _react2.default.createElement(
            _Block2.default,
            { layout: 'horizontal', align: 'center', spaceHorizontal: '8' },
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(_Loading2.default, { size: '16' }),
              _react2.default.createElement(_Loading2.default, { size: '24' }),
              _react2.default.createElement(_Loading2.default, { size: '32' }),
              _react2.default.createElement(_Loading2.default, { size: '48' })
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(_Loading2.default, { size: '16', color: 'primary' }),
              _react2.default.createElement(_Loading2.default, { size: '24', color: 'primary' }),
              _react2.default.createElement(_Loading2.default, { size: '32', color: 'primary' }),
              _react2.default.createElement(_Loading2.default, { size: '48', color: 'primary' })
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(_Loading2.default, { size: '16', color: 'success' }),
              _react2.default.createElement(_Loading2.default, { size: '24', color: 'success' }),
              _react2.default.createElement(_Loading2.default, { size: '32', color: 'success' }),
              _react2.default.createElement(_Loading2.default, { size: '48', color: 'success' })
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(_Loading2.default, { size: '16', color: 'danger' }),
              _react2.default.createElement(_Loading2.default, { size: '24', color: 'danger' }),
              _react2.default.createElement(_Loading2.default, { size: '32', color: 'danger' }),
              _react2.default.createElement(_Loading2.default, { size: '48', color: 'danger' })
            ),
            _react2.default.createElement(
              'div',
              { style: { backgroundColor: '#777777' } },
              _react2.default.createElement(
                _Block2.default,
                { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
                _react2.default.createElement(_Loading2.default, { size: '16', color: 'light' }),
                _react2.default.createElement(_Loading2.default, { size: '24', color: 'light' }),
                _react2.default.createElement(_Loading2.default, { size: '32', color: 'light' }),
                _react2.default.createElement(_Loading2.default, { size: '48', color: 'light' })
              )
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Tabs'
          ),
          _react2.default.createElement(_Tabs2.default, {
            size: '24',
            options: this.getTabOptions(),
            value: this.state.tabValue,
            onChange: function onChange(value) {
              return _this2.onChangeTab(value);
            }
          }),
          _react2.default.createElement(_Tabs2.default, {
            size: '32',
            options: this.getTabOptions(),
            value: this.state.tabValue,
            onChange: function onChange(value) {
              return _this2.onChangeTab(value);
            }
          }),
          _react2.default.createElement(_Tabs2.default, {
            size: '48',
            options: this.getTabOptions(),
            value: this.state.tabValue,
            onChange: function onChange(value) {
              return _this2.onChangeTab(value);
            }
          }),
          _react2.default.createElement(
            'h2',
            null,
            'Pills'
          ),
          _react2.default.createElement(
            _Block2.default,
            { layout: 'horizontal', align: 'center', spaceHorizontal: '8' },
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Pill2.default,
                { size: '24' },
                'default'
              ),
              _react2.default.createElement(
                _Pill2.default,
                { size: '32' },
                'default'
              ),
              _react2.default.createElement(
                _Pill2.default,
                { size: '48' },
                'default'
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Pill2.default,
                { size: '24', color: 'primary' },
                'primary'
              ),
              _react2.default.createElement(
                _Pill2.default,
                { size: '32', color: 'primary' },
                'primary'
              ),
              _react2.default.createElement(
                _Pill2.default,
                { size: '48', color: 'primary' },
                'primary'
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Pill2.default,
                { size: '24', color: 'success' },
                'success'
              ),
              _react2.default.createElement(
                _Pill2.default,
                { size: '32', color: 'success' },
                'success'
              ),
              _react2.default.createElement(
                _Pill2.default,
                { size: '48', color: 'success' },
                'success'
              )
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'vertical', align: 'center', spaceVertical: '8', padding: '8' },
              _react2.default.createElement(
                _Pill2.default,
                { size: '24', color: 'danger' },
                'danger'
              ),
              _react2.default.createElement(
                _Pill2.default,
                { size: '32', color: 'danger' },
                'danger'
              ),
              _react2.default.createElement(
                _Pill2.default,
                { size: '48', color: 'danger' },
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
                  _Pill2.default,
                  { size: '24', color: 'light' },
                  'light'
                ),
                _react2.default.createElement(
                  _Pill2.default,
                  { size: '32', color: 'light' },
                  'light'
                ),
                _react2.default.createElement(
                  _Pill2.default,
                  { size: '48', color: 'light' },
                  'light'
                )
              )
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Progress'
          ),
          _react2.default.createElement(
            _Block2.default,
            { spaceVertical: '8', padding: '8' },
            _react2.default.createElement(_Progress2.default, { size: '4', value: '40' }),
            _react2.default.createElement(_Progress2.default, { size: '4', color: 'primary', value: '40' }),
            _react2.default.createElement(_Progress2.default, { size: '4', color: 'success', value: '40' }),
            _react2.default.createElement(_Progress2.default, { size: '4', color: 'danger', value: '40' })
          ),
          _react2.default.createElement(
            'div',
            { style: { backgroundColor: '#777777' } },
            _react2.default.createElement(
              _Block2.default,
              { spaceVertical: '8', padding: '8' },
              _react2.default.createElement(_Progress2.default, { size: '4', color: 'light', value: '40' })
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Checkbox'
          ),
          _react2.default.createElement(
            _Block2.default,
            { layout: 'vertical', spaceVertical: '8', align: 'start' },
            _react2.default.createElement(
              _Checkbox2.default,
              { size: '16', checked: this.state.checked, onChange: function onChange(value) {
                  return _this2.onToggleChecked(value);
                } },
              'checkbox'
            ),
            _react2.default.createElement(
              _Checkbox2.default,
              { size: '24', checked: this.state.checked, onChange: function onChange(value) {
                  return _this2.onToggleChecked(value);
                } },
              'checkbox'
            ),
            _react2.default.createElement(
              _Checkbox2.default,
              { size: '32', checked: this.state.checked, onChange: function onChange(value) {
                  return _this2.onToggleChecked(value);
                } },
              'checkbox'
            ),
            _react2.default.createElement(
              _Checkbox2.default,
              { size: '32', checked: this.state.checked, onChange: function onChange(value) {
                  return _this2.onToggleChecked(value);
                }, disabled: true },
              'checkbox'
            )
          ),
          _react2.default.createElement(
            _Block2.default,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Tooltip'
            ),
            _react2.default.createElement(
              _Block2.default,
              { layout: 'horizontal', padding: '   0', spaceHorizontal: '16' },
              _react2.default.createElement(
                _Tooltip2.default,
                { title: 'Help' },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  'Help'
                )
              ),
              _react2.default.createElement(
                _Tooltip2.default,
                { title: 'Help' },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  'Help'
                )
              ),
              _react2.default.createElement(
                _Tooltip2.default,
                { title: 'Help' },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  'Help'
                )
              ),
              _react2.default.createElement(
                _Tooltip2.default,
                { title: 'Help' },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  'Help'
                )
              ),
              _react2.default.createElement(
                _Tooltip2.default,
                { title: 'Help' },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  'Help'
                )
              ),
              _react2.default.createElement(
                _Tooltip2.default,
                { title: 'Help' },
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  'Help'
                )
              )
            )
          ),
          _react2.default.createElement(
            _Block2.default,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Upload'
            ),
            _react2.default.createElement(
              _Upload2.default,
              null,
              'Drug file here to upload'
            )
          ),
          _react2.default.createElement(
            _Block2.default,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Textarea'
            ),
            _react2.default.createElement(_Textarea2.default, { label: 'Something' })
          )
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Toggle'
        ),
        _react2.default.createElement(
          _Block2.default,
          { layout: 'vertical', spaceVertical: '8', align: 'start' },
          _react2.default.createElement(
            _Toggle2.default,
            { size: '24', checked: this.state.checked, onChange: function onChange(value) {
                return _this2.onToggleChecked(value);
              } },
            'toggle'
          ),
          _react2.default.createElement(
            _Toggle2.default,
            { size: '32', checked: this.state.checked, onChange: function onChange(value) {
                return _this2.onToggleChecked(value);
              } },
            'toggle'
          ),
          _react2.default.createElement(
            _Toggle2.default,
            { size: '32', checked: this.state.checked, disabled: true, onChange: function onChange(value) {
                return _this2.onToggleChecked(value);
              } },
            'toggle'
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;