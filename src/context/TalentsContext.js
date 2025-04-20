import React, { createContext, useContext } from 'react';

// Создание контекста талантов
const TalentsContext = createContext();

// Данные талантов, включая их карточки
const talentsData = [
  {
    title: 'Инстинкт',
    to: '/instinct',
    cards: [
      { id: 'radio-stability', name: 'Радио-устойчивость', description: '' },
      { id: 'Host-Protection', name: 'Защита-хозяина', description: '' },
      { id: 'Not-delicious-food', name: 'Не-вкусная-еда', description: '' },
      { id: 'Exterminationt', name: 'Истребление', description: '' },
      { id: 'The-gourmet', name: 'Гурман', description: '' },
      { id: 'Water-supply', name: 'Запас воды', description: '' },
      { id: 'Hunting-tag', name: 'Охотничья-метка', description: '' },
      { id: 'The-power-of-balance', name: 'Сила-баланса', description: '' },
      { id: 'Self-healing', name: 'Само-заживление', description: '' },
      { id: 'Revenge', name: 'Месть', description: '' },
      { id: 'Adrenaline', name: 'Адреналин', description: '' },
      { id: 'Hunter', name: 'Охотник', description: '' },
      { id: 'Backpack', name: 'Рюкзак', description: '' },
    ],
  },
  {
    title: 'Интеллект',
    to: '/intelligence',
    cards: [
      { id: 'The-Moto-maniac', name: 'Мото-маньяк', description: '' },
      { id: 'Impassable-terrain', name: 'Непроходимая-местность', description: '' },
      { id: 'Superpowered-Soldier', name: 'Супермощный-солдат', description: '' },
      { id: 'Remote-control', name: 'Дистанционное-управление', description: '' },
      
    ],
  },

  {
    title: 'Бой',
    to: '/fight',
    cards: [
      { id: 'The-Gangsterist', name: 'Ганстер', description: '' },
      { id: 'Return', name: 'Возвращение', description: '' },
      { id: 'Light-equipment', name: 'Легкое-снаряжение', description: '' },
      { id: 'Accurate-a tip', name: 'Точная-наводка', description: '' },
      
    ],
  },
  {
    title: 'Прайс',
    to: '/price',
    cards: [
      { id: 'Mind', name: 'Ум', description: '' },
      { id: 'Body', name: 'Тело', description: '' },
    ],
  },
  // Добавьте остальные таланты и их карточки
];

export const TalentsProvider = ({ children }) => (
  <TalentsContext.Provider value={talentsData}>
    {children}
  </TalentsContext.Provider>
);

export const useTalents = () => useContext(TalentsContext);
