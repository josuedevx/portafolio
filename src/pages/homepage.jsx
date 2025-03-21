import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { faMailBulk, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faFacebook,
	faWpforms,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import DarkMode from "../components/dark/dark";
import Languaje from "../components/common/languaje";
import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import imagemINE from "../assets/yo3.jpg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>Home | {INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			<div className="page-content">
				<NavBar active="home" />
				{/* <Languaje /> */}
				<DarkMode />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={true} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											// src={imagemINE}
											src="https://scontent.fmex10-5.fna.fbcdn.net/v/t1.6435-9/176064943_1101825013632178_6130453568193432033_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9Q6z-k68164Q7kNvgGDBEtL&_nc_oc=AdlWzmcuaymclJNH_A6Faow0QkqjnsZuRu1Dd6QY4qjdqQibjwqBU4Eq9_WvisdKZu1zxYIocL9tq3HnpScGT7D-&_nc_zt=23&_nc_ht=scontent.fmex10-5.fna&_nc_gid=6z5XHJjO2fjZlms_M-aA8w&oh=00_AYEMZeQpn6n5eYQA_-IhVZb47jUl2kOoQDCEDRxKkNGt_Q&oe=6802ECBC"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<Tippy
								content="Sígueme en GitHub"
								placement="bottom"
							>
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="homepage-social-icon"
									/>
								</a>
							</Tippy>
							<Tippy
								content="Sígueme en Linkedin"
								placement="bottom"
							>
								<a
									href={INFO.socials.linkedin}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faLinkedin}
										className="homepage-social-icon"
									/>
								</a>
							</Tippy>
							<Tippy
								content="Sígueme en Instagram"
								placement="bottom"
							>
								<a
									href={INFO.socials.instagram}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faInstagram}
										className="homepage-social-icon"
									/>
								</a>
							</Tippy>
							<Tippy
								content="Sígueme en Facebook"
								placement="bottom"
							>
								<a
									href={INFO.socials.facebook}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faFacebook}
										className="homepage-social-icon"
									/>
								</a>
							</Tippy>
							<Tippy
								content="Visita mi WebShop"
								placement="bottom"
							>
								<a
									href={INFO.socials.website}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faCartShopping}
										className="homepage-social-icon"
									/>
								</a>
							</Tippy>
							<Tippy
								content="Envíame un Mensaje"
								placement="bottom"
							>
								<a
									href={INFO.socials.form}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faWpforms}
										className="homepage-social-icon"
									/>
								</a>
							</Tippy>
							<Tippy
								content="Envíame un correo electrónico"
								placement="bottom"
							>
								<a
									href={`mailto:${INFO.main.email}`}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faMailBulk}
										className="homepage-social-icon"
									/>
								</a>
							</Tippy>
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>

						<div className="page-footer">
							<Footer active="home" />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
