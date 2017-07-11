"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const React = require("react");
const ReactDomServer = require("react-dom/server");
const index_1 = require("../../index");
const BaseView_1 = require("../views/BaseView");
const AppView_1 = require("../views/AppView");
index_1.settings.setBackend(true);
const app = express();
app.use('/', express.static(`${__dirname}/../build`));
app.use('/', express.static(`${__dirname}/../../../styles/dist/default`));
const router = express.Router();
router.get('/', (req, res) => {
    res.end(`<!DOCTYPE html>${ReactDomServer.renderToStaticMarkup(React.createElement(BaseView_1.default, { title: "React Modular UI", styles: "index.css", scripts: "index.js" },
        React.createElement("div", { className: "app" })))}`);
    return this;
});
router.get('/static', (req, res) => {
    const portal = [];
    const appView = ReactDomServer.renderToStaticMarkup(React.createElement(AppView_1.default, { portal: portal }));
    res.end(`<!DOCTYPE html>${ReactDomServer.renderToStaticMarkup(React.createElement(BaseView_1.default, { title: "React Modular UI", styles: "index.css", scripts: "static.js", html: appView }, portal))}`);
    return this;
});
app.use(router);
app.listen(3000);
