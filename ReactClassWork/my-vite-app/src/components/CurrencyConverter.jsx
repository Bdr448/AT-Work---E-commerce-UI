import React from 'react';

const API_KEY = 'YOUR_EXCHANGERATE_API_KEY';

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: '', from: 'USD', to: 'INR', result: '', err: '' };
  }

  convert() {
    const { amount, from, to } = this.state;
    if (!amount) return;
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result === 'success') {
          this.setState({ result: data.conversion_result.toFixed(2), err: '' });
        } else {
          this.setState({ err: 'Conversion failed', result: '' });
        }
      })
      .catch(() => this.setState({ err: 'API error', result: '' }));
  }

  render() {
    const { amount, from, to, result, err } = this.state;
    const currencies = ['USD', 'INR', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'];
    const selStyle = { padding: '6px', marginRight: '8px' };
    return (
      <>
        <h3>Currency Converter</h3>
        <input type='number' value={amount} placeholder='Amount'
          onChange={(e) => this.setState({ amount: e.target.value })}
          style={{ padding: '6px', width: '120px', marginRight: '8px' }} />
        <select value={from} onChange={(e) => this.setState({ from: e.target.value })} style={selStyle}>
          {currencies.map((c) => <option key={c}>{c}</option>)}
        </select>
        <span style={{ marginRight: '8px' }}>→</span>
        <select value={to} onChange={(e) => this.setState({ to: e.target.value })} style={selStyle}>
          {currencies.map((c) => <option key={c}>{c}</option>)}
        </select>
        <button onClick={this.convert.bind(this)} style={{ padding: '6px 14px' }}>Convert</button>
        {result && <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '10px' }}>{amount} {from} = {result} {to}</p>}
        {err && <p style={{ color: 'red' }}>{err}</p>}
        <p style={{ color: 'gray', fontSize: '12px', marginTop: '10px' }}>
          * Replace YOUR_EXCHANGERATE_API_KEY with your key from exchangerate-api.com
        </p>
      </>
    );
  }
}

export default CurrencyConverter;
