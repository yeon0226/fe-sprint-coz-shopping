    // ProductCard.js
    import React from "react";
    import "./ProductCard.css";

    const ProductCard = ({ product, onClick }) => {
    return (
        <div className="product-card" onClick={onClick}>
        <div className="product-image">
            <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-category">{product.category}</p>
        </div>
        <button className="product-bookmark">{product.bookmarked ? "Bookmarked" : "Bookmark"}</button>
        </div>
    );
    };

    export default ProductCard;
