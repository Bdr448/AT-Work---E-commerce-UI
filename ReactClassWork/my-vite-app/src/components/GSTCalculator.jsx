import React from 'react';

class GSTCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: '', gstRate: '', gstAmount: '', total: '' };
  }

  calculate() {
    const amount = parseFloat(this.state.amount);
    const gstRate = parseFloat(this.state.gstRate);
    if (isNaN(amount) || isNaN(gstRate)) return;
    const gstAmount = (amount * gstRate) / 100;
    const total = amount + gstAmount;
    this.setState({ gstAmount: gstAmount.toFixed(2), total: total.toFixed(2) });
  }

  render() {
    const { amount, gstRate, gstAmount, total } = this.state;
    return (
      <>
        <h3>GST Calculator</h3>
        <div style={{ marginBottom: '10px' }}>
          <label>Amount: </label>
          <input type='number' value={amount} onChange={(e) => this.setState({ amount: e.target.value })}
            style={{ padding: '6px', marginLeft: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>GST Rate (%): </label>
          <input type='number' value={gstRate} onChange={(e) => this.setState({ gstRate: e.target.value })}
            style={{ padding: '6px', marginLeft: '8px' }} />
        </div>
        <button onClick={this.calculate.bind(this)} style={{ padding: '6px 16px' }}>Calculate GST</button>
        {gstAmount && (
          <div style={{ marginTop: '12px' }}>
            <p>GST Amount: <strong>₹{gstAmount}</strong></p>
            <p>Total Amount: <strong>₹{total}</strong></p>
          </div>
        )}
      </>
    );
  }
}

export default GSTCalculator;
