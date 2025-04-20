import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
		setIsClosing(false);
	};

	const handleCloseModal = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsModalOpen(false);
			setIsClosing(false);
		}, 300);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "cv") || {};

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

					<div className="download-container">
						<Tippy
							content="Descargar Currículum"
							placement="bottom"
						>
							<button
								className="download-button"
								onClick={handleOpenModal}
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
			{isModalOpen && (
				<div className="modal-overlay" onClick={handleCloseModal}>
					<div
						className={`modal-content ${
							isClosing ? "modal-exit" : "modal-enter"
						}`}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="modal-header">
							<Tippy content="Cerrar pestaña" placement="top">
								<button
									className="close-button"
									onClick={handleCloseModal}
								>
									<FontAwesomeIcon
										style={{ fontSize: "20px" }}
										icon={faCircleXmark}
									/>
								</button>
							</Tippy>
						</div>
						<div className="modal-body">
							<embed src={MyCv} type="application/pdf" />
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Cv;
