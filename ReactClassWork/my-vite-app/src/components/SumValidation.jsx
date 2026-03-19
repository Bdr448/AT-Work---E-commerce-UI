import React from 'react';

class SumValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doValidation() {
    var isValid = true;
    const { txt1, txt2 } = this.state;
    var temperr = {};
    if (!txt1) { isValid = false; temperr.txt1 = "Enter No1"; }
    if (!txt2) { isValid = false; temperr.txt2 = "Enter No2"; }
    this.setState({ myerr: temperr });
    return isValid;
  }

  doSum() {
    var mydata = this.doValidation();
    if (mydata === true) {
      var c = parseInt(this.state.txt1) + parseInt(this.state.txt2);
      this.setState({ msg: "Sum is " + c });
    }
  }

  render() {
    return (
      <>
        No1 : <input type='text' name='txt1'
          onChange={(e) => this.setState({ txt1: e.target.value })} />
        <span style={{ color: 'red' }}>{this.state.myerr && this.state.myerr.txt1}</span>
        <br />
        No2 : <input type='text' name='txt2'
          onChange={(e) => this.setState({ txt2: e.target.value })} />
        <span style={{ color: 'red' }}>{this.state.myerr && this.state.myerr.txt2}</span>
        <br />
        <input type='button' value="+" onClick={this.doSum.bind(this)} />
        <br />
        {this.state.msg}
      </>
    );
  }
}

export default SumValidation;