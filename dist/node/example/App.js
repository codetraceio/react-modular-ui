'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent = require('./../components/AbstractComponent');

var _AbstractComponent2 = _interopRequireDefault(_AbstractComponent);

var _Button = require('./../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Block = require('./../components/Block');

var _Block2 = _interopRequireDefault(_Block);

var _Input = require('./../components/Input');

var _Input2 = _interopRequireDefault(_Input);

require('../../styles/dist/default/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _AbstractComponent2.default {
  render() {
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
}
exports.default = App;
module.exports = exports['default'];