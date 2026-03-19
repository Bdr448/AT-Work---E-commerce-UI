import React from 'react';
class EventDemo extends React.Component {
  constructor(props) { super(props); this.state = {}; }

  // Form submit version
  doSum(e) {
    var a = parseInt(e.target.txt1.value);
    var b = parseInt(e.target.txt2.value);
    var c = a + b;
    alert("Sum is " + c);
    e.preventDefault();
  }

  // Click event demo version
  clickDemo(e) {
    // console.log(e.type)
    console.log(e.target.name);
    console.warn(e.target.value);
  }

  render() {
    return (
      <>
        {/* Form submit version */}
        <form onSubmit={this.doSum.bind(this)}>
          No1 : <input type='text' name='txt1' />
          No2 : <input type='text' name='txt2' />
          <input type='submit' value="ClickMe" />
        </form>

        {/* Click/event demo version */}
        <input type='button' name='btn1' value="ClickMe1"
          onClick={this.clickDemo.bind(this)} />
        <input type='text' name='txt1' onChange={this.clickDemo.bind(this)} />
        <input type='text' name='txt2' onChange={this.clickDemo.bind(this)} />
        <input type='button' value="ClickMe2" onClick={() => alert('Alert')} />
      </>
    );
  }
}
export default EventDemo;