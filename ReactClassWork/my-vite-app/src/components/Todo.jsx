import React from 'react';
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mydata: [], txt1: '' };
  }
  addData() {
    var tempdata = this.state.mydata;
    tempdata.push(this.state.txt1);
    this.setState({ mydata: tempdata, txt1: '' });
  }
  render() {
    return (
      <>
        Todo : <input type='text' value={this.state.txt1}
          onChange={(e) => this.setState({ txt1: e.target.value })} />
        <input type='button' onClick={this.addData.bind(this)} />
        <ul>
          {this.state.mydata.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default Todo;