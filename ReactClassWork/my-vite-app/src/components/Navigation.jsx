import React from 'react';

class Home extends React.Component {
  render() {
    return <div><h2>Home Page</h2><p>Welcome to the Home page!</p></div>;
  }
}

class About extends React.Component {
  render() {
    return <div><h2>About Page</h2><p>This is the About page.</p></div>;
  }
}

class Contact extends React.Component {
  render() {
    return <div><h2>Contact Page</h2><p>Email: contact@example.com</p></div>;
  }
}

const navPages = { Home, About, Contact };

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 'Home' };
  }
  render() {
    const { active } = this.state;
    const Component = navPages[active];
    return (
      <>
        <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {Object.keys(navPages).map((name) => (
            <button key={name} onClick={() => this.setState({ active: name })}
              style={{ padding: '6px 16px', cursor: 'pointer',
                background: active === name ? '#646cff' : '#eee',
                color: active === name ? 'white' : 'black',
                border: 'none', borderRadius: '6px' }}>
              {name}
            </button>
          ))}
        </nav>
        <Component />
      </>
    );
  }
}

export default Navigation;
