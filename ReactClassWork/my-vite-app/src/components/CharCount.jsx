import React from 'react';

class CharCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt: '' };
  }
  render() {
    const { txt } = this.state;
    return (
      <>
        <h3>Character Counter</h3>
        <input type='text' placeholder='Start typing...'
          value={txt} onChange={(e) => this.setState({ txt: e.target.value })}
          style={{ padding: '6px', width: '300px' }} />
        <p>Character Count: <strong>{txt.length}</strong></p>
      </>
    );
  }
}

export default CharCount;
