import React from 'react';

class DigitalClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ time: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;
    return (
      <>
        <h3>Digital Clock</h3>
        <div style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'monospace' }}>
          {time.toLocaleTimeString()}
        </div>
        <div style={{ fontSize: '18px', marginTop: '8px' }}>
          {time.toDateString()}
        </div>
      </>
    );
  }
}

export default DigitalClock;
