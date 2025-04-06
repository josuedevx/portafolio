import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import DarkMode from "../components/dark/dark";
import Languaje from "../components/common/languaje";
import Works from "../components/homepage/works";
import INFO from "../data/user";
import SEO from "../data/seo";
import imagemINE from "../assets/ghibli.jpg";

import "./styles/about.css";

const About = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				{/* <Languaje /> */}
				<DarkMode />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<div className="homepage-works">
									<Works />
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											// src="https://scontent.fmex10-5.fna.fbcdn.net/v/t1.6435-9/176064943_1101825013632178_6130453568193432033_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9Q6z-k68164Q7kNvgGDBEtL&_nc_oc=AdlWzmcuaymclJNH_A6Faow0QkqjnsZuRu1Dd6QY4qjdqQibjwqBU4Eq9_WvisdKZu1zxYIocL9tq3HnpScGT7D-&_nc_zt=23&_nc_ht=scontent.fmex10-5.fna&_nc_gid=6z5XHJjO2fjZlms_M-aA8w&oh=00_AYEMZeQpn6n5eYQA_-IhVZb47jUl2kOoQDCEDRxKkNGt_Q&oe=6802ECBC"
											src={imagemINE}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer active="about" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
