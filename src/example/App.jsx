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
          <Block layout={{xsUp: 'horizontal', xsDown: 'vertical'}}>
            <Button>ok</Button>
            <Button>ok</Button>
          </Block>
        </Block>
      </div>
    );
  }
}
