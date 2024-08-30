'use client'

import React, { useState } from 'react'
import { Input,Button, Spacer } from '@nextui-org/react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim() != '') {
      onSearch(query)
    }
  }

  return (
    <div className='felx justify-center items-center mt-6'>
      <Input
        placeholder="Search for a repository"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Spacer x={0.5} />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  )
}

export default SearchBar