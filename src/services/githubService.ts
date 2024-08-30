import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

/**
 * Busca usuarios de GitHub utilizando la API de búsqueda de usuarios de GitHub.
 * @param query La consulta de búsqueda.
 * @returns Un objeto de respuesta de la API de GitHub con los usuarios encontrados.
 */
export const searchUsers = async (query: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users from GitHub API:', error);
    throw error;
  }
};

/**
 * Busca repositorios de GitHub utilizando la API de búsqueda de repositorios de GitHub.
 * @param query La consulta de búsqueda.
 * @returns Un objeto de respuesta de la API de GitHub con los repositorios encontrados.
 */
export const searchRepositories = async (query: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/search/repositories`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories from GitHub API:', error);
    throw error;
  }
};
