import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold text-xl">Python Bootcamp</div>
        <div className="flex space-x-4">
          <Link href="/">
            <a className="text-gray-300 hover:text-white">Home</a>
          </Link>
          <Link href="/curriculum">
            <a className="text-gray-300 hover:text-white">Curriculum</a>
          </Link>
          <Link href="/enroll">
            <a className="text-gray-300 hover:text-white">Enroll</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;