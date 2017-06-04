'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _index = require('../../index');

var _BaseView = require('../views/BaseView');

var _BaseView2 = _interopRequireDefault(_BaseView);

var _AppView = require('../views/AppView');

var _AppView2 = _interopRequireDefault(_AppView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index.settings.setBackend(true);

var app = (0, _express2.default)();
app.use('/', _express2.default.static(__dirname + '/../client'));
app.use('/', _express2.default.static(__dirname + '/../../../styles/dist/default'));

app.get('/', function (req, res) {
  res.end('<!DOCTYPE html>' + _server2.default.renderToStaticMarkup(_react2.default.createElement(
    _BaseView2.default,
    {
      title: 'React Modular UI',
      styles: 'index.css',
      scripts: 'index.js'
    },
    _react2.default.createElement('div', { className: 'app' })
  )));
});

app.get('/static', function (req, res) {
  var portal = [];
  var appView = _server2.default.renderToStaticMarkup(_react2.default.createElement(_AppView2.default, { portal: portal }));
  res.end('<!DOCTYPE html>' + _server2.default.renderToStaticMarkup(_react2.default.createElement(
    _BaseView2.default,
    {
      title: 'React Modular UI',
      styles: 'index.css',
      scripts: 'static.js',
      html: appView
    },
    portal
  )));
});

app.listen(3000);