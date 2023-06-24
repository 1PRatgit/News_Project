import React, { useState, useEffect } from 'react';

const AddBookMark = ({ articleTitle, articleUrl }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles')) || [];
    setIsBookmarked(bookmarkedArticles.some(article => article.title === articleTitle));
  }, [articleTitle]);

  useEffect(() => {
    const bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles')) || [];
    const updatedArticles = bookmarkedArticles.map(article => ({ ...article }));

    const existingArticleIndex = updatedArticles.findIndex(article => article.title === articleTitle);

    if (isBookmarked) {
      if (existingArticleIndex === -1) {
        updatedArticles.push({ title: articleTitle, url: articleUrl });
      }
    } else {
      if (existingArticleIndex !== -1) {
        updatedArticles.splice(existingArticleIndex, 1);
      }
    }

    localStorage.setItem('bookmarkedArticles', JSON.stringify(updatedArticles));
  }, [articleTitle, articleUrl, isBookmarked]);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      onClick={handleBookmarkClick}
      style={{
        backgroundColor: isBookmarked ? 'orange' : 'transparent',
        color: isBookmarked ? 'white' : 'black',
        border: 'none',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
      <i className={`fas fa-bookmark ${isBookmarked ? 'bookmarked' : ''}`} />
    </button>
  );
};

export default AddBookMark;
