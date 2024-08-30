"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

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
    <>
      {repositories.map((repo) => (
        <Card
          key={repo.id}
          className="w-full shadow-lg border border-gray-700 rounded-xl bg-gray-800 hover:bg-gray-700 transform transition-transform duration-300 hover:scale-105"
          isPressable
        >
          {/* Encabezado tipo "browser" */}
          <div className="flex items-center justify-between p-2 bg-gray-900 rounded-t-xl w-full">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-xs text-gray-400 font-mono pl-2">
              {repo.name}
            </span>
            <div className="flex-1"></div>
          </div>

          <CardHeader className="flex items-center justify-between p-4">
            <h4 className="text-white font-semibold">{repo.name}</h4>
            <div className="flex items-center text-yellow-500">
              <FaStar className="mr-1" />
              <span className="text-sm">{repo.stargazers_count}</span>
            </div>
          </CardHeader>

          <CardBody className="p-4">
            <p className="text-sm text-gray-400">
              {repo.description || "No description available."}
            </p>
          </CardBody>

          <CardFooter className="flex justify-center p-4 bg-gray-900 rounded-b-xl">
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              View Repository
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default RepoResults;
