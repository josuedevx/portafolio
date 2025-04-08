import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt} from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react";
import styled from "styled-components";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import DarkMode from "../components/dark/dark";
import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";
import "./styles/cv.css";
import "tippy.js/dist/tippy.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();
	const article = myArticles[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	ArticleStyle = styled.div`
		${article().style}
	`;

	const share = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			alert(
				"¡URL copiada al portapapeles, comparte este enlace con tus contactos!"
			);
		} catch (err) {
			console.error("Error al copiar la URL:", err);
			alert("No se pudo copiar la URL. Intenta manualmente.");
		}
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" read={slug} />
				<DarkMode />
				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<Tippy
								content="Regresar al inicio"
								placement="bottom"
							>
								<img
									src="https://static.thenounproject.com/png/1410611-200.png"
									alt="back"
									className="read-article-back-button"
									onClick={() => navigate("/")}
								/>
							</Tippy>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article().date}
								</div>
							</div>

							<div className="title read-article-title">
								{article().title} 🤯
							</div>

							<div className="read-article-body">
								<ArticleStyle>{article().body}</ArticleStyle>
								<div className="share-container">
									<Tippy
										content="Compartir artículo"
										placement="bottom"
									>
										<button
											className="share-button"
											onClick={share}
										> Compartir {" "}
											<FontAwesomeIcon
												style={{ fontSize: "15px" }}
												icon={faShareAlt}
											/>
										</button>
									</Tippy>
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer active="articles" read={slug} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
