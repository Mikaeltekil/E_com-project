import React from 'react';
import { useParams } from 'react-router-dom';

const HouseDetails = () => {
  const { id } = useParams();
  // Fetch house details using the id
  return (
    <div>
      <h2>House Details</h2>
      <p>Details for house with ID: {id}</p>
    </div>
  );
};

export default HouseDetails;
