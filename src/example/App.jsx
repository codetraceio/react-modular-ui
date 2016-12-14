import React from 'react';
import Button from './../components/Button';
import Block from './../components/Block';
import '../../styles/dist/default/index.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Block layout={{xsUp: 'horizontal'}}>
          <h1>React Modular UI</h1>
          <Button>ok</Button>
        </Block>
      </div>
    );
  }
}
