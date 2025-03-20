import React from "react";
import { Link } from "react-router-dom";
import getDate from "../../data/date";
import "./styles/footer.css";

const date = getDate();

const Footer = (props) => {
	const { active, read } = props;

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li
							className={
								active === "home"
									? "footer-nav-link-item active"
									: "footer-nav-link-item"
							}
						>
							<Link to="/">Inicio</Link>
						</li>
						<li
							className={
								active === "about"
									? "footer-nav-link-item active"
									: "footer-nav-link-item"
							}
						>
							<Link to="/about">Sobre Mi</Link>
						</li>
						<li
							className={
								active === "projects"
									? "footer-nav-link-item active"
									: "footer-nav-link-item"
							}
						>
							<Link to="/projects">
								{read >= 0 && active === "projects"
									? "Proyecto: " + read
									: "Proyectos"}
							</Link>
						</li>
						<li
							className={
								active === "articles"
									? "footer-nav-link-item active"
									: "footer-nav-link-item"
							}
						>
							<Link to="/articles">
								{read >= 0 && active === "articles"
									? "Artículo: " + read
									: "Artículos"}
							</Link>
						</li>
						<li
							className={
								active === "contact"
									? "footer-nav-link-item active"
									: "footer-nav-link-item"
							}
						>
							<Link to="/contact">Contacto</Link>
						</li>
						<li
							className={
								active === "cv"
									? "footer-nav-link-item active"
									: "footer-nav-link-item"
							}
						>
							<Link to="/cv">CV</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© {date}. Todos los Derechos son Reservados.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
