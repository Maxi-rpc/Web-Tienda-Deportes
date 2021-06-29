// Programacion desde el DOMError
console.log("Hola Mundo desde el DOM");

// validar formulario newsletter

const formNewsletter = document.getElementById("newsletter");

formNewsletter.addEventListener("submit", (e) => {
	e.preventDefault();

	var email = document.getElementById("email");
	if (email.value == "") {
		email.classList.add("is-invalid");
	} else {
		email.classList.remove("is-invalid");
	}
});
