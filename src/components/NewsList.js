import React from 'react';
import NewsItem from './NewsItem';

function NewsList() {
  // Placeholder data for initial rendering
  const placeholderNews = [
    { id: 1, title: 'Breaking News 1', description: 'Description 1', source: 'Source 1' },
    { id: 2, title: 'Breaking News 2', description: 'Description 2', source: 'Source 2' },
    { id: 3, title: 'Breaking News 3', description: 'Description 3', source: 'Source 3' },
  ];

  return (
    <div className="news-list">
      {placeholderNews.map((newsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </div>
  );
}

export default NewsList;