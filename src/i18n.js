import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import INFO from "./data/user";

const resources = {
	en: {
		translation: {
			welcome: "Welcome",
			changeLanguage: "Change Language",
			aboutTitle: "Order and collaboration is my superpower 🤝🏻",
			aboutDescription: `
				I am a highly adaptable professional, capable of integrating 
				quickly into any environment and focusing on achieving proposed goals.
				I have experience in various programming languages, such as 
				<strong>TypeScript, JavaScript, and PHP</strong>, which allows me 
				to provide robust and versatile technical solutions.
				
				My <strong>passion for software development and systems analysis</strong> 
				drives me to constantly seek opportunities where I can apply my knowledge 
				and continue growing in these areas. I am always ready to take on new 
				challenges and contribute to the success of innovative projects. 🚀
			`,
			contactTitle:
				"Let's get in touch: Let's turn ideas into reality! 📞",
			contactDescription: `
				<strong>Thank you for your interest in contacting me.</strong>  
				I truly appreciate your feedback, questions, and suggestions.  
				If you have a specific inquiry, feel free to send me an email by clicking  
				<a href="mailto:{{email}}">here</a>.  

				I strive to respond to all messages within 24 hours, but during high-demand  
				periods, it might take a bit longer.  

				If you prefer to connect via social media, you can find me on  
				<a href="{{linkedin}}" target="_blank" rel="noreferrer">LinkedIn</a>  
				or through my social media list, where I share updates and engage with my network.  
				Don't hesitate to reach out; I'd love to chat.  

				<br /><br />  
				Thanks again for your interest! I hope to connect with you soon. 👋🏽😊
			`,
		},
	},
	es: {
		translation: {
			welcome: "Bienvenido",
			changeLanguage: "Cambiar idioma",
			aboutTitle: INFO.about.title,
			aboutDescription: `
				Soy un profesional altamente adaptable, capaz de integrarme 
				rápidamente a cualquier entorno y enfocarme en alcanzar los objetivos 
				propuestos. Cuento con experiencia en diversos lenguajes de programación, 
				como <strong>TypeScript, JavaScript y PHP</strong>, lo que me permite aportar 
				soluciones técnicas robustas y versátiles.
				
				Mi <strong>pasión por el desarrollo de software y el análisis de sistemas</strong> 
				me impulsa a buscar constantemente oportunidades donde pueda aplicar mis 
				conocimientos y seguir creciendo en estas áreas. Siempre estoy listo para 
				asumir nuevos retos y contribuir al éxito de proyectos innovadores. 🚀
			`,
			contactTitle: INFO.contact.title,
			contactDescription: `
				<strong>Gracias por tu interés en contactarme.</strong>  
				Valoro mucho tus comentarios, preguntas y sugerencias.  
				Si tienes alguna consulta específica, no dudes en enviarme un correo electrónico haciendo  
				clic <a href="mailto:{{email}}">aquí</a>.  

				Hago todo lo posible por responder a todos los mensajes en un plazo de 24 horas,  
				aunque en periodos de alta demanda podría tardar un poco más.  

				Si prefieres conectarte a través de redes sociales, puedes encontrarme en  
				<a href="{{linkedin}}" target="_blank" rel="noreferrer">LinkedIn</a>  
				o en mi lista de redes, donde comparto actualizaciones y me relaciono con mi red de contactos.  
				No dudes en ponerte en contacto conmigo; estaré encantado de conversar.  

				<br /><br />  
				¡Gracias nuevamente por tu interés! Espero poder conectar contigo pronto. 👋🏽😊
			`,
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
