import React, { useState } from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	const [statusFilter, setStatusFilter] = useState("Todos");

	const handleStatusChange = (e) => {
		setStatusFilter(e.target.value);
	};

	const filteredProjects =
		statusFilter === "Todos"
			? INFO.projects
			: INFO.projects.filter(
					(project) => project.status === statusFilter
			  );

	return (
		<div className="all-projects-container">
			<div className="filter-container">
				<label htmlFor="statusFilter">Filtrar por estado: </label>
				<select
					id="statusFilter"
					onChange={handleStatusChange}
					value={statusFilter}
				>
					<option value="Todos">Todos</option>
					<option value="En desarrollo">En desarrollo</option>
					<option value="Terminado">Terminado</option>
					<option value="Pausado">Pausado</option>
				</select>
			</div>

			{filteredProjects.length === 0 ? (
				<div className="no-projects-message">
					No hay proyectos con el estado "
					<strong>{statusFilter}</strong>".
				</div>
			) : (
				filteredProjects.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							status={project.status}
							title={project.title}
							description={
								project.description.length > 100
									? `${project.description.substring(
											0,
											72
									  )}...`
									: project.description
							}
							linkText={project.linkText}
							link={project.link + (index + 1)}
						/>
					</div>
				))
			)}
		</div>
	);
};

export default AllProjects;
