[![Stories in Ready](https://badge.waffle.io/codetraceio/react-modular-ui.png?label=ready&title=Ready)](https://waffle.io/codetraceio/react-modular-ui)
# React Modular UI

Customizable React UI library which supports both front-end and back-end rendering.   

[![Coverage Status](https://coveralls.io/repos/github/codetraceio/react-modular-ui/badge.svg?branch=master)](https://coveralls.io/github/codetraceio/react-modular-ui?branch=master)
[![Stories in Ready](https://img.shields.io/waffle/label/codetraceio/react-modular-ui.svg)](https://waffle.io/codetraceio/react-modular-ui)

## Installation

```
npm install react-modular-ui --save
```

or

```
yarn add react-modular-ui
```

## Example
 
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

# Development

## Set up

```
npm install
```

## Run

```
npm start
```

## Test

```
npm run test-dev
```
