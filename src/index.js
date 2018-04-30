import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import omit from 'lodash/omit';

class Outer extends PureComponent {
  DOMEvents = ['click'];
  _isMounted;

  constructor(props) {
    super(props);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    
  }
  
  static defaultProps = {
    tag: Fragment,
    isOpen: true,
  };

  static propTypes = {
    tag: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.symbol,
      PropTypes.element,
    ]),
    isOpen: PropTypes.bool,
    children: PropTypes.node,
    onClickOutside: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this._isMounted = true;
    if (this.props.isOpen) {
      this.addEvents();
    }
  }

  componentDidUpdate({ isOpen }) {
    if (this.props.isOpen !== isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.removeEvents();
  }

  handleProps() {
    if (!this._isMounted) return;
    (this.props.isOpen)
      ? this.addEvents()
      : this.removeEvents()
  }

  handleDocumentClick(e) {
    const container = ReactDOM.findDOMNode(this);
    if (!container.contains(e.target)) {
      this.props.onClickOutside(e);
    }
  }

  addEvents() {
    this.DOMEvents.forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }

  removeEvents() {
    this.DOMEvents.forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  }

  render() {
    const { tag: Tag, children, ...props } = omit(this.props, ['isOpen', 'onClickOutside']);
    return <Tag {...props}>{children}</Tag>;
  }

}

export default Outer;
