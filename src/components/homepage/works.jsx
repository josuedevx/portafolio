import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import works from "../../data/works";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiencia - Full Stack Developer"
				body={
					<div className="works-body">
						{works.map((work, index) => (
							<div className="work" key={index}>
								<img
									src={work.image}
									alt={work.title}
									className="work-image"
								/>
								<div className="work-title">{work.title}</div>
								<div className="work-subtitle">
									{work.subtitle} |{" "}
									<strong> {work.date} </strong>
								</div>
								<div className="work-duration"></div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
