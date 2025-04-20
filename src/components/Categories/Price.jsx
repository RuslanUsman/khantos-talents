import React from 'react';
import '../../styles/price.css';
import '../../styles/common.css';

const Price = () => {
  const items = [
    { 
      id: 'Mind', 
      name: 'Ум', 
      image: process.env.PUBLIC_URL + '/images/um.jpg', 
      description: 'Чтобы прокачать свой ум, вам понадобится 29,696 торговых тикетов. Стоимость одной банки Микстуры ума составляет всего 29 тикетов или, если хотите, 20 очков талантов. Мудрость ждёт вас!',
      additionalImages: [
        process.env.PUBLIC_URL + '/images/umList.jpg',
      ],
    },
    { 
      id: 'Body', 
      name: 'Тело', 
      image: process.env.PUBLIC_URL + '/images/telo.jpg', 
      description: 'Чтобы достичь полной прокачки тела, вам потребуется 40,474 торговых тикетов. Стоимость одной банки Микстуры ума составляет 59 тикетов или 30 очков талантов. Ваш путь к максимальной физической мощи начинается здесь!',
      additionalImages: [
        process.env.PUBLIC_URL + '/images/teloList.jpg',
      ],
    },
  ];

  return (
    <div className="container">
      <h2>Категория: Цена</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {/* Отображение дополнительных изображений */}
            <div className="additional-images">
              {item.additionalImages.map((img, index) => (
                <img key={index} src={img} alt={`Дополнительное изображение для ${item.name}`} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Price;
