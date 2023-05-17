    import React, { useEffect, useState } from "react";
    import ProductList from "./ProductList";

    const Main = () => {
    const [productItems, setProductItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(
            "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
            );
            const data = await response.json();
            setProductItems(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, []);

    return (
        <div>
        <h2>상품리스트</h2>
        <ProductList productItems={productItems} />
        </div>
    );
    };

    export default Main;
