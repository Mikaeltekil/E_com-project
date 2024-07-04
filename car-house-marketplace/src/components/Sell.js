import React, { useState } from 'react';

const Sell = () => {
  const [category, setCategory] = useState('car');
  const [type, setType] = useState('new');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <div>
      <h2>Sell</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="car">Car</option>
            <option value="house">House</option>
          </select>
        </div>
        {category === 'car' && (
          <div>
            <label>Type:</label>
            <select value={type} onChange={handleTypeChange}>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>
        )}
        <div>
          <label>Title:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Description:</label>
          <textarea required></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sell;
