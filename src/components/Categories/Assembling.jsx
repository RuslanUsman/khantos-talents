import React from 'react';

import '../../styles/assembling.css';
import '../../styles/common.css';

const Assembling = () => {
  const items = [
    { id: 'Ephesus', name: 'Сборка на Эфес', image: process.env.PUBLIC_URL + '/images/efes.jpg', description: 'ИНСТИНКТ-(ветка 25 Сила баланса, ветка 34 Адреналин).  ИНТЕЛЛЕКТ-(ветка 2 Домашний, ветка 11 Непроходимая местность, ветка 19 Энергоблок, ветка 21 Дом, ветка 40 Разобрать).  БОЙ-(ветка 12 Ганстер, ветка 20 Специалист-подрывник, ветка 23 Легкое-снаряжение).' },
  ];

  return (
    <div className="container">
      <h2>Категория: Сборка</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assembling;
