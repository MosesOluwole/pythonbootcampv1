import React from "react";
import Navbar from "./components/Navbar";


const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Python Bootcamp</h1>
        <p className="text-lg text-center mb-8">
          Learn Python from scratch with our immersive bootcamp.
        </p>
        <a
          href="/curriculum"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View Curriculum
        </a>
      </div>
    </>
  );
};

export default Home;