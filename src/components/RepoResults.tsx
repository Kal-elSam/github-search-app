'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Link } from '@nextui-org/react';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

interface RepoResultsProps {
  repositories: Repository[];
}

const RepoResults: React.FC<RepoResultsProps> = ({ repositories }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {repositories.map((repo) => (
        <Card key={repo.id} className="w-80">
          <CardHeader>
            <h4 className="font-bold">{repo.name}</h4>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-gray-600">{repo.description}</p>
          </CardBody>
          <CardFooter>
            <Link href={repo.html_url} color="primary" target="_blank" rel="noopener noreferrer">
              View Repository
            </Link>
            <span className="text-sm text-gray-500 ml-2">⭐ {repo.stargazers_count}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default RepoResults;
