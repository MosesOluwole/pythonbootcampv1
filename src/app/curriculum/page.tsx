import React from "react";
import Navbar from "../components/Navbar";


const Curriculum: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Bootcamp Curriculum</h1>
        <ul className="list-disc ml-5 space-y-3">
          <li>Introduction to Python</li>
          <li>Data Types and Variables</li>
          <li>Control Flow and Loops</li>
          <li>Functions and Modules</li>
          <li>Object-Oriented Programming</li>
          <li>Working with Files</li>
          <li>Error Handling</li>
          <li>Introduction to Web Development with Flask</li>
        </ul>
      </div>
    </>
  );
};

export default Curriculum;