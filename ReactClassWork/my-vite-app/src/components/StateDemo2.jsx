import React from 'react';
class StateDemo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userinfo: { name: "Akash", city: "Ahmedabad", area: "Paldi" } };
  }
  render() {
    return (
      <>
        Name is {this.state.userinfo.name}
        City is {this.state.userinfo.city}
        <input type='button'
          onClick={() => this.setState({ userinfo: { ...this.state.userinfo, city: "Surat" } })} />
        Area is {this.state.userinfo.area}
      </>
    );
  }
}
export default StateDemo2;