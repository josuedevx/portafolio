const formData = "https://forms.gle/DmK8mgJ78cuAJZux5";
const text = "Contacto";
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
	},

	homepage: {
		title: "Desarrollador Full Stack: Web y Móvil 👨🏻‍💻",
		description:
			"Soy un desarrollador full-stack con experiencia en la construcción de aplicaciones web escalables, seguras y fiables utilizando diversos marcos y tecnologías. Disfruto resolver problemas complejos y aprendiendo nuevas habilidades. Me apasiona crear código de alta calidad que siga las mejores prácticas y estándares de la industria. Siempre estoy buscando nuevos retos y oportunidades para crecer como desarrollador.",
	},

	about: {
		title: "Orden y colaboración son mi superpoder 🤝🏻",
		description:
			"Muy adaptable a todo tipo de entornos y clara orientación a objetivos. Con conocimientos en diferentes lenguajes de programación como: TypeScript, JavaScript, PHP, entre otros; Interés en el área de desarrollo de software y/o Análisis de sistemas.",
	},

	articles: {
		title: "Innovador incansable y mentor de los creadores del mañana 🌟",
		description:
			"Recopilación cronológica de algunas de mis reflexiones sobre programación, liderazgo, diseño de productos, etc.",
	},

	projects: [
		{
			title: "Gestión de Personal",
			description:
				"Desarrollé e implementé un portal integral para la gestión y comunicación del personal, mejorando la eficiencia en la administración de datos y la interacción entre usuarios. La plataforma permitió optimizar flujos de trabajo y centralizar la información clave del equipo.",
			logo: "https://cdn-icons-png.flaticon.com/512/12105/12105243.png",
			linkText: text,
			link: formData,
		},

		{
			title: "Visor de Documentos en Línea",
			description:
				"Desarrollé un sistema de gestión de documentos PDF que optimiza el acceso y la seguridad de la información. Los usuarios pueden visualizar archivos según su rol, asegurando un control de permisos eficiente. La autenticación se gestiona con SAML como IdP para reforzar la seguridad, y la infraestructura.",
			logo: "https://www.iconpacks.net/icons/2/free-pdf-download-icon-2617-thumb.png",
			linkText: text,
			link: formData,
		},

		{
			title: "Plataforma de Análisis de Datos",
			description:
				"Colaboré en la implementación de un Identity Provider (IdP), fortaleciendo la seguridad del sistema y optimizando la experiencia del usuario mediante la integración de un inicio de sesión único (SSO) utilizando el protocolo OpenID Connect (OIDC).",
			logo: "https://cdn-icons-png.flaticon.com/512/2471/2471341.png",
			linkText: text,
			link: formData,
		},

		{
			title: "App de Control Financiero",
			description:
				"Desarrollé una aplicación móvil para gestionar pagos de clientes de un proveedor de servicios de Internet inalámbrico (WISP), utilizando PHP, MySQL y Android Studio, asegurando un flujo de pagos eficiente y adaptado a las necesidades del negocio.",
			logo: "https://cdn-icons-png.flaticon.com/512/2471/2471341.png",
			linkText: text,
			link: formData,
		},
		{
			title: "Embebido de Dashboards Online",
			description:
				"Implementé la integración de dashboards analiticos en una aplicación web para visualizar información en tiempo real y mejorar la toma de decisiones basada en datos.",
			logo: "https://cdn-icons-png.flaticon.com/256/8899/8899687.png",
			linkText: text,
			link: formData,
		},
		{
			title: "Portal de Aprendizaje Online",
			description:
				"Desarrollé una plataforma de cursos en línea con sistema de autenticación, seguimiento de progreso y certificados digitales. Implementé React y Node.js con una arquitectura modular y escalable.",
			logo: "https://static.vecteezy.com/system/resources/previews/016/717/581/non_2x/virtual-learning-and-teaching-online-free-png.png",
			linkText: text,
			link: formData,
		},
	],
};

export default INFO;
