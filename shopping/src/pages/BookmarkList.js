import React from 'react';
import BookmarkCard from '../components/BookmarkCard';

const BookmarkList = ({ bookmarkItems }) => {
  return (
    <div>
      {bookmarkItems.map((bookmark) => (
        <BookmarkCard key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
}

export default BookmarkList;
