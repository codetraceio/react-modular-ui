import React from 'react';
import Button from './../components/Button';
import '../../styles/dist/default/index.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>React Ghost UI</h1>
        <Button>ok</Button>
      </div>
    );
  }
}
