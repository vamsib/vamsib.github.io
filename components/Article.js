import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { ArticleStyles } from '../styles/Article.js';

export default () => {
  const { articleId, slug } = useParams();
  const [ title, setTitle ] = useState(null);
  const [ article, setArticle ] = useState({
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Loading...',
            marks: [],
            data: {}
          },
        ],
      },
    ],
  });
  useEffect(() => {
    (async function() {
      const response = await client.getEntry(articleId);
      setArticle(response.fields.body);
      setTitle(response.fields.title);
    })();
  }, []);
  return (
    <>
      <div className="article">
        <nav></nav>
        <article>
          {title && <h1>{title}</h1>}
          {documentToReactComponents(article)}
        </article>
      </div>
      <style jsx>{ArticleStyles}</style>
    </>
  );
}
