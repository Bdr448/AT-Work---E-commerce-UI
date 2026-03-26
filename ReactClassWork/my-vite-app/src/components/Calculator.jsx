import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: '' };
  }

  press(val) {
    this.setState((prev) => ({ display: prev.display + val }));
  }

  calculate() {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(this.state.display);
      this.setState({ display: String(result) });
    } catch {
      this.setState({ display: 'Error' });
    }
  }

  clear() {
    this.setState({ display: '' });
  }

  backspace() {
    this.setState((prev) => ({ display: prev.display.slice(0, -1) }));
  }

  render() {
    const { display } = this.state;
    const btnStyle = { width: '60px', height: '50px', fontSize: '18px', margin: '4px', cursor: 'pointer', borderRadius: '6px', border: '1px solid #ccc' };
    const rows = [['7','8','9','/'],['4','5','6','*'],['1','2','3','-'],['0','.','=','+']];
    return (
      <>
        <h3>Calculator</h3>
        <div style={{ display: 'inline-block', border: '1px solid #ccc', padding: '12px', borderRadius: '8px' }}>
          <input type='text' value={display} readOnly
            style={{ width: '260px', padding: '8px', fontSize: '20px', textAlign: 'right', marginBottom: '8px' }} />
          <br />
          {rows.map((row, i) => (
            <div key={i}>
              {row.map((btn) => (
                <button key={btn} style={{ ...btnStyle, background: btn === '=' ? '#646cff' : '#f5f5f5', color: btn === '=' ? 'white' : 'black' }}
                  onClick={() => btn === '=' ? this.calculate() : this.press(btn)}>
                  {btn}
                </button>
              ))}
            </div>
          ))}
          <button style={{ ...btnStyle, width: '128px' }} onClick={this.clear.bind(this)}>C</button>
          <button style={btnStyle} onClick={this.backspace.bind(this)}>⌫</button>
        </div>
      </>
    );
  }
}

export default Calculator;
