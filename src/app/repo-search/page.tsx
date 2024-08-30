'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import RepoResults from '@/components/RepoResults';
import { searchRepositories } from '@/services/githubService';

const RepoSearch: React.FC = () => {
  const [repos, setRepos] = useState([]);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const router = useRouter();

  const handleSearch = async (query: string) => {
    try {
      const data = await searchRepositories(query);
      setRepos(data.items);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative">
      {/* Botón de Volver */}
      <Button
        color="secondary"
        className="mb-4"
        onClick={() => router.back()}
      >
        Volver
      </Button>

      {/* Título estilizado */}
      <h2 className="text-3xl font-bold mb-6 drop-shadow-lg">
        Buscar Repositorios de GitHub
      </h2>

      {/* Barra de búsqueda con mayor separación */}
      <div className="w-full max-w-md mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Resultados de búsqueda estilizados */}
      {repos.length > 0 && (
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RepoResults repositories={repos} />
        </div>
      )}

      {/* Botón "Volver al Top" */}
      {showScrollTopButton && (
        <Button
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 shadow-lg"
          onClick={scrollToTop}
        >
          ↑ Volver al Top
        </Button>
      )}
    </div>
  );
};

export default RepoSearch;
