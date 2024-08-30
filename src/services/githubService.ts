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
 * Obtiene detalles completos de un usuario de GitHub utilizando la API de usuarios de GitHub.
 * @param username El nombre de usuario de GitHub.
 * @returns Un objeto de respuesta de la API de GitHub con los detalles del usuario.
 */
export const getUserDetails = async (username: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details from GitHub API:', error);
    throw error;
  }
};

/**
 * Obtiene todos los repositorios públicos de un usuario de GitHub.
 * @param username El nombre de usuario de GitHub.
 * @returns Un arreglo de repositorios públicos del usuario.
 */
export const getUserRepositories = async (username: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user repositories from GitHub API:', error);
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

