import * as express from 'express';
import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';

import {settingService} from '../../index';
import BaseView from '../views/BaseView';
import AppView from '../views/AppView';

settingService.setBackend(true);

const app: express.Application = express();
app.use('/', express.static(`${__dirname}/../build`));
app.use('/', express.static(`${__dirname}/../../../styles/dist/default`));

const router = express.Router();
router.get('/', (req: express.Request, res: express.Response): express.Application => {
  res.end(`<!DOCTYPE html>${ReactDomServer.renderToStaticMarkup(
    <BaseView
      title="React Modular UI"
      styles="index.css"
      scripts="index.js"
    >
      <div className="app" />
    </BaseView>
  )}`);
  return this;
});

router.get('/static', (req: express.Request, res: express.Response): express.Application => {
  const portal: JSX.Element[] = [];
  const appView: string = ReactDomServer.renderToStaticMarkup(<AppView portal={portal} />);
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
  return this;
});

app.use(router);

app.listen(3000);
