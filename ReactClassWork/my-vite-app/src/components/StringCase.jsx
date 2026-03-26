import React from 'react';

class StringCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt: '' };
  }
  render() {
    const { txt } = this.state;
    return (
      <>
        <h3>String Case Converter</h3>
        <input type='text' placeholder='Enter a string'
          value={txt} onChange={(e) => this.setState({ txt: e.target.value })}
          style={{ padding: '6px', width: '300px' }} />
        <p>Uppercase: <strong>{txt.toUpperCase()}</strong></p>
        <p>Lowercase: <strong>{txt.toLowerCase()}</strong></p>
      </>
    );
  }
}

export default StringCase;
