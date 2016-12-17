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
          <Block layout="vertical" spaceVertical="8" align="center">
            <Button size="24">ok</Button>
            <Button size="32">ok</Button>
            <Button size="48">ok</Button>

            <Button size="24" color="primary">ok</Button>
            <Button size="32" color="primary">ok</Button>
            <Button size="48" color="primary">ok</Button>
          </Block>
        </Block>
      </div>
    );
  }
}
