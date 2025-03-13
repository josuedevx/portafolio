import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTextHeight, faTextSlash } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./styles/languaje.css";

const Languaje = () => { 

    const { i18n, t } = useTranslation();

    const [languaje, setLanguaje] = useState(() => {
        return localStorage.getItem("languaje") === "true";
    });

    useEffect(() => {
        localStorage.setItem("languaje", languaje);
        i18n.changeLanguage(languaje ? "es" : "en");
      }, [languaje, i18n]);

    return (
        <Tippy content={t("changeLanguage")} placement="left">
            <button
                className="floating-btn-languaje"
                onClick={() => setLanguaje(!languaje)}
            >
                <FontAwesomeIcon icon={languaje ? faTextHeight : faTextSlash} />
            </button>
        </Tippy>
    );

};

export default Languaje;
