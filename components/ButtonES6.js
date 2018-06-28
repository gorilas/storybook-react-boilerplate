import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial state
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this); // console.log(this) is not null now
  }
  handleClick() {
    // callback
    console.log(this);
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return <span onClick={this.handleClick}>Click me: {this.state.counter} - Hola {this.props.name} - {this.props.children}</span>;
  }
}

ButtonES6.propTypes = {
  // props types and required
  name: PropTypes.string.isRequired,
  movida: PropTypes.string.isRequired
};

ButtonES6.defaultProps = {
  // default props, initial states
  name: 'Mundo!'
};

export default ButtonES6; // Don’t forget to use export default!