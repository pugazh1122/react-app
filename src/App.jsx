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

/* ================= NAVBAR ================= */

function Navbar() {
  const navigate = useNavigate();
  const [showHooks, setShowHooks] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navButton =
    "w-full sm:w-auto text-base sm:text-lg md:text-xl text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-800 transition";

  const dropdownButton =
    "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 w-full text-left";

  return (
    <div className="bg-gray-300 p-4">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3">

        {/* Home */}
        <button onClick={() => navigate("/Home")} className={navButton}>
          Home
        </button>

        {/* Props */}
        <button
          onClick={() => navigate("/Propslearning")}
          className={navButton}
        >
          Props
        </button>

        {/* Hooks Dropdown */}
        <div className="relative w-full sm:w-auto" ref={dropdownRef}>
          <button
            onClick={() => setShowHooks(!showHooks)}
            className={navButton}
          >
            Hooks
          </button>

          {showHooks && (
            <div className="absolute left-0 sm:left-0 mt-2 w-full sm:min-w-[180px] bg-white rounded-lg shadow-lg z-50 p-2 flex flex-col gap-2">

              <button
                onClick={() => {
                  navigate("/Usestatelearning");
                  setShowHooks(false);
                }}
                className={dropdownButton}
              >
                useState
              </button>

              <button
                onClick={() => {
                  navigate("/Useeffectlearning");
                  setShowHooks(false);
                }}
                className={dropdownButton}
              >
                useEffect
              </button>

              <button
                onClick={() => {
                  navigate("/Usenavigatelearning");
                  setShowHooks(false);
                }}
                className={dropdownButton}
              >
                useNavigate
              </button>

              <button
                onClick={() => {
                  navigate("/Usecontextlearning");
                  setShowHooks(false);
                }}
                className={dropdownButton}
              >
                useContext
              </button>
            </div>
          )}
        </div>

        {/* API */}
        <button
          onClick={() => navigate("/Apilearning")}
          className={navButton}
        >
          API
        </button>

        {/* Router */}
        <button
          onClick={() => navigate("/Router")}
          className={navButton}
        >
          Router
        </button>
      </div>
    </div>
  );
}

/* ================= APP ================= */

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
        <Route path="/Usenavigatelearning" element={<Usenavigatelearning />} />
        <Route path="/Usecontextlearning" element={<Usecontextlearning />} />
        <Route path="/Apilearning" element={<Apilearning />} />
        <Route path="/Router" element={<Router />} />
      </Routes>
    </>
  );
};

export default App;