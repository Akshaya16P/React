import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        {product.image && (
          <img
            src={URL.createObjectURL(product.image)}
            alt={product.productName}
            className="details-img"
          />
        )}
        <h2>{product.productName}</h2>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Size:</strong> {product.size}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
