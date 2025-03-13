import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import DarkMode from "../components/dark/dark";
import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	const location = useLocation();

	useEffect(() => {
		document.title = `404 | Not Found | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<DarkMode />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>

					<motion.div
						className="notfound-container"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<div className="notfound-message">
							<h1 className="notfound-title">
								Oops!{" "}
								<FontAwesomeIcon
									icon={faFaceSadTear}
									aria-label="Ícono de cara triste"
								/>
								<br />
								404 Not Found
							</h1>

							<p className="not-found-message">
								La página que estás buscando se movió, quitó,
								renombró o podría no haber existido nunca.
								<br />
								<br />"{location.pathname}" <br />
								<br />
								No fue encontrada en el servidor.
							</p>

							<Link
								to="/"
								className="not-found-link"
								aria-label="Volver a la página de inicio"
							>
								Volver al inicio
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
