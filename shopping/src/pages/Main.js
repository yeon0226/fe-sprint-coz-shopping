import React, { useState, useEffect } from "react";
import "./Main.css";

import BookmarkList from "./BookmarkList";
import ProductCard from '../components/ProductCard';

const Main = () => {
const [productItems, setProductItems] = useState([]);
const [bookmarkItems, setBookmarkItems] = useState([]);

useEffect(() => {
// API 호출을 통해 상품 데이터 가져오기
fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
    .then((res) => res.json())
    .then((data) => setProductItems(data));

// 브라우저의 DB에서 북마크된 상품 데이터 가져오기
const bookmarkData = localStorage.getItem("bookmark");
if (bookmarkData) {
    setBookmarkItems(JSON.parse(bookmarkData));
}
}, []);

return (
<div className="wrap">
    <div className="content">
    <div className="product-list">
        <h2 className="product-title">상품 리스트</h2>
        <div className="product-grid">
        {productItems.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
    </div>
    <div className="product-list">
        <h2 className="product-title">북마크 리스트</h2>
        <div className="product-grid">
        <BookmarkList bookmarkItems={bookmarkItems} />
        </div>
    </div>
    </div>
</div>
);
};

export default Main;