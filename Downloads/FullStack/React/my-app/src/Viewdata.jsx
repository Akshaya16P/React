import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Viewdata.css';

function Viewdata({ products }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filterSize, setFilterSize] = useState('');

  const filtered = products.filter((item) => {
    const matchesName = item.productName.toLowerCase().includes(search.toLowerCase());
    const matchesSize = filterSize ? item.size === filterSize : true;
    return matchesName && matchesSize;
  });

  return (
    <div className="view-container">
      <h2>Product List</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filterSize} onChange={(e) => setFilterSize(e.target.value)}>
          <option value="">All Sizes</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
      </div>

      <div className="card-container">
        {filtered.length === 0 ? (
          <p>No matching products found.</p>
        ) : (
          filtered.map((item, index) => (
            <div
              key={index}
              className="card"
              onClick={() => navigate(`/product/${index}`)}
            >
              {item.image && (
                <img
                  src={URL.createObjectURL(item.image)}
                  alt={item.productName}
                  className="product-img"
                />
              )}
              <h3>{item.productName}</h3>
              <p>₹{item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Viewdata;
