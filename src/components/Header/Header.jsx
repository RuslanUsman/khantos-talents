import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim()) {
      const matches = items.filter((item) =>
        item.name.toLowerCase().includes(query) // Фильтрация по совпадению имени
      );
      setFilteredResults(matches);
    } else {
      setFilteredResults([]); // Очистка результатов, если поле пустое
    }
  };

  const handleSearch = (result) => {
    navigate(`/talent/${result.id}`); // Переход на страницу описания таланта
    setSearchQuery('');
    setFilteredResults([]);
  };

  return (
    <header className="header">
      <h1 className="header-title">TheHanTos</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск карточки..."
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
        {filteredResults.length > 0 && (
          <ul className="suggestions-list">
            {filteredResults.map((result) => (
              <li
                key={result.id}
                onClick={() => handleSearch(result)}
                className="suggestion-item"
              >
                {result.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
