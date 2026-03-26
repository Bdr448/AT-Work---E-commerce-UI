import React from 'react';

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, running: false };
    this.timer = null;
  }

  start() {
    if (this.timer) return;
    this.setState({ count: 0, running: true }, () => {
      this.timer = setInterval(() => {
        this.setState((prev) => {
          if (prev.count >= 10) {
            clearInterval(this.timer);
            this.timer = null;
            return { count: 10, running: false };
          }
          return { count: prev.count + 1 };
        });
      }, 1000);
    });
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({ count: 0, running: false });
  }

  pause() {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({ running: false });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { count, running } = this.state;
    return (
      <>
        <h3>Countdown Timer</h3>
        <p style={{ fontSize: '48px', fontWeight: 'bold' }}>{count}</p>
        <button onClick={this.start.bind(this)} style={{ marginRight: '8px', padding: '6px 14px' }}>Start</button>
        <button onClick={this.stop.bind(this)} style={{ marginRight: '8px', padding: '6px 14px' }}>Stop</button>
        <button onClick={this.pause.bind(this)} style={{ padding: '6px 14px' }}>Pause</button>
        {!running && count === 10 && <p style={{ color: 'green' }}>Timer Completed!</p>}
      </>
    );
  }
}

export default CountdownTimer;
