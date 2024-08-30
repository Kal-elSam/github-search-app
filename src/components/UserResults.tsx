'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Link } from '@nextui-org/react';

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface UserResultsProps {
  users: User[];
}

const UserResults: React.FC<UserResultsProps> = ({ users }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {users.map((user) => (
        <Card key={user.login} className="w-80">
          <CardHeader className="flex items-center">
            <img
              alt={user.login}
              src={user.avatar_url}
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <h4 className="font-bold">{user.login}</h4>
            </div>
          </CardHeader>
          <CardFooter>
            <Link href={user.html_url} color="primary" target="_blank" rel="noopener noreferrer">
              View Profile
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default UserResults;
