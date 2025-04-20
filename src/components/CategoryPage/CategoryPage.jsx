import React from 'react';

const CategoryPage = ({ category, items }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Категория: {category}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ margin: '10px 0' }}>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
