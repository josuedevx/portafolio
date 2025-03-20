const formData = "/project/";
const text = "Detalles";
const INFO = {
	main: {
		title: "Portafolio",
		name: "Josue Alvarez Rodriguez",
		email: "arj1931126@gmail.com",
		logo: "https://github.com/jalvarezturing-ia/portafolio/blob/main/public/yo.jpg",
	},

	socials: {
		github: "https://github.com/josuedevx",
		linkedin:
			"https://www.linkedin.com/in/josué-alvarez-rodriguez-012249264",
		instagram: "https://www.instagram.com/alv._.rod?igsh=NDYybGRzdGNna245",
		facebook:
			"https://www.facebook.com/josue.alvarezrodriguez.372?mibextid=ZbWKwL",
		website: "https://josuedevx.github.io/webshop/",
		form: "https://forms.gle/DmK8mgJ78cuAJZux5",
	},

	homepage: {
		title: "Desarrollador Full Stack: Web y Móvil 👨🏻‍💻",
		description:
			"Soy un desarrollador full-stack con experiencia en la construcción de aplicaciones web escalables, seguras y fiables utilizando diversos marcos y tecnologías. Disfruto resolver problemas complejos y aprendiendo nuevas habilidades. Me apasiona crear código de alta calidad que siga las mejores prácticas y estándares de la industria. Siempre estoy buscando nuevos retos y oportunidades para crecer como desarrollador.",
	},

	about: {
		title: "Orden y colaboración son mi superpoder 🤝🏻",
	},

	articles: {
		title: "Innovador incansable y mentor de los creadores del mañana 🌟",
		description:
			"Recopilación cronológica de algunas de mis reflexiones sobre programación, liderazgo, diseño de productos, etc.",
	},

	contact: {
		title: "Pongámonos en contacto: ¡Hagamos realidad las ideas! 📞",
	},

	projects: [
		{
			title: "Visor de Documentos en Línea",
			description:
				"Desarrollé un sistema de gestión de documentos PDF que optimiza el acceso y la seguridad de la información. Los usuarios pueden visualizar archivos según su rol, asegurando un control de permisos eficiente. La autenticación se gestiona con SAML como IdP para reforzar la seguridad, y la infraestructura.",
			logo: "https://www.iconpacks.net/icons/2/free-pdf-download-icon-2617-thumb.png",
			technologies: [
				{
					name: "Node.js",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
				},
				{
					name: "React",
					logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
				},
				{
					name: "Python",
					logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
				},
				{
					name: "GCP",
					logo: "https://ucloudglobal.com/wp-content/uploads/2021/09/gcp-02.png",
				},
				{
					name: "Docker",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
				},
				{
					name: "BitBucket",
					logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/44_Bitbucket_logo_logos-512.png",
				},
			],
			linkText: text,
			link: formData,
		},
		{
			title: "Plataforma de Análisis de Datos",
			description:
				"Colaboré en la implementación de un Identity Provider (IdP), fortaleciendo la seguridad del sistema y optimizando la experiencia del usuario mediante la integración de un inicio de sesión único (SSO) utilizando el protocolo OpenID Connect (OIDC).",
			logo: "https://cdn-icons-png.flaticon.com/512/2471/2471341.png",
			technologies: [
				{
					name: "Node.js",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
				},
				{
					name: "React",
					logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
				},
				{
					name: "GCP",
					logo: "https://ucloudglobal.com/wp-content/uploads/2021/09/gcp-02.png",
				},
				{
					name: "Docker",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
				},
				{
					name: "GitLab",
					logo: "https://static-00.iconduck.com/assets.00/gitlab-icon-1024x942-f30d1qro.png",
				},
			],
			linkText: text,
			link: formData,
		},
		{
			title: "Gestión de Personal",
			description:
				"Desarrollé e implementé un portal integral para la gestión y comunicación del personal, mejorando la eficiencia en la administración de datos y la interacción entre usuarios. La plataforma permitió optimizar flujos de trabajo y centralizar la información clave del equipo.",
			logo: "https://cdn-icons-png.flaticon.com/512/12105/12105243.png",
			technologies: [
				{
					name: "Laravel 10",
					logo: "https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png",
				},
				{
					name: "PHP 8",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919830.png",
				},
				{
					name: "Vue.js",
					logo: "https://static-00.iconduck.com/assets.00/vue-js-icon-2048x1766-btrgkrhi.png",
				},
				{
					name: "MySQL",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
				},
			],
			linkText: text,
			link: formData,
		},
		{
			title: "App de Control Financiero",
			description:
				"Desarrollé una aplicación móvil para gestionar pagos de clientes de un proveedor de servicios de Internet inalámbrico (WISP), utilizando PHP, MySQL y Android Studio, asegurando un flujo de pagos eficiente y adaptado a las necesidades del negocio.",
			logo: "https://cdn-icons-png.flaticon.com/512/2471/2471341.png",
			technologies: [
				{
					name: "MySQL",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
				},
				{
					name: "PHP",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919830.png",
				},
				{
					name: "CSS",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
				},
				{
					name: "Tailwind",
					logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
				},
				{
					name: "Android Studio",
					logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png",
				},
			],
			linkText: text,
			link: formData,
		},
		{
			title: "Embebido de Dashboards Online",
			description:
				"Implementé la integración de dashboards analiticos en una aplicación web para visualizar información en tiempo real y mejorar la toma de decisiones basada en datos.",
			logo: "https://cdn-icons-png.flaticon.com/256/8899/8899687.png",
			technologies: [
				{
					name: "Tableau",
					logo: "https://img.icons8.com/?size=512&id=9Kvi1p1F0tUo&format=png",
				},
				{
					name: "Salesforce",
					logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
				},
				{
					name: "SQL Server",
					logo: "https://img.icons8.com/color/512/microsoft-sql-server.png",
				},
			],
			linkText: text,
			link: formData,
		},
		{
			title: "Portal de Aprendizaje Online",
			description:
				"Desarrollé una plataforma de cursos en línea con sistema de autenticación, seguimiento de progreso y certificados digitales. Implementé React y Node.js con una arquitectura modular y escalable.",
			logo: "https://static.vecteezy.com/system/resources/previews/016/717/581/non_2x/virtual-learning-and-teaching-online-free-png.png",
			technologies: [
				{
					name: "Node.js",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
				},
				{
					name: "React",
					logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
				},
				{
					name: "PostgreSQL",
					logo: "https://images.icon-icons.com/2415/PNG/512/postgresql_original_wordmark_logo_icon_146392.png",
				},
				{
					name: "Tailwind",
					logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
				},
				{
					name: "Docker",
					logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
				},
			],
			linkText: text,
			link: formData,
		},
	],

	disclaimer: {
		description:
			"Los proyectos mencionados en este portafolio son descripciones generales de mi experiencia y contribuciones. No comparto código fuente, documentación interna ni información confidencial de ninguna empresa. Toda la información presentada es de carácter público y se limita a destacar mis habilidades y el trabajo realizado sin divulgar detalles sensibles.",
	},
};

export default INFO;
