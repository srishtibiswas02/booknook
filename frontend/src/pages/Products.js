import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { category } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product cards will be dynamically loaded here */}
      </div>
    </div>
  );
};

export default Products; 