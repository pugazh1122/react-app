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
    <div className="bg-gray-300 h-screen p-4 rounded-lg">
      <h1 className="text-4xl text-blue-400">useNavigate</h1>

      <p className="text-2xl mt-4">
        useNavigate is a React Router Hook used to move from one page to
        another page programmatically.
      </p>

      <h2 className="text-3xl mt-6 text-green-600">
        Interview Definition
      </h2>
      <pre className="bg-white p-4 rounded-lg mt-2">
        <code>{definition}</code>
      </pre>

      <h2 className="text-3xl mt-6 text-green-600">
        Simple Example
      </h2>
      <pre className="bg-white p-4 rounded-lg mt-2">
        <code>{exampleCode}</code>
      </pre>
    </div>
  );
};

export default UseNavigationLearning;