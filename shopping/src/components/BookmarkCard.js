import React from "react";
import "./BookmarkCard.css";

const BookmarkCard = ({ bookmark }) => {
return (
<div className="bookmark-card">
    <div className="bookmark-image">
    <img src={bookmark.image} alt={bookmark.title} />
    </div>
    <div className="bookmark-info">
    <h2 className="bookmark-title">{bookmark.title}</h2>
    <p className="bookmark-category">{bookmark.category}</p>
    <button className="bookmark-icon">☆</button>
    </div>
</div>
);
};

export default BookmarkCard;