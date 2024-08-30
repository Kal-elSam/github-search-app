'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Link, Avatar, Divider } from '@nextui-org/react';
import { FaFolderOpen, FaCode } from 'react-icons/fa';

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  location?: string;
  public_repos?: number;
  topLanguages?: string[];
}

interface UserResultsProps {
  users: User[];
}

const UserResults: React.FC<UserResultsProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <Card
          key={user.login}
          className="shadow-lg border border-gray-700 rounded-xl bg-gray-800 hover:bg-gray-700 transform transition-transform duration-300 hover:scale-105"
          isHoverable
          isPressable
        >
          {/* Encabezado de Mini Browser */}
          <div className="flex items-center justify-between p-2 bg-gray-900 rounded-t-xl w-full">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-xs text-gray-400 font-mono pl-2">{user.login}</span>
            <div className="flex-1"></div>
          </div>

          <CardHeader className="flex items-center p-4 w-full">
            <Avatar
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full border border-gray-600 shadow-sm"
            />
            <div className="ml-4">
              <h4 className="text-white text-lg font-semibold mb-1">{user.name || user.login}</h4>
              {user.location && <p className="text-sm text-gray-400">{user.location}</p>}
            </div>
          </CardHeader>

          <Divider className="bg-gray-600" />

          <CardBody className="p-4 w-full space-y-2">
            {user.public_repos !== undefined && (
              <div className="flex items-center space-x-2">
                <FaFolderOpen className="text-blue-400" />
                <p className="text-gray-400">Repositorios: {user.public_repos}</p>
              </div>
            )}
            {user.topLanguages && user.topLanguages.length > 0 && (
              <div className="flex items-center space-x-2">
                <FaCode className="text-green-400" />
                <p className="text-gray-400">Tecnologías: {user.topLanguages.join(', ')}</p>
              </div>
            )}
          </CardBody>

          <CardFooter className="flex justify-center p-4 bg-gray-900 rounded-b-xl w-full">
            <Link
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              Ver Perfil
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default UserResults;
