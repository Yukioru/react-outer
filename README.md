# react-outer
React component for handling outside clicks. Inspired by [reactstrap](https://github.com/reactstrap/reactstrap). 

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
import React, { Component } from 'react';
import Outside from 'react-outer';

export default class CustomDropdown extends Component {
    
  constructor(props) {
    super(props);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  
  handleOutsideClick(e) {
    // ...
  }
  
  render() {
    return (
      <Outside
        tag="ul"
        className="dropdown-menu"
        onClickOutside={this.handleOutsideClick}
      >
        <li>Items..</li>
      </Outside>
    );
  }
}
``` 

## License

MIT
