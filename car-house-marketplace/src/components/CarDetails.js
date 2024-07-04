import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  // Fetch car details using the id
  return (
    <div>
      <h2>Car Details</h2>
      <p>Details for car with ID: {id}</p>
    </div>
  );
};

export default CarDetails;
