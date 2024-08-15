import React from 'react';

function NewsItem({ title, description, source }) {
  return (
    <div className="news-item">
      <h2>{title}</h2>
      <p>{description}</p>
      <span>Source: {source}</span>
    </div>
  );
}

export default NewsItem;