import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skills from "../../data/skills";

import "./styles/skills.css";

const Skills = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="skills-container">
			<h2 className="skills-title">Mis Habilidades</h2>
			{skills.map((category, index) => (
				<div key={index} className="skills-category">
					<h3>{category.category}</h3>
					<Slider {...settings}>
						{category.items.map((skill, idx) => (
							<div key={idx} className="skill-item">
								<img src={skill.logo} alt={skill.name} className="skill-logo" />
								<p>{skill.name}</p>
							</div>
						))}
					</Slider>
				</div>
			))}
		</div>
	);
};

export default Skills;
