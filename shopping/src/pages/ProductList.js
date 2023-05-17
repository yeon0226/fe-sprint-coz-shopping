import React from "react";

const ProductList = ({ productItems }) => {
  return (
    <div>
      {productItems.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
          <img src={product.image_url} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
