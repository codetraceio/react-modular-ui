# React Modular UI

Customizable Isomorphic React UI library.   

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
import {Button} from 'react-modular-ui';

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

## Preact support

You can use `preact-modular-ui` package in case you are using preact.

```
npm install preact-modular-ui --save
```

or

```
yarn add preact-modular-ui
```

# Development

## Set up

```
npm install
```

## Run

Build:

```
gulp
```

Start server:

```
npm start
```

Client side rendering example: http://localhost:3000
Server side rendering example: http://localhost:3000/static

## Test

```
npm run test-dev
```
