import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../lib/contentful';

import { TopArticlesStyles } from '../styles/Home.js';

function formatDate(date, month, year) {
  const dateSuffix = date > 3 && date <= 20
                      ? 'th'
                      : date % 10 === 1
                        ? 'st'
                        : date % 10 === 2
                          ? 'nd'
                          : date % 10 === 3
                            ? 'rd'
                            : 'th';

  const monthNames = ['jan', 'feb', 'mar',
    'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  return {
    date,
    dateSuffix,
    month: monthNames[month],
    year
  }
}

export default () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async function() {
      const response = await client.getEntries({
        'content_type': 'article',
        'select': ['fields.slug', 'fields.title']
      });
      console.log(response);
      setArticles(response.items.map(item => {
        const dateObj = new Date(item.sys.createdAt);
        const date = dateObj.getDate();
        const month = dateObj.getMonth();
        const year = dateObj.getFullYear();
        const formatedDate = formatDate(date, month, year);
        return {
          id: item.sys.id,
          title: item.fields.title,
          slug: item.fields.slug,
          createdAt: formatedDate 
        }
      }));
    })();
  }, []);

  return (
    <>
      <ul className="top-articles">{articles.map(article => (
        <li key={article.slug}>
          <div className="created-date">
            <span className="date">
              {article.createdAt.date}
              <sub>{article.createdAt.dateSuffix}</sub>
            </span>
            <span className="month-name">
              {article.createdAt.month},&nbsp;{article.createdAt.year}
            </span>
          </div>
          <Link  className="article-title" to={`/article/${article.id}/${article.slug}`}><span>{article.title}</span></Link>
        </li>
      ))}</ul>
      <style jsx>{TopArticlesStyles}</style>
    </>
  );
}
