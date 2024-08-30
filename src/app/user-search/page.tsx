'use client';

import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import UserResults from '@/components/UserResults';
import { searchUsers } from '@/services/githubService';

const UserSearch: React.FC = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query: string) => {
    try {
      const data = await searchUsers(query);
      setUsers(data.items);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Buscar Usuarios de GitHub</h2>
      <SearchBar onSearch={handleSearch} />
      {users.length > 0 && (
        <div className="mt-8 w-full max-w-3xl">
          <UserResults users={users} />
        </div>
      )}
    </div>
  );
};

export default UserSearch;
