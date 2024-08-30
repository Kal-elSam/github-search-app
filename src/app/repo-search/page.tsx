'use client';

import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import RepoResults from '@/components/RepoResults';
import { searchRepositories } from '@/services/githubService';

const RepoSearch: React.FC = () => {
  const [repos, setRepos] = useState([]);

  const handleSearch = async (query: string) => {
    try {
      const data = await searchRepositories(query);
      setRepos(data.items);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Buscar Repositorios de GitHub</h2>
      <SearchBar onSearch={handleSearch} />
      {repos.length > 0 && (
        <div className="mt-8 w-full max-w-3xl">
          <RepoResults repositories={repos} />
        </div>
      )}
    </div>
  );
};

export default RepoSearch;
