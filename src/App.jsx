import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Propslearning from "./Pages/Propslearning/Propslearning";
import Usestatelearning from "./Pages/Hookslearning/Usestatelearning";
import Useeffectlearnig from "./Pages/Hookslearning/Useeffectlearnig";
import Usenavigatelearning from "./Pages/Hookslearning/Usenavigatelearning";
import Usecontextlearning from "./Pages/Hookslearning/Usecontextlearning";
import Apilearning from "./Pages/Apilearning/Apilearning";
import Router from "./Pages/Router/Router";

function Navbar() {
  const navigate = useNavigate();
  const [showHooks, setShowHooks] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowHooks(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row flex justify-center gap-3 p-4 bg-gray-300">
      <button
        onClick={() => navigate("/Home")}
        className="text-xl text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-800 cursor-pointer"
      >
        Home
      </button>

      <button
        onClick={() => navigate("/Propslearning")}
        className="text-xl text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-800 cursor-pointer"
      >
        Props
      </button>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowHooks(!showHooks)}
          className="text-xl text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-800 cursor-pointer"
        >
          Hooks
        </button>

        {showHooks && (
          <div className="absolute left-0 right-0 sm:right-auto mt-2 flex flex-col gap-2 bg-white p-2 rounded-lg shadow-lg z-50 min-w-[180px]">
            <button
              onClick={() => navigate("/Usestatelearning")}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
            >
              useState
            </button>

            <button
              onClick={() => navigate("/Useeffectlearning")}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
            >
              useEffect
            </button>

            <button
              onClick={() => navigate("/Usenavigatelearning")}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
            >
              useNavigate
            </button>

            <button
              onClick={() => navigate("/Usecontextlearning")}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
            >
              useContext
            </button>
          </div>
        )}
      </div>

      <button
        onClick={() => navigate("/Apilearning")}
        className="text-xl text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-800 cursor-pointer"
      >
        API
      </button>

      <button
        onClick={() => navigate("/Router")}
        className="text-xl text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-800 cursor-pointer"
      >
        Router
      </button>
    </div>
  );
}

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/Propslearning" element={<Propslearning />} />
        <Route path="/Usestatelearning" element={<Usestatelearning />} />
        <Route path="/Useeffectlearning" element={<Useeffectlearnig />} />
        <Route
          path="/Usenavigatelearning"
          element={<Usenavigatelearning />}
        />
        <Route
          path="/Usecontextlearning"
          element={<Usecontextlearning />}
        />
        <Route path="/Apilearning" element={<Apilearning />} />
        <Route path="/Router" element={<Router />} />
      </Routes>
    </>
  );
};

export default App;