import React from 'react';
import AbstractComponent from './../components/AbstractComponent';
import Button from './../components/Button';
import Block from './../components/Block';
import '../../styles/dist/default/index.css';

export default class App extends AbstractComponent {
  render() {
    return (
      <div className="app">
        <Block>
          <h1>React Modular UI</h1>
          <h2>Default buttons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24">default</Button>
              <Button size="32">default</Button>
              <Button size="48">default</Button>
              <Button size="48" disabled>default</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="primary">primary</Button>
              <Button size="32" color="primary">primary</Button>
              <Button size="48" color="primary">primary</Button>
              <Button size="48" color="primary" disabled>primary</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="success">success</Button>
              <Button size="32" color="success">success</Button>
              <Button size="48" color="success">success</Button>
              <Button size="48" color="success" disabled>success</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="danger">danger</Button>
              <Button size="32" color="danger">danger</Button>
              <Button size="48" color="danger">danger</Button>
              <Button size="48" color="danger" disabled>danger</Button>
            </Block>
            <div style={{backgroundColor:'#777777'}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                  <Button size="24" color="light">light</Button>
                  <Button size="32" color="light">light</Button>
                  <Button size="48" color="light">light</Button>
                  <Button size="48" color="light" disabled>light</Button>
              </Block>
            </div>
          </Block>
          <h2>Flat buttons</h2>
          <Block layout="horizontal" align="center" spaceHorizontal="8">
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" view="flat">default</Button>
              <Button size="32" view="flat">default</Button>
              <Button size="48" view="flat">default</Button>
              <Button size="48" view="flat" disabled>default</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="primary" view="flat">primary</Button>
              <Button size="32" color="primary" view="flat">primary</Button>
              <Button size="48" color="primary" view="flat">primary</Button>
              <Button size="48" color="primary" view="flat" disabled>primary</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="success" view="flat">success</Button>
              <Button size="32" color="success" view="flat">success</Button>
              <Button size="48" color="success" view="flat">success</Button>
              <Button size="48" color="success" view="flat" disabled>success</Button>
            </Block>
            <Block layout="vertical" align="center" spaceVertical="8" padding="8">
              <Button size="24" color="danger" view="flat">danger</Button>
              <Button size="32" color="danger" view="flat">danger</Button>
              <Button size="48" color="danger" view="flat">danger</Button>
              <Button size="48" color="danger" view="flat" disabled>danger</Button>
            </Block>
            <div style={{backgroundColor:'#777777'}}>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="light" view="flat">light</Button>
                <Button size="32" color="light" view="flat">light</Button>
                <Button size="48" color="light" view="flat">light</Button>
                <Button size="48" color="light" view="flat" disabled>light</Button>
              </Block>
            </div>
          </Block>
          <h2>Glass buttons</h2>
          <div style={{backgroundColor:'#777777'}}>
            <Block layout="horizontal" align="center" spaceHorizontal="8">
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" view="glass">default</Button>
                <Button size="32" view="glass">default</Button>
                <Button size="48" view="glass">default</Button>
                <Button size="48" view="glass" disabled>default</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="primary" view="glass">primary</Button>
                <Button size="32" color="primary" view="glass">primary</Button>
                <Button size="48" color="primary" view="glass">primary</Button>
                <Button size="48" color="primary" view="glass" disabled>primary</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="success" view="glass">success</Button>
                <Button size="32" color="success" view="glass">success</Button>
                <Button size="48" color="success" view="glass">success</Button>
                <Button size="48" color="success" view="glass" disabled>success</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="danger" view="glass">danger</Button>
                <Button size="32" color="danger" view="glass">danger</Button>
                <Button size="48" color="danger" view="glass">danger</Button>
                <Button size="48" color="danger" view="glass" disabled>danger</Button>
              </Block>
              <Block layout="vertical" align="center" spaceVertical="8" padding="8">
                <Button size="24" color="light" view="glass">light</Button>
                <Button size="32" color="light" view="glass">light</Button>
                <Button size="48" color="light" view="glass">light</Button>
                <Button size="48" color="light" view="glass" disabled>light</Button>
              </Block>
            </Block>
          </div>
        </Block>
      </div>
    );
  }
}
