import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Check if the Enter key was pressed
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress} // Add the event listener for Enter key press
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
