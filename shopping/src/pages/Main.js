    import React, { useEffect, useState } from "react";
    import "./Main.css";
    import ProductList from "./ProductList";


    const Main = () => {
    const [productItems, setProductItems] = useState([]);

        useEffect(() => {
            fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
            .then((res) => res.json())
            .then((data) => setProductItems(data));
        }, []);

    return (
        <div className='wrap'>
            <div className='content'>
                <div className='product-list'>
                <h2 className='product-title'>상품리스트</h2>
                <ProductList productItems={productItems} />
                </div>
            </div>
        </div>
    );
    };

    export default Main;
