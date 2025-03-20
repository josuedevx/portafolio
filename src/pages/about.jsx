import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import DarkMode from "../components/dark/dark";
import Languaje from "../components/common/languaje";
import INFO from "../data/user";
import SEO from "../data/seo";
import imagemINE from "../assets/yo3.jpg";

import "./styles/about.css";

const About = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				{/* <Languaje /> */}
				<DarkMode />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
									{/* {t("aboutTitle")} */}
								</div>

								<div className="subtitle about-subtitle">
									<strong>
										Soy un profesional altamente adaptable,
									</strong>{" "}
									capaz de integrarme rápidamente a cualquier
									entorno y enfocarme en alcanzar los
									objetivos propuestos. Cuento con experiencia
									en diversos lenguajes de programación, como{" "}
									<strong>
										TypeScript, JavaScript y PHP,
									</strong>{" "}
									lo que me permite aportar soluciones
									técnicas robustas y versátiles.
									<br />
									<br />
									Mi{" "}
									<strong>
										pasión por el desarrollo de software y
										el análisis de sistemas
									</strong>{" "}
									me impulsa a buscar constantemente
									oportunidades donde pueda aplicar mis
									conocimientos y seguir creciendo en estas
									áreas. Siempre estoy listo para asumir
									nuevos retos y contribuir al éxito de
									proyectos innovadores. 🚀
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagemINE}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer active="about"/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
