import React from 'react';
import { useParams } from 'react-router-dom';

export default () => {
  const { slug } = useParams();
  return <h1>Article {slug}</h1>;
}
