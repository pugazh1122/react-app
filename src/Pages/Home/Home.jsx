import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-300 h-[calc(100vh-72px)] flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500 leading-tight">
          Learn React With Pugazh
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
          Learn React step by step with simple examples.
        </p>
      </div>
    </div>
  );
};

export default Home;