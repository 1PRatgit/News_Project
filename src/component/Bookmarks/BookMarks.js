import React, { useState, useEffect } from 'react';

const BookMarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedArticles')) || [];
    setBookmarks(storedBookmarks);
  }, []);

  const handleRemoveBookmark = (title) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.title !== title);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarkedArticles', JSON.stringify(updatedBookmarks));
  };

  return (
    <div className='container'>
      <h2>Bookmarks</h2>
      {bookmarks.length > 0 ? (
         <ul className="list-group">
          {bookmarks.map((bookmark) => (
             <li key={bookmark.title} className="list-group-item d-flex justify-content-between align-items-center">
                
              <a href={bookmark.url}>{bookmark.title}</a>
              <button  className="btn btn-danger" onClick={() => handleRemoveBookmark(bookmark.title)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookmarks found.</p>
      )}
    </div>
  );
};

export default BookMarks;