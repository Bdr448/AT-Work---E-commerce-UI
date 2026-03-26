import React from 'react';

class GuessNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guess: '', msg: '', random: Math.floor(Math.random() * 10) + 1 };
  }

  checkGuess() {
    const { guess, random } = this.state;
    if (!guess) return;
    if (parseInt(guess) === random) {
      this.setState({ msg: '🎉 Success! You guessed it right! The number was ' + random });
    } else {
      this.setState({ msg: '❌ Failure! Wrong guess. Try again!' });
    }
  }

  reset() {
    this.setState({ guess: '', msg: '', random: Math.floor(Math.random() * 10) + 1 });
  }

  render() {
    const { guess, msg } = this.state;
    return (
      <>
        <h3>Guess the Number (1–10)</h3>
        <input type='number' value={guess} placeholder='Enter your guess'
          onChange={(e) => this.setState({ guess: e.target.value })}
          style={{ padding: '6px', width: '200px', marginRight: '8px' }} />
        <button onClick={this.checkGuess.bind(this)} style={{ padding: '6px 14px', marginRight: '8px' }}>Check</button>
        <button onClick={this.reset.bind(this)} style={{ padding: '6px 14px' }}>Reset</button>
        {msg && <p style={{ color: msg.startsWith('🎉') ? 'green' : 'red', fontWeight: 'bold' }}>{msg}</p>}
      </>
    );
  }
}

export default GuessNumber;
