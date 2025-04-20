import React from 'react';

import './VideoPage.css'; // Импорт файла стилей

const VideoPage = () => {
  return (
    <div className="video-page">
      <h1 className="video-title">Делаем сброс</h1>
      
      <video 
        controls
        className="video-player"
      >
        <source src={process.env.PUBLIC_URL + '/images/sbros.mp4'} type="video/mp4" />
        Ваш браузер не поддерживает видеофайлы.
      </video>
      
      {/* Описание под видео */}
      <p className="video-description">Пример работы карты сброса талантов:

Карта сброса талантов позволяет пользователю перераспределить свои ресурсы, сохраняя достигнутый прогресс. После активации карты все ранее открытые таланты останутся доступными, и вам не придется заново проходить уровень для их пробуждения. Это исключает повторное выполнение испытаний, сэкономив ваше время и усилия, а также позволяет гибко адаптировать вашу стратегию к новым вызовам. Карта сброса — идеальный инструмент для оптимизации и настройки вашей игровой тактики. .</p>
      
      <div className="button-container">
       
      </div>
    </div>
  );
};

export default VideoPage;
