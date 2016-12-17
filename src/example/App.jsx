import React from 'react';
import Button from './../components/Button';
import Block from './../components/Block';
import '../../styles/dist/default/index.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Block>
          <h1>React Modular UI</h1>
          <h2>Default buttons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8">
              <Button size="24">default</Button>
              <Button size="32">default</Button>
              <Button size="48">default</Button>
              <Button size="48" disabled>default</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8">
              <Button size="24" color="primary">primary</Button>
              <Button size="32" color="primary">primary</Button>
              <Button size="48" color="primary">primary</Button>
              <Button size="48" color="primary" disabled>primary</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8">
              <Button size="24" color="success">success</Button>
              <Button size="32" color="success">success</Button>
              <Button size="48" color="success">success</Button>
              <Button size="48" color="success" disabled>success</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8">
              <Button size="24" color="danger">danger</Button>
              <Button size="32" color="danger">danger</Button>
              <Button size="48" color="danger">danger</Button>
              <Button size="48" color="danger" disabled>danger</Button>
            </Block>
          </Block>
          <h2>Flat buttons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8">
              <Button size="24" view="flat">default</Button>
              <Button size="32" view="flat">default</Button>
              <Button size="48" view="flat">default</Button>
              <Button size="48" view="flat" disabled>default</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8">
              <Button size="24" color="primary" view="flat">primary</Button>
              <Button size="32" color="primary" view="flat">primary</Button>
              <Button size="48" color="primary" view="flat">primary</Button>
              <Button size="48" color="primary" view="flat" disabled>primary</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8">
              <Button size="24" color="success" view="flat">success</Button>
              <Button size="32" color="success" view="flat">success</Button>
              <Button size="48" color="success" view="flat">success</Button>
              <Button size="48" color="success" view="flat" disabled>success</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8">
              <Button size="24" color="danger" view="flat">danger</Button>
              <Button size="32" color="danger" view="flat">danger</Button>
              <Button size="48" color="danger" view="flat">danger</Button>
              <Button size="48" color="danger" view="flat" disabled>danger</Button>
            </Block>
          </Block>
        </Block>
      </div>
    );
  }
}
