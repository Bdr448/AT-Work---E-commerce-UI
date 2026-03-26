import React from 'react';

const empty = { name: '', email: '', mobile: '', city: '' };

class SignUpTable extends React.Component {
  constructor(props) {
    super(props);
    const saved = JSON.parse(localStorage.getItem('signup_records')) || [];
    this.state = { form: { ...empty }, records: saved, err: {}, editIndex: -1 };
  }

  update(e) {
    const { name, value } = e.target;
    this.setState((prev) => ({ form: { ...prev.form, [name]: value } }));
  }

  validate() {
    const { name, email, mobile, city } = this.state.form;
    const err = {};
    if (!name)   err.name   = 'Enter Name';
    if (!email)  err.email  = 'Enter Email';
    if (!mobile) err.mobile = 'Enter Mobile';
    if (!city)   err.city   = 'Enter City';
    this.setState({ err });
    return Object.keys(err).length === 0;
  }

  submit() {
    if (!this.validate()) return;
    const { form, records, editIndex } = this.state;
    let updated;
    if (editIndex >= 0) {
      updated = records.map((r, i) => i === editIndex ? { ...form } : r);
    } else {
      updated = [...records, { ...form }];
    }
    localStorage.setItem('signup_records', JSON.stringify(updated));
    this.setState({ records: updated, form: { ...empty }, err: {}, editIndex: -1 });
  }

  edit(index) {
    this.setState({ form: { ...this.state.records[index] }, editIndex: index, err: {} });
  }

  delete(index) {
    const records = this.state.records.filter((_, i) => i !== index);
    localStorage.setItem('signup_records', JSON.stringify(records));
    this.setState({ records });
  }

  render() {
    const { form, records, err, editIndex } = this.state;
    const inputStyle = { padding: '6px', width: '180px', marginRight: '8px' };
    return (
      <>
        <h3>Registration Form (LocalStorage)</h3>
        <div style={{ marginBottom: '12px' }}>
          <input type='text' name='name' value={form.name} placeholder='Full Name'
            onChange={this.update.bind(this)} style={inputStyle} />
          <span style={{ color: 'red' }}>{err.name}</span><br /><br />
          <input type='email' name='email' value={form.email} placeholder='Email'
            onChange={this.update.bind(this)} style={inputStyle} />
          <span style={{ color: 'red' }}>{err.email}</span><br /><br />
          <input type='tel' name='mobile' value={form.mobile} placeholder='Mobile'
            onChange={this.update.bind(this)} style={inputStyle} />
          <span style={{ color: 'red' }}>{err.mobile}</span><br /><br />
          <input type='text' name='city' value={form.city} placeholder='City'
            onChange={this.update.bind(this)} style={inputStyle} />
          <span style={{ color: 'red' }}>{err.city}</span><br /><br />
          <button onClick={this.submit.bind(this)} style={{ padding: '6px 16px' }}>
            {editIndex >= 0 ? 'Update' : 'Register'}
          </button>
        </div>

        {records.length > 0 && (
          <table border='1' cellPadding='8' style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead style={{ background: '#646cff', color: 'white' }}>
              <tr><th>#</th><th>Name</th><th>Email</th><th>Mobile</th><th>City</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{r.name}</td><td>{r.email}</td><td>{r.mobile}</td><td>{r.city}</td>
                  <td>
                    <button onClick={() => this.edit(i)}
                      style={{ background: 'blue', color: 'white', border: 'none', padding: '4px 10px', marginRight: '6px', cursor: 'pointer' }}>Edit</button>
                    <button onClick={() => this.delete(i)}
                      style={{ background: 'red', color: 'white', border: 'none', padding: '4px 10px', cursor: 'pointer' }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
}

export default SignUpTable;
