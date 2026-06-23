
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
    <div className="bg-gray-300 h-screen p-4 rounded-lg">
      <h1 className="text-4xl text-blue-400">React Router</h1>

      <p className="text-2xl mt-4">
        React Router is used to navigate between different pages in a React
        application.
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

export default RouterLearning;

