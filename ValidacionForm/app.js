// Seleccionamos el formulario y el mensaje de error
const form = document.getElementById("myForm");
const errorMessage = document.getElementById("error-message");

// Función para validar la contraseña
const validatePassword = (password) => {
  const hasUppercase = /[A-Z]/.test(password); // Al menos una mayúscula
  const hasNumber = /\d/.test(password);       // Al menos un número
  const minLength = password.length >= 8;     // Longitud mínima de 8 caracteres

  return hasUppercase && hasNumber && minLength;
};

// Escuchamos el evento submit del formulario
form.addEventListener("submit", (event) => {
  // Prevenimos el envío del formulario por defecto
  event.preventDefault();

  // Obtenemos los valores del formulario usando destructuring
  const { username, password } = Object.fromEntries(new FormData(form));

  // Validamos los datos
  if (!username.trim()) {
    errorMessage.textContent = "El nombre de usuario no puede estar vacío.";
    return;
  }

  if (!validatePassword(password)) {
    errorMessage.textContent =
      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.";
    return;
  }

  // Si pasa las validaciones
  errorMessage.textContent = "";
  alert("Formulario enviado con éxito.");
  form.reset(); // Reiniciamos el formulario
});
