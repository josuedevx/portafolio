import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import usaFlag from "../../assets/usa-flag.webp";
import mexFlag from "../../assets/mexico-flag.png";
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
				<img
					src={languaje ? mexFlag : usaFlag}
					alt="flag"
					className="img-languaje"
				/>
			</button>
		</Tippy>
	);
};

export default Languaje;
