import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city) {
      onSearch(city);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && city) {
      onSearch(city);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleCityChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchForm;
