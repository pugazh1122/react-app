import React from "react";

const UseNavigationLearning = () => {
  const definition = `
useNavigate is a React Router Hook used to navigate between pages
programmatically.

It allows us to move to another route when a button is clicked,
a form is submitted, or any event occurs.
`;

  const exampleCode = `
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={goToAbout}>
        Go to About Page
      </button>
    </div>
  );
}

export default Home;
`;

  return (
    <div className="bg-gray-300 min-h-screen p-4 sm:p-6 md:p-8 rounded-lg">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-500 font-bold">
        useNavigate
      </h1>

      {/* Introduction */}
      <p className="text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed">
        useNavigate is a React Router Hook used to move from one page to
        another page programmatically.
      </p>

      {/* Interview Definition */}
      <h2 className="text-2xl sm:text-3xl text-green-600 font-semibold mt-8">
        Interview Definition
      </h2>

      <pre className="bg-white p-4 rounded-lg mt-3 overflow-x-auto">
        <code className="text-sm sm:text-base whitespace-pre">
          {definition}
        </code>
      </pre>

      {/* Example */}
      <h2 className="text-2xl sm:text-3xl text-green-600 font-semibold mt-8">
        Simple Example
      </h2>

      <pre className="bg-white p-4 rounded-lg mt-3 overflow-x-auto">
        <code className="text-xs sm:text-sm md:text-base whitespace-pre">
          {exampleCode}
        </code>
      </pre>
    </div>
  );
};

export default UseNavigationLearning;