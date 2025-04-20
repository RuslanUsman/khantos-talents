import React from 'react';
import { useParams } from 'react-router-dom'; // Удален компонент Link
import './TalentDetails.css';

const TalentDetails = ({ items }) => {
  const { id } = useParams();
  const talent = items.find((item) => item.id === id);

  if (!talent) {
    return (
      <div className="talent-details">
        <h1>Талант не найден</h1>
        <p>Вернитесь в главное меню вручную.</p> {/* Заменено сообщение */}
      </div>
    );
  }

  return (
    <div className="talent-details">
      <h1>{talent.name}</h1>
      <img src={talent.image} alt={talent.name} className="talent-image" />
      <p>{talent.description}</p>
    </div>
  );
};

export default TalentDetails;
