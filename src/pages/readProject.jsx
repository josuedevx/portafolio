import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import DarkMode from "../components/dark/dark";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import getDate from "../data/date";

import "./styles/readProject.css";
import "tippy.js/dist/tippy.css";

const ReadProject = () => {
	const navigate = useNavigate();
	let { slug } = useParams();
	const project = INFO.projects[slug - 1];
	const date = getDate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

	const share = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			alert(
				"¡URL copiada al portapapeles, comparte este enlace con tus contactos!"
			);
		} catch (err) {
			console.error("Error al copiar la URL:", err);
			alert("No se pudo copiar la URL. Intenta manualmente.");
		}
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.description} />
				<meta name="keywords" content={INFO.main.name} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" read={slug} />
				<DarkMode />
				<div className="content-wrapper">
					<div className="read-project-logo-container">
						<div className="read-project-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-project-container">
						<div className="read-project-back">
						<Tippy
								content="Regresar a proyectos"
								placement="bottom"
							>
							<img
								src="https://static.thenounproject.com/png/1410611-200.png"
								alt="back"
								className="read-project-back-button"
								onClick={() => navigate("/projects")}
							/>
							</Tippy>
						</div>

						<div className="read-project-wrapper">
							<div className="read-project-date-container">
								<div className="read-project-date">{date}</div>
							</div>
							<div className="title read-project-title">
								Proyecto {slug}: {project.title}
							</div>

							<div className="read-project-body">
								{project.description}
							</div>
							<h3>⚙️ Tecnologías Utilizadas</h3>
							<div className="project-technologies">
								{project.technologies.map((tech, index) => {
									const techKey = Object.keys(tech).find(
										(key) => key !== "logo"
									);
									const techName = tech[techKey];

									return (
										<div key={index} className="tech-item">
											<img
												src={tech.logo}
												alt={techName}
												className="tech-logo"
											/>
											<span className="tech-name">
												{" "}
												{techName}
											</span>
										</div>
									);
								})}
							</div>
							<div className="share-project-container">
								<Tippy
									content="Compartir proyecto"
									placement="bottom"
								>
									<button
										className="share-project-button"
										onClick={share}
									>
										{" "}
										Compartir{" "}
										<FontAwesomeIcon
											style={{ fontSize: "15px" }}
											icon={faShareAlt}
										/>
									</button>
								</Tippy>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer active="projects" read={slug} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadProject;
