import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			welcome: "Welcome",
			changeLanguage: "Change Language",
		},
	},
	es: {
		translation: {
			welcome: "Bienvenido",
			changeLanguage: "Cambiar idioma",
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: localStorage.getItem("languaje") === "true" ? "es" : "en", // Detecta el idioma guardado
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
