import React from 'react';

class SumUnified extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateData(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  doSum() {
    var c = parseInt(this.state.txt1) + parseInt(this.state.txt2);
    this.setState({ msg: "Sum is " + c });
  }

  render() {
    return (
      <>
        No1 : <input type='text' name='txt1' onChange={this.updateData.bind(this)} />
        <br />
        No2 : <input type='text' name='txt2' onChange={this.updateData.bind(this)} />
        <br />
        <input type='button' value="+" onClick={this.doSum.bind(this)} />
        <br />
        {this.state.msg}
      </>
    );
  }
}

export default SumUnified;