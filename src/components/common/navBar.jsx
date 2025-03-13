import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenu = () => setMenuOpen(!menuOpen);
	const closeMenu = () => setMenuOpen(false);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background" onClick={handleMenu}>
						<div className="nav-header">
							<div className="nav-hamburger" onClick={handleMenu}>
								<FontAwesomeIcon icon={menuOpen ? faTimes : faBars}	/>
							</div>
						</div>
						<ul className={`nav-list ${menuOpen ? "open" : ""}`}>
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
								onClick={closeMenu}
							>
								<Link to="/">Inicio</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
								onClick={closeMenu}
							>
								<Link to="/about">Sobre Mí</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
								onClick={closeMenu}
							>
								<Link to="/projects">Proyectos</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
								onClick={closeMenu}
							>
								<Link to="/articles">Articulos</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
								onClick={closeMenu}
							>
								<Link to="/contact">Contacto</Link>
							</li>
							<li
								className={
									active === "cv"
										? "nav-item active"
										: "nav-item"
								}
								onClick={closeMenu}
							>
								<Link to="/cv">CV</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
