import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiencia - Desarrollador de Software"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://img.freepik.com/premium-vector/work-office-icon-logo-vector-design-template_827767-2684.jpg"
								alt="turing"
								className="work-image"
							/>
							<div className="work-title">
								Turing Inteligencia Artificial
							</div>
							<div className="work-subtitle">
								Desarrollador Full Stack
							</div>
							<div className="work-duration">
								Nov 2023 - Oct 2024
							</div>
						</div>

						<div className="work">
							<img
								src="https://img.freepik.com/premium-vector/work-office-icon-logo-vector-design-template_827767-2684.jpg"
								alt="villa"
								className="work-image"
							/>
							<div className="work-title">
								VILLANET S.A DE C.V
							</div>
							<div className="work-subtitle">
								Desarrollador Móvil
							</div>
							<div className="work-duration">
								Oct 2022 – Ene 2023
							</div>
						</div>

						<div className="work">
							<img
								src="https://img.freepik.com/premium-vector/work-office-icon-logo-vector-design-template_827767-2684.jpg"
								alt="BELLOTA"
								className="work-image"
							/>
							<div className="work-title">
								Ciber y Papelería Bellota
							</div>
							<div className="work-subtitle">
								Desarrollador Full Stack
							</div>
							<div className="work-duration">
								 Sep 2020 – Dic 2020
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
