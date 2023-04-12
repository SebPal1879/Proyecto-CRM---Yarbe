
function validarFormulario(event) {
  event.preventDefault(); // evita que se envíe el formulario si no se pasó la validación

  // Obtener los valores de los campos de formulario
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Leer el archivo JSON con las credenciales permitidas
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var usuarios = JSON.parse(this.responseText).usuarios;

      // Verificar si el email y la contraseña ingresados coinciden con alguna de las credenciales del archivo JSON
      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email && usuarios[i].password === password) {
          // Si se pasó la validación, redirigir al usuario a la página "index.html" dentro de la carpeta "clients"
          window.location.href = "../clients/index.html";
          return;
        }
      }

      // Si no se encontró ninguna credencial que coincida, mostrar un mensaje de error
      alert("El email o la contraseña ingresados son incorrectos.");
    }
  };
  xmlhttp.open("GET", "../Json/credenciales.json", true);
  xmlhttp.send();
}