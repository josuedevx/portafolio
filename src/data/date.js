function getDate() {
	const today = new Date();
	const day = today.getDate();
	const year = today.getFullYear();
	const months = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	];

	const monthName = months[today.getMonth()]; 

	return `${monthName} de ${year}`;
	// return `${day} ${monthName} ${year}`;
}

export default getDate;
