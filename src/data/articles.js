// eslint-disable-next-line
import React from "react";
import codeJava from "../assets/codeJava.png";
import imgRefle from "../assets/imgRefle.jpg";
import "./styles.css";

function article_9() {
	return {
		date: "07 marzo 2024",
		title: "Reflexión: La importancia de Google Cloud Run",
		description:
			"Google Cloud Run es un servicio que permite desplegar y ejecutar aplicaciones contenedorizadas de manera escalable y sin servidor, eliminando la complejidad de gestionar infraestructura.",
		keywords: [
			"Google Cloud Run",
			"Cloud Run",
			"Aplicaciones sin servidor",
			"Contenedores",
			"Escalabilidad",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Google Cloud Run es una solución poderosa para desplegar
						y ejecutar aplicaciones contenedorizadas sin necesidad
						de gestionar servidores. Este servicio ofrece:
					</div>
					<ul>
						<li>
							<strong>Despliegue sin servidor:</strong> Los
							desarrolladores pueden enfocarse en el código,
							mientras Cloud Run se encarga de la infraestructura
							subyacente.
						</li>
						<li>
							<strong>Escalabilidad automática:</strong> Las
							aplicaciones escalan automáticamente según la
							demanda, lo que evita sobrecargas o recursos
							ociosos.
						</li>
						<li>
							<strong>Compatibilidad con contenedores:</strong>{" "}
							Cualquier aplicación empaquetada en un contenedor
							puede ejecutarse en Cloud Run, lo que ofrece
							flexibilidad en el desarrollo y despliegue.
						</li>
						<li>
							<strong>Facturación por uso:</strong> Solo se paga
							por el tiempo de ejecución real, optimizando costos
							y permitiendo a las empresas gestionar mejor sus
							presupuestos en la nube.
						</li>
						<li>
							<strong>
								Integración con otras herramientas de Google
								Cloud:
							</strong>{" "}
							Cloud Run se integra fácilmente con servicios como
							Cloud Build, BigQuery, Pub/Sub y más, potenciando
							soluciones más completas.
						</li>
					</ul>
					<div className="paragraph">
						En resumen, Google Cloud Run es esencial para empresas
						que buscan agilidad, escalabilidad y reducción de costos
						en el desarrollo de aplicaciones modernas sin
						comprometer la flexibilidad y el control.
					</div>
					<br></br>
					<img
						src="https://www.tenable.com/sites/default/files/images/articles/ConfusedFunction%20%20Privilege%20Escalation%20Vulnerability%20Impacting%20GCP.gif"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_8() {
	return {
		date: "15 agosto 2024",
		title: "Tutorial: Introducción a la Programación en Python",
		description:
			"Python es un lenguaje de programación versátil y fácil de aprender, ideal para principiantes y expertos por igual.",
		keywords: [
			"Programación en Python",
			"Lenguaje de programación",
			"Python para principiantes",
			"Desarrollo de software",
			"Aprender Python",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Python se ha convertido en uno de los lenguajes de
						programación más populares del mundo. Es conocido por su
						sintaxis clara y legible, lo que lo convierte en una
						excelente opción para quienes están comenzando en la
						programación.
					</div>
					<ul>
						<li>
							<strong>Fácil de aprender:</strong> La simplicidad
							de su sintaxis permite a los nuevos programadores
							concentrarse en conceptos de programación sin
							preocuparse por la complejidad del lenguaje.
						</li>
						<li>
							<strong>Versatilidad:</strong> Python se utiliza en
							una amplia gama de aplicaciones, desde desarrollo
							web y automatización hasta análisis de datos y
							aprendizaje automático.
						</li>
						<li>
							<strong>Amplia comunidad:</strong> La gran comunidad
							de Python ofrece una multitud de recursos,
							bibliotecas y frameworks que facilitan el
							desarrollo.
						</li>
						<li>
							<strong>
								Soporte para paradigmas de programación:
							</strong>{" "}
							Python admite programación orientada a objetos,
							programación imperativa y programación funcional.
						</li>
						<li>
							<strong>Gran biblioteca estándar:</strong> Python
							viene con una biblioteca estándar rica que
							proporciona muchas herramientas y funcionalidades
							listas para usar.
						</li>
					</ul>
					<div className="paragraph">
						En resumen, aprender Python no solo abre puertas en el
						mundo de la programación, sino que también es un paso
						crucial hacia el dominio de tecnologías más avanzadas.
					</div>
					<br></br>
					<img
						src="https://media1.giphy.com/media/coxQHKASG60HrHtvkt/giphy.gif?cid=6c09b952t76gn9bzvflu83zhlr411nf4mmh2bk6weetqb75b&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
						alt="Python"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_7() {
	return {
		date: "20 septiembre 2024",
		title: "Consejo: Desarrollo de Aplicaciones Web con React",
		description:
			"React es una biblioteca de JavaScript que facilita la creación de interfaces de usuario interactivas y dinámicas.",
		keywords: [
			"Desarrollo web",
			"React",
			"Biblioteca de JavaScript",
			"Interfaz de usuario",
			"SPA",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						React ha transformado la manera en que se construyen
						aplicaciones web modernas. Su enfoque basado en
						componentes permite una mayor reutilización del código y
						una mejor organización.
					</div>
					<ul>
						<li>
							<strong>Componentes reutilizables:</strong> La
							arquitectura de componentes de React permite crear
							piezas de UI que se pueden reutilizar en diferentes
							partes de la aplicación.
						</li>
						<li>
							<strong>Virtual DOM:</strong> React utiliza un
							Virtual DOM para mejorar la eficiencia en el
							renderizado de la interfaz, lo que resulta en una
							experiencia de usuario más fluida.
						</li>
						<li>
							<strong>Estado y Props:</strong> Manejar el estado y
							las propiedades de los componentes es intuitivo,
							facilitando la construcción de aplicaciones
							interactivas.
						</li>
						<li>
							<strong>Gran ecosistema:</strong> React cuenta con
							una amplia gama de bibliotecas y herramientas, como
							Redux para la gestión del estado y React Router para
							el enrutamiento.
						</li>
						<li>
							<strong>Comunidad activa:</strong> La comunidad de
							desarrolladores de React es enorme, lo que significa
							que siempre hay recursos, tutoriales y soporte
							disponibles.
						</li>
					</ul>
					<div className="paragraph">
						En conclusión, React es una herramienta poderosa para el
						desarrollo de aplicaciones web que busca agilidad y
						eficiencia sin sacrificar la calidad del código.
					</div>
					<br></br>
					<img
						src="https://miro.medium.com/v2/resize:fit:1400/1*WqMpsn9c8JsbbIxIRr50ug.gif"
						alt="React"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_6() {
	return {
		date: "28 enero 2025",
		title: "Tutorial: Creando una API REST Básica con Node.js y Express",
		description:
			"Aprende a construir una API REST desde cero utilizando Node.js y Express. Perfecto para principiantes que desean adentrarse en el desarrollo backend.",
		keywords: [
			"Node.js",
			"Express",
			"API REST",
			"Backend",
			"Desarrollo web",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						En este tutorial, aprenderás a crear una API REST básica
						utilizando Node.js y Express. Es un buen punto de
						partida para construir aplicaciones backend modernas.
					</div>
					<h3>Paso 1: Configura tu proyecto</h3>
					<p>
						Primero, asegúrate de tener Node.js instalado en tu
						sistema. Luego, crea un nuevo proyecto e inicialízalo
						con el siguiente comando:
					</p>
					<pre>
						<code>
							mkdir mi-api-rest{"\n"}
							cd mi-api-rest{"\n"}
							npm init -y
						</code>
					</pre>
					<h3>Paso 2: Instala Express</h3>
					<p>
						Express es un framework de Node.js que facilita la
						creación de servidores y APIs. Instálalo ejecutando:
					</p>
					<pre>
						<code>npm install express</code>
					</pre>
					<h3>Paso 3: Escribe tu servidor</h3>
					<p>
						Crea un archivo llamado <code>index.js</code> y agrega
						el siguiente código:
					</p>
					<pre>
						<code>
							<img
								src={codeJava}
								alt="Code JavaScript"
								className="randImage"
							/>
							{/* const express = require("express");{"\n"}
							const app = express();{"\n"}
							const port = 3000;{"\n\n"}
							// Middleware para manejar JSON{"\n"}
							app.use(express.json());{"\n\n"}
							// Rutas{"\n"}
							app.get("/", (req, res) => {{"\n"}
								res.send("¡Bienvenido a mi API REST!");{"\n"}
							}});{"\n\n"}
							app.get("/api/users", (req, res) => {{"\n"}
								res.json(["Usuario1", "Usuario2", "Usuario3"]);{"\n"}
							}});{"\n\n"}
							// Inicia el servidor{"\n"}
							app.listen(port, () => {{"\n"}
								console.log(`Servidor corriendo en http://localhost:${port}`);{"\n"}
							}}); */}
						</code>
					</pre>
					<h3>Paso 4: Ejecuta tu API</h3>
					<p>Inicia el servidor ejecutando:</p>
					<pre>
						<code>node index.js</code>
					</pre>
					<p>
						¡Ahora puedes abrir tu navegador o usar una herramienta
						como Postman para probar tu API en{" "}
						<code>http://localhost:3000/api/users</code>!
					</p>
					<h3>Conclusión</h3>
					<p>
						Has aprendido a construir una API REST básica. Desde
						aquí, puedes expandirla para incluir rutas más
						complejas, bases de datos y autenticación. ¡Sigue
						explorando y aprendiendo!
					</p>
					<br></br>
					<img
						src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1608020490393-RBHFYWZAECA6UCJMX7FK/Integrate+CI+CD.gif?format=1000w"
						alt="Node.js y Express"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: "12 febrero 2025",
		title: "Reflexión: El Desafío de Crecer en TI en un Mercado Exigente",
		description:
			"Exploramos las barreras que enfrentan los profesionales de TI para avanzar en su carrera y cómo pueden superar los requisitos de experiencia excesivos.",
		keywords: [
			"TI",
			"Experiencia laboral",
			"Infraestructura",
			"Certificaciones",
			"Desarrollo profesional",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid var(--link-color) !important;
					max-width: 100%;
					height: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Recientemente vi una vacante para un ingeniero sysadmin
						junior que pedía 4 años de experiencia en redes, Windows
						Server, Linux server, bases de datos, desarrollo y
						certificaciones en Cisco, Microsoft y Linux, entre
						otras. El salario era "a convenir".
					</div>
					<h3>¿Un junior debe tener 4 años de experiencia?</h3>
					<p>
						Tras la pandemia, las empresas entendieron que el rol de
						TI es clave para mantener su infraestructura operativa.
						Sin embargo, cada vez exigen más habilidades, dejando
						pocas oportunidades para quienes buscan crecer.
					</p>
					<p>
						Por ejemplo, si alguien viene de soporte N1 o N2 y
						quiere avanzar, se topará con ofertas que piden mínimo 2
						años de experiencia. Pero, ¿cómo adquirir experiencia si
						no hay oportunidades para aprender? Lo mismo ocurre en
						desarrollo, donde cientos de candidatos compiten por su
						primer empleo.
					</p>
					<h3>Consejos para crecer en TI</h3>
					<ul>
						<li>
							1️⃣ Atrévete a asumir retos técnicos (si tienes un
							buen guía como tu jefe inmediato, mejor).
						</li>
						<li>
							2️⃣ Trabaja en tu actitud (ser conflictivo solo frena
							el crecimiento).
						</li>
						<li>
							3️⃣ Certifícate con grandes empresas como Microsoft,
							Cisco, Linux o AWS.
						</li>
						<li>
							4️⃣ Aprovecha cursos en plataformas como Udemy,
							LinkedIn Learning y Coursera para especializarte y
							enfocarte en lo que quieres ser.
						</li>
					</ul>
					<p>
						Ojalá los reclutadores consideren más el potencial y las
						habilidades en lugar de enfocarse solo en la
						experiencia. 🚀💻
					</p>
					<br></br>
					<img
						src={imgRefle}
						alt="TI y Desarrollo Profesional"
						className="randImage"
					/>
					<p>
						<strong>💻 Fuente original de la idea:</strong>{" "}
						Publicación en LinkedIn de{" "}
						<a
							href="https://www.linkedin.com/feed/update/urn:li:activity:7294414401611182080/"
							target="_blank"
						>
							Dairo Rivera Ramírez
						</a>
						, Analista de Infraestructura, Ingeniero de Sistemas.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "25 febrero 2025",
		title: "Consejo: 30 APIs GRATUITAS para Desarrolladores",
		description:
			"Guárdalo ahora. Te aseguro que lo vas a necesitar más adelante.",
		keywords: [
			"APIs",
			"Desarrollo",
			"Programación",
			"Software",
			"Herramientas",
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid var(--link-color) !important;
				max-width: 100%;
				height: auto;
			}
			
			.hashtags {
				font-weight: bold;
				color: #1D79D7;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Si eres desarrollador, sabes que las APIs son la clave
						para construir aplicaciones modernas. Ya sea para un
						proyecto personal, una app en producción o simplemente
						para experimentar, estas APIs te facilitarán el camino.
					</div>
					<p>
						Aquí tienes 30 APIs gratuitas que te ayudarán a
						desbloquear nuevas posibilidades:
					</p>

					<h3>🔹 1. APIs de Datos Abiertos</h3>
					<ul>
						<li>
							✅ OpenStreetMap → Mapas abiertos y datos
							geoespaciales 🌍
						</li>
						<li>
							✅ NASA API → Datos de exploración espacial,
							imágenes y más 🚀
						</li>
						<li>
							✅ Open Library API → Acceso a millones de libros 📚
						</li>
					</ul>

					<h3>🌦 2. APIs de Clima</h3>
					<ul>
						<li>
							✅ OpenWeather API → Datos meteorológicos globales
							en tiempo real 🌍
						</li>
						<li>
							✅ Weather API → Información detallada del clima y
							alertas meteorológicas ⛈️
						</li>
						<li>
							✅ WeatherBit API → Datos meteorológicos para
							integración en apps 📡
						</li>
					</ul>

					<h3>📰 3. APIs de Noticias</h3>
					<ul>
						<li>
							✅ News API → Noticias de múltiples fuentes
							reconocidas 🗞️
						</li>
						<li>
							✅ GNews API → Noticias globales con filtrado por
							ubicación 🌎
						</li>
						<li>
							✅ Guardian News API → Noticias actuales de The
							Guardian ✍️
						</li>
						<li>
							✅ Current News API → Información en tiempo real de
							múltiples medios 📢
						</li>
						<li>
							✅ New York Times API → Contenido del NYT y su
							archivo histórico 📖
						</li>
					</ul>

					<h3>🤖 4. APIs de Inteligencia Artificial & NLP</h3>
					<ul>
						<li>
							✅ OpenAI API → Acceso a modelos como GPT y DALL·E
							🧠
						</li>
						<li>
							✅ Gemini API → IA conversacional avanzada de Google
							💬
						</li>
						<li>
							✅ Hugging Face API → Modelos de machine learning y
							NLP 📚
						</li>
						<li>
							✅ Claude API → Un asistente de IA con enfoque ético
							🤝
						</li>
						<li>
							✅ Grok API → IA optimizada para respuestas
							inteligentes 🔥
						</li>
					</ul>

					<h3>⚽🏀 5. APIs de Deportes</h3>
					<ul>
						<li>
							✅ Football Data Org → Datos de fútbol en vivo ⚽
						</li>
						<li>
							✅ NBA API → Estadísticas y partidos de la NBA 🏀
						</li>
						<li>
							✅ ESPN API → Datos de eventos deportivos en tiempo
							real 📡
						</li>
					</ul>

					<h3>🔥 6. APIs Misceláneas (pero geniales)</h3>
					<ul>
						<li>
							✅ TimeZone API → Conversión de husos horarios 🌎
						</li>
						<li>
							✅ Unsplash API → Acceso gratuito a imágenes de alta
							calidad 📸
						</li>
						<li>
							✅ Dictionary API → Definiciones, sinónimos y más 📖
						</li>
					</ul>

					<p>
						💡 ¿Cuál de estas APIs te interesa más? ¿Conoces otra
						API gratuita que debería estar en la lista?
					</p>

					<img
						src="https://media.licdn.com/dms/image/v2/D4E22AQE-XUY2enz3rA/feedshare-shrink_2048_1536/B4EZU6ossGGYAo-/0/1740445503961?e=1746662400&v=beta&t=5cWKa0hjnsrjyGeq04UkdkB8MbqZY48QuAHgR4pEeHY"
						alt="apiservice"
						className="randImage"
					/>

					<p className="hashtags">
						#Developers #SoftwareDevelopment #APIs #FreeTools
						#Coding #WebDevelopment #AI #BigData #NewsAPI
						#OpenSource #Tech #Innovation #DataScience 🚀
					</p>

					<p>
						<strong>💻 Fuente original de la idea:</strong>{" "}
						Publicación en LinkedIn de{" "}
						<a
							href="https://www.linkedin.com/feed/update/urn:li:activity:7300122407896252416/"
							target="_blank"
						>
							Ignacio C
						</a>
						. Ayudo a desarrolladores a crecer con IA y software.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "06 marzo 2025",
		title: "Tutorial: Cómo Mejorar en Programación: Claves para Convertirte en un Mejor Desarrollador",
		description:
			"La programación no es solo escribir código, sino aprender a resolver problemas de manera eficiente. Aquí te dejo algunos consejos para mejorar como programador y llevar tus habilidades al siguiente nivel. ",
		keywords: [
			"APIs",
			"Desarrollo",
			"Programación",
			"Software",
			"Herramientas",
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid var(--link-color) !important;
				max-width: 100%;
				height: auto;
			}
			
			.hashtags {
				font-weight: bold;
				color: #1D79D7;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						La programación no es solo escribir código, sino
						aprender a resolver problemas de manera eficiente. Aquí
						te dejo algunos consejos para mejorar como programador y
						llevar tus habilidades al siguiente nivel. 💡
					</div>

					<h3>🔹 1. Aprende los Fundamentos</h3>
					<ul>
						<li>
							✅ No importa el lenguaje que uses, los conceptos
							como estructuras de datos, algoritmos, patrones de
							diseño y principios SOLID son fundamentales para
							escribir código limpio y escalable.
						</li>
					</ul>

					<h3>🔹 2. Escribe Código Todos los Días</h3>
					<ul>
						<li>
							✅ La práctica constante mejora la lógica y la
							fluidez al programar. Resolver problemas en
							plataformas como LeetCode, CodeWars o HackerRank es
							una excelente forma de afinar tus habilidades.
						</li>
					</ul>

					<h3>🔹 3. Lee Código de Otros</h3>
					<ul>
						<li>
							✅ Explorar repositorios en GitHub te ayudará a
							entender diferentes estilos de programación, buenas
							prácticas y patrones de diseño en proyectos reales.
						</li>
					</ul>

					<h3> 4. Trabaja en Proyectos Reales</h3>
					<ul>
						<li>
							✅ Construir tus propios proyectos o contribuir a
							proyectos open-source te dará experiencia práctica y
							te enfrentará a desafíos del mundo real.
						</li>
					</ul>

					<h3>🔹 5. Aprende a Depurar y Escribir Pruebas</h3>
					<ul>
						<li>
							✅ Saber cómo depurar código y escribir pruebas
							unitarias con herramientas como JUnit o Mockito es
							clave para construir software robusto y mantenible.
						</li>
					</ul>

					<h3>🔹 6. Mejora tu Conocimiento en Arquitectura</h3>
					<ul>
						<li>
							✅ Comprender arquitecturas como Microservicios,
							Monolitos Modulares o Event-Driven Architecture te
							permitirá diseñar sistemas más escalables y
							eficientes.
						</li>
					</ul>
					<h3>🔹 7. Mantente Actualizado</h3>
					<ul>
						<li>
							✅ El mundo del desarrollo cambia rápido. Sigue
							blogs, canales de YouTube, documentaciones oficiales
							y participa en comunidades como Stack Overflow,
							Reddit y Twitter.
						</li>
					</ul>
					<h3>🔹 8. Aprende a Escribir Código Limpio</h3>
					<ul>
						<li>
							✅ Aplica principios como DRY (Don’t Repeat
							Yourself), KISS (Keep It Simple, Stupid) y YAGNI
							(You Ain’t Gonna Need It) para escribir código más
							legible y mantenible.
						</li>
					</ul>
					<h3>🔹 9. Desafíate con Nuevas Tecnologías</h3>
					<ul>
						<li>
							✅ Explora frameworks, paradigmas y lenguajes
							distintos. Si eres backend, prueba frontend. Si usas
							Java, prueba Python o Go. Salir de la zona de
							confort expande tu conocimiento.
						</li>
					</ul>
					<h3>🔹 10. Comparte tu Conocimiento</h3>
					<ul>
						<li>
							✅ Explicar lo que aprendes en un blog, videos o
							mentorías te ayudará a reforzar tus conocimientos y
							aportar a la comunidad.
						</li>
					</ul>

					<p>
						📌 Conclusión: La mejora en programación es un camino
						constante. La clave está en la práctica, el aprendizaje
						continuo y la pasión por resolver problemas.
					</p>

					<img
						src="https://media.licdn.com/dms/image/v2/D4E22AQEJOCHekce-ng/feedshare-shrink_800/B4EZVZcpmoHcAg-/0/1740962449554?e=1744243200&v=beta&t=IjT_96MTQLtl5cgeshbwgXN7HSAhVi-rSvLra_KsNk0"
						alt="cleanCode"
						className="randImage"
					/>

					<p className="hashtags">
						#Programación #DesarrolloDeSoftware #CleanCode #Backend
						#Frontend #Java #SpringBoot #ArquitecturaDeSoftware
						#DevOps #CodingTips 🚀
					</p>

					{/* <p>
						<strong>💻 Fuente original de la idea:</strong>{" "}
						Publicación en LinkedIn de{" "}
						<a
							href="https://www.linkedin.com/posts/juan-manuel-hern%C3%A1ndez-estudillo-212470168_programaciaejn-desarrollodesoftware-cleancode-activity-7302125780346548225-WBlX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDR2M4BvnkBBJj5nQvfdb51dhPqptfFY3I"
							target="_blank"
						>
							Juan Manuel Hernández
						</a>
						. Sr Developer Backend.
					</p> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "06 abril 2025",
		title: "Consejo: ¿Falta de inspiración? Ejemplos de construcción diseño UI y UX",
		description:
			"Alguna vez te preguntaste cómo sabés instintivamente qué elementos en una UI son interactivos? Eso es gracias a los significantes.",
		keywords: [
			"APIs",
			"Desarrollo",
			"Programación",
			"Software",
			"Herramientas",
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid var(--link-color) !important;
				max-width: 100%;
				height: auto;
			}
			
			.hashtags {
				font-weight: bold;
				color: #1D79D7;
			}

			.marginBottom {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 0.5rem;

			}

			.btn-example1 {
				position: relative;
				color: white;
				background: linear-gradient(90deg, var(--link-color), var(--link-color));
				width: 20%;
				height: 40px;
				font-family: var(--tertiary-font);
				text-align: center;
				border: none;
				border-radius: 50px;
				cursor: pointer;
				transition: all 0.3s ease;
				overflow: hidden;
				z-index: 1;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
			}

			.btn-example1:hover::before {
				opacity: 1;
				transform: scale(1, 1);
			}

			.btn-example1:hover {
				transform: translateY(-3px);
				box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
				color: var(--link-color);
				background: white;
			}

			.btn-example1:active {
				transform: translateY(1px);
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
			}

			@media (max-width: 600px) {
				.btn-example1 {
				width: 40%;

				}
			}

		`,

		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						¿Qué son los significantes? Son señales que comunican
						cómo debe usarse un elemento, pistas visuales, sonidos,
						animaciones, textos, ubicación… básicamente, cualquier
						indicio de interactividad.
					</div>

					<h3>💡Ejemplos de significantes en acción:</h3>
					<ul style={{ listStyle: "none", padding: 0 }}>
						<li style={{ marginBottom: "2rem" }}>
							✅ Un botón con sombra → Parece presionable.
							<div className="marginBottom">
								<button className="btn-example1">
									Presióname
								</button>
							</div>
						</li>

						<li style={{ marginBottom: "2rem" }}>
							✅ Un enlace subrayado → Da a entender que es
							clickeable.
							<div className="marginBottom">
								<a
									href={window.location.href}
									style={{
										color: "var(--link-color)",
										textDecoration: "underline",
										fontSize: "1rem",
									}}
								>
									#Este es un enlace
								</a>
							</div>
						</li>

						<li style={{ marginBottom: "2rem" }}>
							✅ Un slider con un handle → Invita a arrastrarlo.
							<div className="marginBottom">
								<input
									type="range"
									min="0"
									max="100"
									defaultValue="50"
									style={{
										width: "100%",
										maxWidth: "300px",
										accentColor: "var(--link-color)",
										cursor: "pointer",
									}}
								/>
							</div>
						</li>

						<li style={{ marginBottom: "2rem" }}>
							✅ Un bip al tocar algo → Confirma la acción.
							<div
								style={{ marginTop: "0.5rem" }}
								className="marginBottom"
							>
								<button
									onClick={() =>
										new Audio(
											"https://www.soundjay.com/buttons/sounds/button-16a.mp3"
										).play()
									}
									className="btn-example1"
								>
									Tócame
								</button>
							</div>
						</li>
					</ul>

					<p>
						📌 Los significantes no son solo visuales, pueden ser
						sonoros, táctiles o incluso de comportamiento. La clave
						es: si una persona puede percibirlo e interpretarlo como
						una pista, es un significante.
					</p>
					<p>
						📌 Conclusión: Un buen diseño UX no solo hace que las
						cosas funcionen, sino que sean intuitivas. Y ahí es
						donde los significantes marcan la diferencia. ✨
					</p>

					<img
						src="https://media.licdn.com/dms/image/v2/D4D10AQH-_tyGFni9dw/image-shrink_1280/B4DZWhCfruGkAM-/0/1742163542483?e=1744585200&v=beta&t=Zx2fT8Y3WeLsz7mDI5n4xAGMxj6uEqT-d4_y5ZnAbLA"
						alt="cleanCode"
						className="randImage"
					/>

					<p className="hashtags">
						#Programación #DesarrolloDeSoftware #CleanCode #Backend
						#Frontend #IA #UI #UX #DevOps #CodingTips 🚀
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_1() {
	return {
		date: "15 abril 2025",
		title: "Tutorial:  ¿Quieres aprender Backend Development como un PRO?",
		description:
			"GUÁRDALO AHORA si estás construyendo tu camino como desarrollador backend. ¡Este mapa mental te lo deja clarito!",
		keywords: ["APIs", "Desarrollo", "Backend", "Development", "PRO"],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid var(--link-color) !important;
				max-width: 100%;
				height: auto;
			}
			
			.hashtags-container {
				display: flex;
				flex-wrap: wrap;
				gap: 10px;
				margin: 25px 0;
				justify-content: center;
			}

			.hashtag {
				background: #eef2ff;
				color: #1D79D7;
				padding: 5px 12px;
				border-radius: 20px;
				font-weight: 600;
				font-size: 0.9em;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Aquí tienes los 6 pilares esenciales para dominar el
						backend: 🧠🧩
					</div>
					<h3>
						🔹 1️⃣ Fundamentos: Aprende las bases antes de entrar en
						el código:
					</h3>
					<ul>
						<li>✅ ¿Qué es backend vs frontend?</li>
						<li>✅ ¿Cómo funciona el modelo cliente-servidor?</li>
						<li>
							✅ Conceptos clave como DNS, HTTP, puertos y
							dominios
						</li>
					</ul>
					<h3>
						🔹 2️⃣ Lenguajes de programación Backend: Elige el que
						más se ajuste a tu estilo y proyecto:
					</h3>
					<ul>
						<li>🟢 JavaScript (Node.js)</li>
						<li>🐍 Python (Django, Flask)</li>
						<li>☕ Java (Spring Boot)</li>
						<li>🔵 C# (.NET)</li>
						<li>🐹 Go</li>
						<li>🦀 Rust</li>
					</ul>

					<h3>
						🔹 3️⃣ Bases de Datos (DB): Todo sistema necesita guardar
						datos:
					</h3>
					<ul>
						<li>📌 SQL: PostgreSQL, MySQL, SQLite</li>
						<li>📌 NoSQL: MongoDB, Firebase, DynamoDB</li>
						<li>📌 NewSQL: CockroachDB, Google Spanner</li>
						<li>
							🎯 Aprende a usar ORMs (Sequelize, Prisma,
							Hibernate)
						</li>
						<li>⚡ Implementa caching (Redis, Memcached)</li>
					</ul>

					<h3>
						🔹 4️⃣ APIs y Servicios Web: Aprende a conectar tus
						sistemas:
					</h3>
					<ul>
						<li>📌 REST, GraphQL, gRPC, SOAP</li>
						<li>🔐 Autenticación: JWT, OAuth2, API Keys</li>
						<li>
							🛡️ Buenas prácticas: rate limiting, versionado,
							documentación
						</li>
					</ul>

					<h3>
						🔹 5️⃣ Servidores y Hosting: Sube tu app al mundo real:
					</h3>
					<ul>
						<li>🛠️ Configura servidores (Nginx, Apache)</li>
						<li>🐳 Usa Docker para contenerización</li>
						<li>☁️ Hosting: AWS, Azure, GCP, Vercel</li>
						<li>⚙️ Kubernetes para orquestación avanzada</li>
					</ul>

					<h3>
						🔹 6️⃣ DevOps para Backend: Automatiza, monitorea y
						mejora tu flujo:
					</h3>
					<ul>
						<li>🚀 CI/CD con GitHub Actions, Jenkins</li>
						<li>📦 IaC: Terraform, Ansible</li>
						<li>📊 Monitoreo: Prometheus, Grafana, ELK Stack</li>
					</ul>

					<p>
						💬 ¿Y tú? ¿Qué agregarías para dominar el backend en
						2025?
					</p>

					<img
						src="https://media.licdn.com/dms/image/v2/D4E22AQF5lJq8YPIFbg/feedshare-shrink_800/B4EZX_IGXvHgAg-/0/1743742072370?e=1746662400&v=beta&t=s0a8Fplxq63ywn4Kia5RC_1TApQzZn7LPopYrKrcxMI"
						alt="cleanCode"
						className="randImage"
					/>

					<div className="hashtags-container">
						<span className="hashtag">#BackendDevelopment</span>
						<span className="hashtag">#WebDevelopment</span>
						<span className="hashtag">#DevOps</span>
						<span className="hashtag">#FullStack</span>
						<span className="hashtag">#Microservices</span>
						<span className="hashtag">#Docker</span>
						<span className="hashtag">#APIs</span>
						<span className="hashtag">#BackendEngineer</span>
						<span className="hashtag">#BackendRoadmap</span>
						<span className="hashtag">#CloudComputing</span>
						<span className="hashtag">#Python</span>
						<span className="hashtag">#Nodejs</span>
						<span className="hashtag">#Infrastructure</span>
						<span className="hashtag">#Database</span>
					</div>

					<p>
						<strong>💻 Fuente original de la idea:</strong>{" "}
						Publicación en LinkedIn de{" "}
						<a
							href="https://www.linkedin.com/feed/update/urn:li:activity:7300122407896252416/"
							target="_blank"
						>
							Ignacio C
						</a>
						. Ayudo a desarrolladores a crecer con IA y software.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_0() {
	return {
		date: "18 abril 2025",
		title: "Tutorial: Generador Avanzado de Keywords para Google Ads con IA y PHP",
		description:
			"Implementa un sistema inteligente para generación de palabras clave con métricas SEO usando la API de Google Ads y Gemini AI.",
		keywords: [
			"Google Ads",
			"PHP",
			"SEO",
			"Inteligencia Artificial",
			"Gemini AI",
			"API Integration",
			"Keyword Research",
		],
		style: `
			@import "../data/styles.css";

			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid var(--link-color) !important;
				max-width: 100%;
				height: auto;
				border-radius: 4px 4px 4px 4px;
			}
			
			.hashtags-container {
				display: flex;
				flex-wrap: wrap;
				gap: 10px;
				margin: 25px 0;
				justify-content: center;
			}

			.hashtag {
				background: #eef2ff;
				color: #1D79D7;
				padding: 5px 12px;
				border-radius: 20px;
				font-weight: 600;
				font-size: 0.9em;
			}

			.feature-box {
				background: #f8f9fa;
				border-radius: 8px;
				padding: 20px;
				margin: 15px 0;
				border-left: 4px solid var(--link-color);
			}

			.code-block {
				background: #2d2d2d;
				color: #f8f8f2;
				padding: 15px;
				border-radius: 5px;
				font-family: monospace;
				overflow-x: auto;
				margin: 15px 0;
			}

			.warning-box {
				background: #fff8e6;
				border-left: 4px solid #ffc107;
				padding: 15px;
				margin: 20px 0;
				border-radius: 4px 4px 4px 4px;
			}

		
			.permission-list {
				columns: 2;
				margin: 15px 0;
			}
			@media (max-width: 768px) {
				.permission-list {
					columns: 1;
				}
			}
				@media (max-width: 768px) {
				.article-content {
					padding: 0 15px;
				}
				
				.feature-box, .warning-box {
					padding: 18px;
				}
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Descubre cómo crear un generador avanzado de palabras
						clave para Google Ads que combina scraping, inteligencia
						artificial y análisis SEO profesional. 🚀
					</div>

					<div className="feature-box">
						<h3>🌟 Características principales</h3>
						<ul>
							<li>
								✅ Extracción automática de metatags y contenido
								visible desde cualquier URL
							</li>
							<li>
								✅ Generación inteligente de keywords usando
								Google Gemini AI
							</li>
							<li>
								✅ Análisis semántico comparativo frente a la
								competencia
							</li>
							<li>
								✅ Conexión directa con el Keyword Planner de
								Google Ads
							</li>
							<li>
								✅ Exportación en múltiples formatos (JSON, CSV)
							</li>
						</ul>
					</div>

					<div className="feature-box">
						<h3>
							📋 Requisitos del sistema y proceso de
							Implementación
						</h3>
						<ul>
							<li>PHP 8.2 o superior</li>
							<li>Composer para gestión de dependencias</li>
							<li>Cuenta de Google Ads con acceso API</li>
							<li>API Key para Google Gemini</li>
							<li>
								Token de desarrollador aprobado para Google Ads
							</li>
						</ul>
					</div>

					<div className="feature-box">
						<h3>1. Preparación del Entorno</h3>
						<ul>
							<li>
								Configura un proyecto en Google Cloud Console
							</li>
							<li>
								Habilita las APIs requeridas en el panel de
								administración
							</li>
							<li>
								Establece pantallas de consentimiento OAuth
								válidas
							</li>
						</ul>
					</div>

					<div className="feature-box">
						<h3>2. Instalar dependencias</h3>
						<p>
							Primero asegúrate de tener{" "}
							<a href="https://getcomposer.org" target="_blank">
								Composer
							</a>{" "}
							instalado, luego ejecuta:
						</p>
						<div className="code-block">composer install</div>
					</div>

					<div className="feature-box">
						<h3>3. Autenticación OAuth 2.0</h3>
						<p>El sistema utiliza el flujo estándar de Google:</p>
						<ol>
							<li>Inicia el proceso desde tu aplicación</li>
							<li>Autoriza los scopes requeridos</li>
							<li>Captura el código de autorización</li>
							<li>Intercámbialo por tokens de acceso/refresh</li>
						</ol>
					</div>

					<div className="warning-box">
						<h4>⚠️ Buenas Prácticas de Tokens</h4>
						<p>
							Almacena los tokens refresh en un servicio seguro
							como:
						</p>
						<ul>
							<li>AWS Secrets Manager</li>
							<li>Google Cloud Secret Manager</li>
							<li>Azure Key Vault</li>
							<li>
								Soluciones cifradas locales (solo desarrollo)
							</li>
						</ul>
					</div>

					<div className="feature-box">
						<h3>5. Configurar credenciales de Google Ads</h3>
						<ul>
							<li>Establece los IDs de cliente autorizados</li>
							<li>Configura los límites de cuota adecuados</li>
							<li>Define las políticas de acceso por roles</li>
						</ul>
						<p>
							Crea un archivo <code>google_ads_php.ini</code> con:
						</p>

						<div className="code-block">
							[GOOGLE_ADS]
							<br />
							developerToken = "TU_TOKEN_DE_DESARROLLADOR"
							<br />
							<br />
							[OAUTH2]
							<br />
							clientId = "TU_CLIENT_ID"
							<br />
							clientSecret = "TU_CLIENT_SECRET"
							<br />
							refreshToken = "TU_REFRESH_TOKEN"
							<br />
							<br />
							[CONNECTION]
							<br />
							customerId = "CUSTOMER_ID"
							<br />
							languageId = "LANGUAGE_ID"
							<br />
							locationId = "LOCATION_ID"
						</div>
					</div>

					<div className="feature-box">
						<h3>6. Configurar Google Gemini</h3>
						<p>
							Crea un archivo <code>.env</code> con:
						</p>
						<div className="code-block">
							GOOGLE_API_KEY=''
							<br />
							GOOGLE_CLIENT_ID=''
							<br />
							GOOGLE_CLIENT_SECRET=''
						</div>
					</div>

					<div className="feature-box">
						<h3>7. Puesta en Producción</h3>
						<p>Una vez completada la configuración:</p>
						<ul>
							<li>
								Verifica los permisos de todas las cuentas
								vinculadas
							</li>
							<li>Prueba el flujo completo en modo sandbox</li>
							<li>Implementa monitoreo para las llamadas API</li>
							<li>Establece alertas por uso anómalo</li>
						</ul>
					</div>

					<div className="feature-box">
						<h3>📊 Flujo de trabajo del sistema</h3>
						<ol>
							<li>Recibe una URL objetivo como entrada</li>
							<li>
								Realiza scraping para extraer metadatos y
								contenido
							</li>
							<li>
								Envía la información a Gemini AI para generación
								de keywords
							</li>
							<li>
								Conecta con Google Ads Keyword Planner para
								métricas
							</li>
							<li>Compara con competidores (opcional)</li>
							<li>Genera reportes completos</li>
						</ol>
					</div>

					<div className="warning-box">
						<h3>🔒 Consideraciones Finales de Seguridad</h3>
						<ul>
							<li>Audita regularmente los accesos a la API</li>
							<li>
								Implementa IP restrictions en la configuración
								OAuth
							</li>
							<li>
								Usa cuentas de servicio para acceso programático
							</li>
							<li>
								Considera implementar un proxy de API para mayor
								seguridad
							</li>
						</ul>
					</div>

					<div className="warning-box">
						<h3>⚠️ Requisitos Clave de Seguridad</h3>
						<ul>
							<li>
								Nunca compartas tus tokens de acceso en
								repositorios públicos
							</li>
							<li>
								Utiliza siempre conexiones HTTPS para todas las
								llamadas API
							</li>
							<li>
								Restringe las IPs autorizadas en Google Cloud
								Console
							</li>
							<li>
								Implementa rotación periódica de credenciales
							</li>
						</ul>
					</div>

					<div className="warning-box">
						<h3>💡 Notas importantes</h3>
						<ul>
							<li>
								🔐 Asegúrate de tener habilitadas las APIs
								necesarias en Google Cloud Console
							</li>
							<li>
								🆓 Puedes usar customerId de cuentas de prueba
								para desarrollo
							</li>
							<li>
								🌍 El sistema está preparado para multi-idioma y
								diferentes regiones
							</li>
						</ul>
					</div>

					<br />

					<img
						src="https://luciayelseo.com/wp-content/uploads/2020/12/tipos-de-keywords-seo-955x675.png"
						alt="Ejemplo de investigación de keywords"
						className="randImage"
					/>

					<div className="hashtags-container">
						<span className="hashtag">#GoogleAdsAPI</span>
						<span className="hashtag">#SEOAutomation</span>
						<span className="hashtag">#PHPDevelopment</span>
						<span className="hashtag">#AIMarketing</span>
						<span className="hashtag">#KeywordResearch</span>
						<span className="hashtag">#InteligenciaArtificial</span>
						<span className="hashtag">#GeminiAI</span>
						<span className="hashtag">#DesarrolloWeb</span>
					</div>

					<div className="feature-box">
						<p>
							<strong>
								💻 Proyecto desarrollado con ❤️ por:
							</strong>{" "}
							<a
								href="https://github.com/josuedevx"
								target="_blank"
							>
								Josué Álvarez
							</a>{" "}
							<br />
							Especialista en integraciones API y automatización
							de SEO
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [
	article_0,
	article_1,
	article_2,
	article_3,
	article_4,
	article_5,
	article_6,
	article_7,
	article_8,
	article_9,
];

export default myArticles;
