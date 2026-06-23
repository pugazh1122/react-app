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
    <div className="bg-gray-300 h-screen p-4 rounded-lg">
      <h1 className="text-4xl text-blue-400">useEffect</h1>

      <p className="text-2xl mt-4">
        useEffect is a React Hook used to perform side effects after a
        component renders.
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

export default UseEffectLearning;