import React from "react";

const RouterLearning = () => {
  const definition = `
React Router is a library used for navigation between different pages
in a React application without reloading the page.

It helps create a Single Page Application (SPA).
`;

  const exampleCode = `
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
`;

  return (
    <div className="bg-gray-300 min-h-screen p-4 sm:p-6 md:p-8 rounded-lg">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-500 font-bold">
        React Router
      </h1>

      {/* Introduction */}
      <p className="text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed">
        React Router is used to navigate between different pages in a React
        application.
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

export default RouterLearning;