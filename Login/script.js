
function validarFormulario(event) {
  event.preventDefault(); // evita que se envíe el formulario si no se pasó la validación

  // Obtener los valores de los campos de formulario
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Realizar la validación de los campos
  if (email === "") {
    alert("Por favor, ingrese su dirección de correo electrónico.");
    return false;
  }

  if (password === "") {
    alert("Por favor, ingrese su contraseña.");
    return false;
  }

  // Si se pasó la validación, redirigir al usuario a la página "index.html" dentro de la carpeta "clients"
  window.location.href = "../registration/index.html";
}