import React from "react";

const Propslearning = () => {
  const parentCode = `
import Child from "./Child";

function App() {
  return (
    <div>
      <Child name="ABC" />
    </div>
  );
}

export default App;
`;

  const childCode = `
function Child(props) {
  return <h1>Hello {props.name}</h1>;
}

export default Child;
`;

  return (
    <div className="bg-gray-300 min-h-screen p-4 sm:p-6 md:p-8 rounded-lg">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-500 font-bold">
        Props
      </h1>

      {/* Introduction */}
      <p className="text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed">
        Props are used to send data from a parent component to a child
        component.
      </p>

      {/* Parent Component */}
      <h2 className="text-2xl sm:text-3xl text-green-600 font-semibold mt-8">
        Parent Component (App.jsx)
      </h2>

      <pre className="bg-white p-4 rounded-lg mt-3 overflow-x-auto">
        <code className="text-xs sm:text-sm md:text-base whitespace-pre">
          {parentCode}
        </code>
      </pre>

      {/* Child Component */}
      <h2 className="text-2xl sm:text-3xl text-green-600 font-semibold mt-8">
        Child Component (Child.jsx)
      </h2>

      <pre className="bg-white p-4 rounded-lg mt-3 overflow-x-auto">
        <code className="text-xs sm:text-sm md:text-base whitespace-pre">
          {childCode}
        </code>
      </pre>
    </div>
  );
};

export default Propslearning;