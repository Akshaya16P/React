import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Forms({ onAddProduct }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: '',
    brand: '',
    size: '',
    image: null,
    price: '',
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({ ...formData, [id]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData);
    navigate('/Viewdata');
  };

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit}>
        <h2>Add Product Details</h2>

        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            placeholder="Slim Fit Jeans"
            required
            value={formData.productName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            placeholder="Adidas, H&M"
            required
            value={formData.brand}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Size:</label>
          <select id="size" required value={formData.size} onChange={handleChange}>
            <option value="">Select size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            placeholder="0.00"
            required
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
          <button
            type="reset"
            onClick={() =>
              setFormData({ productName: '', brand: '', size: '', image: null, price: '' })
            }
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
