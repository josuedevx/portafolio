import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import DarkMode from "../components/dark/dark";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import getDate from "../data/date";

import "./styles/readProject.css";

const ReadProject = () => {
	const navigate = useNavigate();
	let { slug } = useParams();
	const project = INFO.projects[slug - 1];
	const date = getDate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

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
							<img
								src="https://static.thenounproject.com/png/1410611-200.png"
								alt="back"
								className="read-project-back-button"
								onClick={() => navigate(-1)}
							/>
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
							<h3>Tecnologías utilizadas</h3>
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
