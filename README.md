# react-outer

[![npm version](https://img.shields.io/npm/v/react-outer.svg?style=flat-square)](https://www.npmjs.com/package/react-outer)

## Installation

```sh
yarn add react-outer
```

## Api

### Properties

```js
Outer.propTypes = {
  tag: PropTypes.oneOfType([ // default Fragment
    PropTypes.string,
    PropTypes.symbol,
    PropTypes.element,
  ]),
  isOpen: PropTypes.bool, // default true
  children: PropTypes.node,
  onClickOutside: PropTypes.func.isRequired,
};
```

## Example

```js
import React, { PureComponent } from 'react';
import Outer from 'react-outer';
import Wrapper from '../Wrapper';

class Example extends PureComponent {
  handleOuter(e) {
    // ...
  }
  
  render() {
    return (
      <Outer
        tag={Wrapper}
        onClickOutside={this.handleOuter}
      >
        items...
      </Outer>
    );
  }
}

export default Example;
``` 

## License

MIT
