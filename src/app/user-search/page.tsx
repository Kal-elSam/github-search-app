"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import SearchBar from "@/components/SearchBar";
import UserResults from "@/components/UserResults";
import {
  searchUsers,
  getUserDetails,
  getUserRepositories,
} from "@/services/githubService";

const UserSearch: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const router = useRouter();

  const handleSearch = async (query: string) => {
    try {
      const data = await searchUsers(query);
      const userDetails = await Promise.all(
        data.items.map(async (user: any) => {
          const details = await getUserDetails(user.login);
          const repositories = await getUserRepositories(user.login);

          // Calcular lenguajes más usados
          const languages: { [key: string]: number } = {};
          repositories.forEach((repo: any) => {
            if (repo.language) {
              languages[repo.language] = (languages[repo.language] || 0) + 1;
            }
          });

          const topLanguages = Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([language]) => language);

          return {
            ...details,
            topLanguages,
            public_repos: details.public_repos,
          };
        })
      );
      setUsers(userDetails);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Button onClick={() => router.back()} color="secondary" className="mb-4">
        Volver
      </Button>
      <h2 className="text-3xl font-bold mb-6 drop-shadow-lg">
        Buscar Usuarios de GitHub
      </h2>

      {/* Barra de búsqueda con mayor separación */}
      <div className="w-full max-w-md mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Resultados con sombras y bordes más definidos */}
      {users.length > 0 && (
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          <UserResults users={users} />
        </div>
      )}
    </div>
  );
};

export default UserSearch;
