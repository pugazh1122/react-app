import React from "react";

const UseContextLearning = () => {
  const definition = `
useContext is a React Hook that allows us to share data between components
without passing props manually through every level.

It is mainly used to avoid prop drilling and make data available to multiple
components easily.
`;

  const exampleCode = `
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="ABC">
      <Child />
    </UserContext.Provider>
  );
}

function Child() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}

export default App;
`;

  return (
    <div className="bg-gray-300 min-h-screen p-4 sm:p-6 md:p-8 rounded-lg">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-500 font-bold">
        useContext
      </h1>

      {/* Introduction */}
      <p className="text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed">
        useContext is a React Hook used to share data between components
        without passing props at every level.
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

export default UseContextLearning;