import React from 'react';

class BasicCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', result: '' };
  }

  calculate(op) {
    const a = parseFloat(this.state.num1);
    const b = parseFloat(this.state.num2);
    if (isNaN(a) || isNaN(b)) { this.setState({ result: 'Enter valid numbers' }); return; }
    let res;
    if (op === '+') res = a + b;
    else if (op === '-') res = a - b;
    else if (op === '*') res = a * b;
    else if (op === '/') res = b !== 0 ? a / b : 'Cannot divide by 0';
    this.setState({ result: res });
  }

  render() {
    const { num1, num2, result } = this.state;
    const btnStyle = { padding: '8px 16px', margin: '4px', cursor: 'pointer', fontSize: '16px' };
    return (
      <>
        <h3>Basic Calculator</h3>
        <input type='number' value={num1} placeholder='Number 1'
          onChange={(e) => this.setState({ num1: e.target.value })}
          style={{ padding: '6px', width: '150px', marginRight: '8px' }} />
        <input type='number' value={num2} placeholder='Number 2'
          onChange={(e) => this.setState({ num2: e.target.value })}
          style={{ padding: '6px', width: '150px' }} />
        <br /><br />
        <button style={btnStyle} onClick={() => this.calculate('+')}>+</button>
        <button style={btnStyle} onClick={() => this.calculate('-')}>-</button>
        <button style={btnStyle} onClick={() => this.calculate('*')}>×</button>
        <button style={btnStyle} onClick={() => this.calculate('/')}>/</button>
        {result !== '' && <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Result: {result}</p>}
      </>
    );
  }
}

export default BasicCalc;
