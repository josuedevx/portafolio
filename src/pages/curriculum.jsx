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
import Skills from "../components/about/skills";
import INFO from "../data/user";
import SEO from "../data/seo";
import MyCv from "../assets/CVAARJ010123LM0.pdf";

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
							{INFO.curriculum.title}
						</div>

						<div className="subtitle cv-subtitle">
							{INFO.curriculum.description}
						</div>
					</div>

					{/* <div className="skills-container">
						<div className="contact-skills">
							<Skills />
						</div>
					</div> */}

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

					<div className="socials-container">
						<div className="cv-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer active="cv" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Cv;
