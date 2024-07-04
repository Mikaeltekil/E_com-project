import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Buy = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const cars = await api.get('/cars/');
        const houses = await api.get('/houses/');
        setItems([...cars.data, ...houses.data]);
      } catch (error) {
        console.error('Failed to fetch items', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Buy</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/buy/${item.type}/${item.id}`}>{item.title}</Link> - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buy;
