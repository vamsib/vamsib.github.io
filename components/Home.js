import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';

const client = createClient({
  space: 'xy4x3ow61yj0',
  accessToken: 'ViN9cYNMHLaAJyi_zsWmzQiXij0-FOqt2caV5OxFpsw'
});

export default () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async function() {
      const response = await client.getEntries({
        'content_type': 'article',
        'select': ['fields.slug', 'fields.title']
      });
      setArticles(response.items.map(item => {
        return {
          title: item.fields.title,
          slug: item.fields.slug
        }
      }));
    })();
  }, []);

  return (
    <ul>{articles.map(article => (
      <li key={article.slug}><Link to={`/article/${article.slug}`}>{article.title}</Link></li>
    ))}</ul>
  );
}
