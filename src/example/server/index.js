import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';

import {settings} from '../../index';
import BaseView from '../views/BaseView';
import AppView from '../views/AppView';

settings.setBackend(true);

const app = express();
app.use('/', express.static(`${__dirname}/../client`));
app.use('/', express.static(`${__dirname}/../../../styles/dist/default`));

app.get('/', (req, res) => {
  res.end(`<!DOCTYPE html>${ReactDomServer.renderToStaticMarkup(
    <BaseView
      title="React Modular UI"
      styles="index.css"
      scripts="index.js"
    >
      <div className="app" />
    </BaseView>
  )}`);
});

app.get('/static', (req, res) => {
  const portal = [];
  const appView = ReactDomServer.renderToStaticMarkup(<AppView portal={portal} />);
  res.end(`<!DOCTYPE html>${ReactDomServer.renderToStaticMarkup(
    <BaseView
      title="React Modular UI"
      styles="index.css"
      scripts="static.js"
      html={appView}
    >
      {portal}
    </BaseView>
  )}`);
});

app.listen(3000);
