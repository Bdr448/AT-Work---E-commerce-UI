import React from 'react';

const API_KEY = 'YOUR_OMDB_API_KEY';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '', movies: [], err: '' };
  }

  search() {
    const { query } = this.state;
    if (!query) return;
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          this.setState({ movies: data.Search, err: '' });
        } else {
          this.setState({ movies: [], err: data.Error });
        }
      });
  }

  render() {
    const { query, movies, err } = this.state;
    const cardStyle = { border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '160px', textAlign: 'center' };
    return (
      <>
        <h3>Movie Search App</h3>
        <input type='text' value={query} placeholder='Search movie...'
          onChange={(e) => this.setState({ query: e.target.value })}
          style={{ padding: '6px', width: '220px', marginRight: '8px' }} />
        <button onClick={this.search.bind(this)} style={{ padding: '6px 14px' }}>Search</button>
        {err && <p style={{ color: 'red' }}>{err}</p>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px' }}>
          {movies.map((m) => (
            <div key={m.imdbID} style={cardStyle}>
              <img src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/100x150'}
                alt={m.Title} style={{ width: '100%', borderRadius: '4px' }} />
              <p style={{ fontWeight: 'bold', fontSize: '13px', margin: '6px 0 2px' }}>{m.Title}</p>
              <p style={{ fontSize: '12px', color: 'gray' }}>{m.Year}</p>
            </div>
          ))}
        </div>
        <p style={{ color: 'gray', fontSize: '12px', marginTop: '10px' }}>
          * Replace YOUR_OMDB_API_KEY with your key from omdbapi.com
        </p>
      </>
    );
  }
}

export default MovieSearch;
