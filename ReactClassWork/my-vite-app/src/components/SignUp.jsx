import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    const saved = JSON.parse(localStorage.getItem('signup_data')) || {};

    this.state = {
      name:     saved.name     || '',
      email:    saved.email    || '',
      password: saved.password || '',
      mobile:   saved.mobile   || '',
      gender:   saved.gender   || '',
      city:     saved.city     || '',
      country:  saved.country  || '',
      dob:      saved.dob      || '',
      agree:    saved.agree    || false,
      err:      {},
      msg:      ''
    };
  }

  updateData(e) {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    this.setState({ [name]: val });
  }

  doValidation() {
    var isValid = true;
    var err = {};
    const { name, email, password, mobile, gender, city, country, dob, agree } = this.state;

    if (!name)     { isValid = false; err.name     = "Enter Full Name";       }
    if (!email)    { isValid = false; err.email    = "Enter Email";           }
    if (!password) { isValid = false; err.password = "Enter Password";        }
    if (!mobile)   { isValid = false; err.mobile   = "Enter Mobile Number";   }
    if (!dob)      { isValid = false; err.dob      = "Select Date of Birth";  }
    if (!gender)   { isValid = false; err.gender   = "Select Gender";         }
    if (!city)     { isValid = false; err.city     = "Enter City";            }
    if (!country)  { isValid = false; err.country  = "Select Country";        }
    if (!agree)    { isValid = false; err.agree    = "Accept Terms & Conditions"; }

    this.setState({ err });
    return isValid;
  }

  doSubmit() {
    var isValid = this.doValidation();
    if (isValid) {
      const { name, email, password, mobile, gender, city, country, dob, agree } = this.state;
      const data = { name, email, password, mobile, gender, city, country, dob, agree };
      localStorage.setItem('signup_data', JSON.stringify(data));
      this.setState({ msg: 'Registered Successfully!' });
    }
  }

  clearData() {
    localStorage.removeItem('signup_data');
    this.setState({
      name: '', email: '', password: '', mobile: '',
      gender: '', city: '', country: '', dob: '',
      agree: false, err: {}, msg: ''
    });
  }

  render() {
    var err = this.state.err;

    return (
      <div style={{ maxWidth: '420px', margin: '30px auto', fontFamily: 'Arial' }}>
        <h2>Sign Up</h2>

        {/* Name */}
        <div style={{ marginBottom: '12px' }}>
          <label>Full Name :</label><br />
          <input type='text' name='name' value={this.state.name}
            onChange={this.updateData.bind(this)}
            style={{ width: '100%', padding: '6px' }} />
          <span style={{ color: 'red' }}>{err.name}</span>
        </div>

        {/* Email */}
        <div style={{ marginBottom: '12px' }}>
          <label>Email :</label><br />
          <input type='email' name='email' value={this.state.email}
            onChange={this.updateData.bind(this)}
            style={{ width: '100%', padding: '6px' }} />
          <span style={{ color: 'red' }}>{err.email}</span>
        </div>

        {/* Password */}
        <div style={{ marginBottom: '12px' }}>
          <label>Password :</label><br />
          <input type='password' name='password' value={this.state.password}
            onChange={this.updateData.bind(this)}
            style={{ width: '100%', padding: '6px' }} />
          <span style={{ color: 'red' }}>{err.password}</span>
        </div>

        {/* Mobile */}
        <div style={{ marginBottom: '12px' }}>
          <label>Mobile :</label><br />
          <input type='tel' name='mobile' value={this.state.mobile}
            onChange={this.updateData.bind(this)}
            style={{ width: '100%', padding: '6px' }} />
          <span style={{ color: 'red' }}>{err.mobile}</span>
        </div>

        {/* DOB */}
        <div style={{ marginBottom: '12px' }}>
          <label>Date of Birth :</label><br />
          <input type='date' name='dob' value={this.state.dob}
            onChange={this.updateData.bind(this)}
            style={{ width: '100%', padding: '6px' }} />
          <span style={{ color: 'red' }}>{err.dob}</span>
        </div>

        {/* Gender */}
        <div style={{ marginBottom: '12px' }}>
          <label>Gender :</label><br />
          <input type='radio' name='gender' value='Male'
            checked={this.state.gender === 'Male'}
            onChange={this.updateData.bind(this)} /> Male &nbsp;
          <input type='radio' name='gender' value='Female'
            checked={this.state.gender === 'Female'}
            onChange={this.updateData.bind(this)} /> Female &nbsp;
          <input type='radio' name='gender' value='Other'
            checked={this.state.gender === 'Other'}
            onChange={this.updateData.bind(this)} /> Other
          <br />
          <span style={{ color: 'red' }}>{err.gender}</span>
        </div>

        {/* City */}
        <div style={{ marginBottom: '12px' }}>
          <label>City :</label><br />
          <input type='text' name='city' value={this.state.city}
            onChange={this.updateData.bind(this)}
            style={{ width: '100%', padding: '6px' }} />
          <span style={{ color: 'red' }}>{err.city}</span>
        </div>

        {/* Country */}
        <div style={{ marginBottom: '12px' }}>
          <label>Country :</label><br />
          <select name='country' value={this.state.country}
            onChange={this.updateData.bind(this)}
            style={{ width: '100%', padding: '6px' }}>
            <option value=''>-- Select Country --</option>
            <option value='India'>India</option>
            <option value='USA'>USA</option>
            <option value='UK'>UK</option>
            <option value='Canada'>Canada</option>
            <option value='Australia'>Australia</option>
          </select>
          <span style={{ color: 'red' }}>{err.country}</span>
        </div>

        {/* Terms */}
        <div style={{ marginBottom: '12px' }}>
          <input type='checkbox' name='agree'
            checked={this.state.agree}
            onChange={this.updateData.bind(this)} />
          &nbsp; I agree to Terms & Conditions
          <br />
          <span style={{ color: 'red' }}>{err.agree}</span>
        </div>

        {/* Buttons */}
        <input type='button' value='Register' onClick={this.doSubmit.bind(this)}
          style={{ padding: '8px 20px', marginRight: '10px', cursor: 'pointer' }} />
        <input type='button' value='Clear' onClick={this.clearData.bind(this)}
          style={{ padding: '8px 20px', cursor: 'pointer' }} />

        {/* Success message */}
        {this.state.msg && (
          <p style={{ color: 'green', marginTop: '12px' }}>
            {this.state.msg}
          </p>
        )}

      </div>
    );
  }
}

export default SignUp;