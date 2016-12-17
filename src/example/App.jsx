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
          <Block
            layout="horizontal"
            padding={{xsUp: '16 32', xsDown: '8 16'}}
            margin={{xsUp: '16 32', xsDown: '8 16'}}
            justify
            wrap
          >
            <Block
              layout="horizontal"
              padding="16"
              grid={{xsUp: 6, xsDown: 12}}
              spaceHorizontal="16"
            >
              <Button>ok</Button>
              <Button>ok</Button>
            </Block>
            <Block padding="16" grid={{xsUp: 6, xsDown: 12}}>
              <Button>ok</Button>
              <Button>ok</Button>
            </Block>
          </Block>
        </Block>
      </div>
    );
  }
}
