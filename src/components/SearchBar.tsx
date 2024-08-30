'use client';

import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <Input
        isClearable
        variant="bordered"
        placeholder="Buscar en GitHub"
        size="lg"
        value={query}
        onValueChange={setQuery}
        onKeyDown={handleKeyDown}
        className="max-w-xs md:max-w-md mr-4"
      />
      <Button
        onPress={handleSearch}
        variant="flat"
        className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 shadow-lg transform transition-transform duration-300 hover:scale-105"
      >
        Buscar
      </Button>
    </div>
  );
};

export default SearchBar;
