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
    <div className="bg-gray-300 h-screen p-4 rounded-lg">
      <h1 className="text-4xl text-blue-400">Props</h1>

      <p className="text-2xl mt-4">
        Props are used to send data from a parent component to a child
        component.
      </p>

      <h2 className="text-3xl mt-6 text-green-600">
        Parent Component (App.jsx)
      </h2>
      <pre className="bg-white p-4 rounded-lg mt-2">
        <code>{parentCode}</code>
      </pre>

      <h2 className="text-3xl mt-6 text-green-600">
        Child Component (Child.jsx)
      </h2>
      <pre className="bg-white p-4 rounded-lg mt-2">
        <code>{childCode}</code>
      </pre>
    </div>
  );
};

export default Propslearning;
