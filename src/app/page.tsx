'use client';

import React from "react";
import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";
import { FaUser, FaBook, FaGithub } from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <FaGithub className="text-6xl mb-4" />
      <h1 className="text-4xl font-bold mb-6">GitHub Search</h1>
      {/* Link envuelve el Button para asegurar la navegación */}
      <Link href="/user-search" passHref>
        <Button
          as="a"
          color="primary"
          startContent={<FaUser className="text-white" />}
        >
          Buscar Usuarios
        </Button>
      </Link>
      <Spacer y={1} />
      <Link href="/repo-search" passHref>
        <Button
          as="a"
          color="success"
          startContent={<FaBook className="text-white" />}
        >
          Buscar Repositorios
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
