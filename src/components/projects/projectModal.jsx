import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./styles/projectModal.css";

const ProjectModal = ({ isOpen, onClose, project }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button className="modal-close" onClick={onClose}>
					<FontAwesomeIcon icon={faClose} />
				</button>
				<h2>{project.title}</h2>
				<img
					src={project.logo}
					alt="Project Logo"
					className="modal-logo"
				/>
				<p>{project.description}</p>
			</div>
		</div>
	);
};

export default ProjectModal;
