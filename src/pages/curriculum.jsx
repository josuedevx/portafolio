import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import Tippy from "@tippyjs/react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import DarkMode from "../components/dark/dark";
import INFO from "../data/user";
import SEO from "../data/seo";
import MyCv from "../assets/CV AARJ010123LM0.pdf";

import "./styles/cv.css";
import "tippy.js/dist/tippy.css";

const Cv = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "cv") || {};

	const handleDownloadCV = () => {
		const cvUrl = MyCv;
		window.open(cvUrl, "_blank");
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Currículum | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="cv" />
				<DarkMode />
				<div className="content-wrapper">
					<div className="cv-logo-container">
						<div className="cv-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="cv-container">
						<div className="title cv-title">
							Mi Camino en el Desarrollo 📂
						</div>

						<div className="subtitle cv-subtitle">
							¡Hola! 👋 Soy{" "}
							<strong>Josue Alvarez Rodriguez</strong>, un
							Ingeniero en Sistemas Computacionales apasionado por
							el desarrollo de software, la integración de
							tecnologías y el liderazgo de proyectos innovadores.
							Si quieres conocer más sobre mi trayectoria,
							habilidades y los logros que he alcanzado, ¡te
							invito a descargar mi currículum actualizado!
							<br />
							Estoy siempre abierto a nuevas oportunidades,
							colaboraciones y desafíos que me permitan seguir
							creciendo profesionalmente. ¡No dudes en contactarme
							si quieres conectar o trabajar juntos en algo
							increíble! 🚀
						</div>

						<div className="download-container">
							<Tippy
								content="Descargar Currículum"
								placement="bottom"
							>
								<button
									className="download-button"
									onClick={handleDownloadCV}
								>
									{/* Descargar CV{" "} */}
									<FontAwesomeIcon
										style={{ fontSize: "20px" }}
										icon={faDownload}
									/>
								</button>
							</Tippy>
						</div>
					</div>

					<div className="socials-container">
						<div className="cv-socials">
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

export default Cv;
