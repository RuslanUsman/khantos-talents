import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  const navigate = useNavigate();

  const buttons = [
    { text: 'Инстинкт', to: '/instinct' },
    { text: 'Интеллект', to: '/intelligence' },
    { text: 'Бой', to: '/fight' },
    { text: 'Прайс лист', to: '/price' },
    { text: 'Сборка', to: '/assembling' },
    { text: 'Видео', to: '/videos' },
  ];

  return (
    <div className="main-menu">
      <h1 className="menu-title">Добро пожаловать в Talents Last</h1>
      <div className="menu-column">
        {buttons.map((button, index) => (
          <button 
            key={index} 
            className="menu-button" 
            onClick={() => navigate(button.to)}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
