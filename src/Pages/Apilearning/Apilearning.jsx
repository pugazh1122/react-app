
import React from "react";

const ApiLearning = () => {
  const definition = `
API stands for Application Programming Interface.

An API allows two applications to communicate and exchange data.

In React, APIs are commonly used to fetch data from a server and display it in the UI.
`;

  const exampleCode = `
import React, { useState } from "react";

const Apitutorial = () => {
  const [apiResponse, setApiResponse] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setApiResponse(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-4">
      <button
        onClick={fetchUsers}
        className="bg-green-800 text-white px-4 py-2 rounded"
      >
        Fetch Users
      </button>

      {apiResponse.map((user) => (
        <div key={user.id} className="mt-4 border p-2">
          <h3>{user.name}</h3>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Apitutorial;
`;

  return (
    <div className="bg-gray-300 h-screen p-4 rounded-lg">
      <h1 className="text-4xl text-blue-400">API</h1>

      <p className="text-2xl mt-4">
        API is a way for applications to communicate and share data with each
        other.
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

export default ApiLearning;

