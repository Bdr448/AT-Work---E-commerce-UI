import React from 'react';
class Sum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateData1(e) {
    this.setState({ txt1: e.target.value });
  }
  updateData2(e) {
    this.setState({ txt2: e.target.value });
  }
  doSum() {
    var c = parseInt(this.state.txt1) + parseInt(this.state.txt2);
    this.setState({ msg: "Sum is " + c });
  }
  render() {
    return (
      <>
        No1 : <input type='text' onChange={this.updateData1.bind(this)} />
        No2 : <input type='text' onChange={this.updateData2.bind(this)} />
        <input type='button' value="+" onClick={this.doSum.bind(this)} />
        {this.state.msg}
      </>
    );
  }
}
export default Sum;