import React from 'react';

class DarkLightMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dark: false };
  }

  render() {
    const { dark } = this.state;
    const containerStyle = {
      background: dark ? '#1e1e2e' : '#ffffff',
      color: dark ? '#ffffff' : '#000000',
      padding: '30px',
      borderRadius: '8px',
      minHeight: '200px',
      transition: 'all 0.3s ease'
    };
    return (
      <div style={containerStyle}>
        <h3>{dark ? '🌙 Dark Mode' : '☀️ Light Mode'}</h3>
        <p>This is a sample page demonstrating Dark and Light mode toggle.</p>
        <button
          onClick={() => this.setState({ dark: !dark })}
          style={{ padding: '8px 20px', cursor: 'pointer', borderRadius: '6px',
            background: dark ? '#646cff' : '#1e1e2e', color: 'white', border: 'none' }}>
          Switch to {dark ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    );
  }
}

export default DarkLightMode;
