import React from 'react';
class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myname: "Akash" };
    console.log("Constructor Called");
  }
  updateData() {
    this.setState({ myname: "Aarav" });
  }
  componentDidMount() {
    console.log("ComponentDidMount Called");
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate Called");
  }
  render() {
    console.log("Render Called");
    return (
      <>
        {console.log("Return Called")}
        My Name is {this.state.myname} <br />
        <input type='button' value="ClickMe" onClick={this.updateData.bind(this)} />
        <input type='button' value="Update" onClick={() => this.setState({ myname: "Modiji" })} />
        Name : <input type='text' onChange={(e) => this.setState({ myname: e.target.value })} />
      </>
    );
  }
}
export default StateDemo;