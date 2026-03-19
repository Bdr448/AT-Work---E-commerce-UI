import React from 'react';

class Mapdemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var mydata = [10, 20, 30, 40, 50, "C", "C++"];
    return (
      <>
        <ul>
          {mydata.map((value, index, arr) => {
            return <li key={index}>{index}-{value}-{arr}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Mapdemo;