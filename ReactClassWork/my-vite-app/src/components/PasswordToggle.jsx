import React from 'react';

class PasswordToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', show: false };
  }
  render() {
    const { password, show } = this.state;
    return (
      <>
        <h3>Password Toggle</h3>
        <input
          type={show ? 'text' : 'password'}
          value={password}
          placeholder='Enter password'
          onChange={(e) => this.setState({ password: e.target.value })}
          style={{ padding: '6px', width: '250px', marginRight: '8px' }}
        />
        <button onClick={() => this.setState({ show: !show })} style={{ padding: '6px 14px' }}>
          {show ? 'Hide' : 'Show'}
        </button>
      </>
    );
  }
}

export default PasswordToggle;
