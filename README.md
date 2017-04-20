# React Modular UI

Customizable React UI library which supports both front-end and back-end rendering.   

## Usage example (client side)
 
```
import React from 'react';
import {Button} from 'react-modular-ui/client';

class Example extends React.Component {
  render() {
    return (
      <Block layout="horizontal" justify="center">
        <Button color="primary">Sign up</Button>
        <Button>Sign in</Button>
      </Block>
    );
  }
}
```