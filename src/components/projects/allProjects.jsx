import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						status={project.status}
						title={project.title}
						description={
							project.description.length > 100
								? `${project.description.substring(0, 72)}...`
								: project.description
						}
						linkText={project.linkText}
						link={project.link + (index + 1)}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
