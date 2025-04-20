import React from 'react';
import { useParams } from 'react-router-dom';

const InfoPage = ({ items }) => {
  const { id } = useParams();
  const item = items.find(item => item.id === id);

  if (!item) {
    return <p>Элемент не найден!</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Информация о: {item.name}</h2>
      <img src={item.image} alt={item.name} style={{ width: '150px', height: '150px' }} />
      <p>{item.description}</p>
    </div>
  );
};

export default InfoPage;
