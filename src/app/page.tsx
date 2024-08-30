"use client";

import React from "react";
import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";
import { FaUser, FaBook, FaGithub } from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-900 via-gray-800 to-black p-6">
      {/* Icono de GitHub con mayor tamaño */}
      <FaGithub className="text-8xl mb-6 text-white drop-shadow-lg" />

      {/* Título estilizado */}
      <h1 className="text-5xl font-extrabold text-white mb-8 tracking-tight drop-shadow-lg">
        GitHub Search
      </h1>

      {/* Botón para buscar usuarios */}
      <Link href="/user-search" passHref>
        <Button
          color="primary"
          className="mb-4 w-64 shadow-lg transform transition-transform duration-300 hover:scale-105"
          startContent={<FaUser className="text-white" />}
        >
          Buscar Usuarios
        </Button>
      </Link>

      <Spacer y={1} />

      {/* Botón para buscar repositorios */}
      <Link href="/repo-search" passHref>
        <Button
          color="success"
          className="w-64 shadow-lg transform transition-transform duration-300 hover:scale-105"
          startContent={<FaBook className="text-white" />}
        >
          Buscar Repositorios
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
