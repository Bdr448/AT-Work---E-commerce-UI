import React from 'react';

class FetchUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users, loading: false }));
  }

  render() {
    const { users, loading } = this.state;
    const cardStyle = { border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '220px', boxShadow: '2px 2px 6px rgba(0,0,0,0.1)' };
    return (
      <>
        <h3>Users from API</h3>
        {loading ? <p>Loading...</p> : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {users.map((u) => (
              <div key={u.id} style={cardStyle}>
                <h4 style={{ margin: '0 0 8px' }}>{u.name}</h4>
                <p style={{ margin: '4px 0' }}>📧 {u.email}</p>
                <p style={{ margin: '4px 0' }}>📞 {u.phone}</p>
                <p style={{ margin: '4px 0' }}>🌐 {u.website}</p>
                <p style={{ margin: '4px 0' }}>🏙 {u.address.city}</p>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}

export default FetchUsers;
