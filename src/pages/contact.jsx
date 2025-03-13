import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import DarkMode from "../components/dark/dark";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<DarkMode />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Pongámonos en contacto: ¡Hagamos realidad las ideas! 📞
						</div>

						<div className="subtitle contact-subtitle">
							<strong>
								Gracias por tu interés en contactarme.
							</strong>{" "}
							Valoro mucho tus comentarios, preguntas y
							sugerencias. Si tienes alguna consulta específica,
							no dudes en enviarme un correo electrónico haciendo
							clic <a href={`mailto:${INFO.main.email}`}>aquí</a>.
							Hago todo lo posible por responder a todos los
							mensajes en un plazo de 24 horas, aunque en periodos
							de alta demanda podría tardar un poco más.
							<br />
							Si prefieres conectarte a través de redes sociales,
							puedes encontrarme en{" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								Linkedin
							</a>{" "}
							o en mi lista de redes, donde comparto
							actualizaciones y me relaciono con mi red de
							contactos. No dudes en ponerte en contacto conmigo;
							estaré encantado de conversar.
							<br />
							¡Gracias nuevamente por tu interés! Espero poder
							conectar contigo pronto. 👋🏽😊
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
