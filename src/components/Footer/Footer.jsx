import React from 'react';
import { useNavigate } from 'react-router-dom'; // Хук для навигации
import { FaTelegramPlane } from 'react-icons/fa'; // Импорт иконки Telegram
import './Footer.css'; // Подключаем стили

const Footer = () => {
  const navigate = useNavigate(); // Инициализация навигации

  return (
    <footer className="footer">
      {/* Кнопка "Главное меню" */}
      <button
        className="main-menu-button"
        onClick={() => navigate('/')} // Переход в главное меню
      >
        Главное меню
      </button>
      
      {/* Разделительная черта */}
      <hr className="divider" />
      
      <p className="footer-text">TheHanTos чат</p>
      
      {/* Кнопка Telegram */}
      <button
        className="telegram-button"
        onClick={() => window.open('https://web.telegram.org/a/#-1001883982658', '_blank')} // Ссылка на Telegram
      >
        <FaTelegramPlane className="telegram-icon" />
      </button>
      
      <p>&copy; 2025 Команда DRAGON. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
