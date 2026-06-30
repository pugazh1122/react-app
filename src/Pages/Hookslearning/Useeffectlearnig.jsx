import React from "react";

const UseEffectLearning = () => {
  const definition = `
useEffect is a React Hook used to perform side effects in a functional component.

It runs after the component renders and is commonly used for fetching data,
calling APIs, setting timers, and updating the DOM.
`;

  const exampleCode = `
import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Example;
`;

  return (
    <div className="bg-gray-300 min-h-screen p-4 sm:p-6 md:p-8 rounded-lg">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-500 font-bold">
        useEffect
      </h1>

      {/* Introduction */}
      <p className="text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed">
        useEffect is a React Hook used to perform side effects after a component
        renders.
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

export default UseEffectLearning;