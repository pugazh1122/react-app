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
    <div className="bg-gray-300 h-screen p-4 rounded-lg">
      <h1 className="text-4xl text-blue-400">useContext</h1>

      <p className="text-2xl mt-4">
        useContext is a React Hook used to share data between components
        without passing props at every level.
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

export default UseContextLearning;