import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./styles/dark.css";

const DarkMode = () => {
	const [darkMode, setDarkMode] = useState(() => {
		return localStorage.getItem("darkMode") === "true";
	});

	useEffect(() => {
		document.body.classList.toggle("dark-mode", darkMode);
		localStorage.setItem("darkMode", darkMode);
	}, [darkMode]);

	return (
        <Tippy content={darkMode ? "Modo claro" : "Modo oscuro"} placement="left">
          <button
            className="floating-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </Tippy>
      );
    };

export default DarkMode;
