import React from 'react';

const API_KEY = 'YOUR_NEWS_API_KEY';

class NewsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], loading: true, err: '' };
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'ok') {
          this.setState({ articles: data.articles, loading: false });
        } else {
          this.setState({ err: data.message, loading: false });
        }
      })
      .catch(() => this.setState({ err: 'Failed to fetch news', loading: false }));
  }

  render() {
    const { articles, loading, err } = this.state;
    const cardStyle = { border: '1px solid #ccc', borderRadius: '8px', padding: '12px', width: '280px', boxShadow: '2px 2px 6px rgba(0,0,0,0.1)' };
    return (
      <>
        <h3>News App - Top Headlines</h3>
        {loading && <p>Loading...</p>}
        {err && <p style={{ color: 'red' }}>{err}</p>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {articles.map((a, i) => (
            <div key={i} style={cardStyle}>
              {a.urlToImage && <img src={a.urlToImage} alt='' style={{ width: '100%', borderRadius: '4px', marginBottom: '8px' }} />}
              <h4 style={{ margin: '0 0 6px', fontSize: '14px' }}>{a.title}</h4>
              <p style={{ fontSize: '12px', color: 'gray' }}>{a.source.name}</p>
              <a href={a.url} target='_blank' rel='noreferrer' style={{ fontSize: '12px' }}>Read more</a>
            </div>
          ))}
        </div>
        <p style={{ color: 'gray', fontSize: '12px', marginTop: '10px' }}>
          * Replace YOUR_NEWS_API_KEY with your key from newsapi.org
        </p>
      </>
    );
  }
}

export default NewsApp;
