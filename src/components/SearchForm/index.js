import React, { useState } from 'react';
import { TextInput, SearchButton, SearchContainer } from './styled';
import img from '../../Assets/SearchIcon.svg';

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
    <SearchContainer>
      <TextInput
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleCityChange}
        onKeyPress={handleKeyPress}
      />
      <SearchButton onClick={handleSearchClick}>
        <img src={img} alt="Search" />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchForm;
