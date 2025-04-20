import React from 'react';

import '../../styles/intelligence.css';
import '../../styles/common.css';

const Intelligence = () => {
  const items = [
    { id: 'The-Moto-maniac', name: 'Мото-маньяк', image: process.env.PUBLIC_URL + '/images/moto.jpg', description: 'Талант "Мото-маньяк" требует от вас преодолеть 100,000 метров на любом виде транспорта. Это испытание проверяет вашу выносливость, любовь к скорости и способность покорять расстояния. Станьте настоящим мастером движения!' },
    { id: 'Impassable-terrain', name: 'Непроходимая-местность', image: process.env.PUBLIC_URL + '/images/neprohodimestnost.jpg', description: 'Талант "Непроходимая местность" требует выполнения следующего задания: уничтожить двух монстров. Это испытание проверяет вашу смелость и боевые навыки в условиях, где вы сталкиваетесь с опасными существами. Станьте мастером выживания, преодолев все трудности!' },
    { id: 'Superpowered-Soldier', name: 'Супермощный-солдат', image: process.env.PUBLIC_URL + '/images/supersaldat.jpg', description: 'Талант "Супермощный солдат" требует нанесения 3000 единиц урона, используя Энергопатроны. Это испытание демонстрирует вашу способность эффективно использовать продвинутые боеприпасы и наносить мощные удары. Пусть ваша сила приведёт вас к победе!' },
    { id: 'Remote-control', name: 'Дистанционное-управление', image: process.env.PUBLIC_URL + '/images/distanupravleniy.jpg', description: 'Талант "Дистанционное управление" требует уничтожить 30 игроков, используя Меха. Это испытание демонстрирует вашу способность мастерски управлять высокотехнологичным боевым устройством и эффективно использовать его в бою. Докажите своё превосходство на поле боя!' },
  ];

  return (
    <div className="container">
      <h2>Категория: Интеллект</h2>
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

export default Intelligence;
