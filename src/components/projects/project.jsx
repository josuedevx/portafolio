import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./styles/project.css";

import INFO from "../../data/user";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<Tippy content={INFO.disclaimer.description}>
				<div className="project">
					<Link to={link}>
						<div className="project-container">
							<div className="project-content">
								<div className="project-logo">
									<img src={logo} alt="logo" />
								</div>
								<div className="project-title">{title}</div>
								<div className="project-description">
									{description}
								</div>
							</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">
									{linkText}
								</div>
							</div>
						</div>
					</Link>
				</div>
			</Tippy>
		</React.Fragment>
	);
};

export default Project;
