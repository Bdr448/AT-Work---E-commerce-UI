import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // Read saved counter from localStorage on init
    const saved = localStorage.getItem('counter');
    this.state = {
      counter: saved !== null ? parseInt(saved) : 0,
      msg: ''
    };
  }

  incrementData() {
    if (this.state.counter >= 10) {
      this.setState({ msg: "Sorry, max is 10" });
    } else {
      const newVal = this.state.counter + 1;
      localStorage.setItem('counter', newVal);
      this.setState({ counter: newVal, msg: '' });
    }
  }

  decrementData() {
    if (this.state.counter <= 0) {
      this.setState({ msg: "Sorry, min is 0" });
    } else {
      const newVal = this.state.counter - 1;
      localStorage.setItem('counter', newVal);
      this.setState({ counter: newVal, msg: '' });
    }
  }

  resetData() {
    localStorage.setItem('counter', 0);
    this.setState({ counter: 0, msg: '' });
  }

  render() {
    return (
      <>
        <h3>Counter: {this.state.counter}</h3>
        <input type='button' value="+" onClick={this.incrementData.bind(this)} />
        <input type='button' value="-" onClick={this.decrementData.bind(this)} />
        <input type='button' value="X" onClick={this.resetData.bind(this)} />
        <br />
        <span style={{ color: 'red' }}>{this.state.msg}</span>
        <br />
      </>
    );
  }
}

export default Counter;