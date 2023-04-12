
function validarFormulario(event) {
  event.preventDefault(); // evita que se envíe el formulario si no se pasó la validación

  // Obtener los valores de los campos de formulario
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Leer el archivo JSON con las credenciales permitidas (solicitud AJAX)
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var usuarios = JSON.parse(this.responseText).usuarios;

     
      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email && usuarios[i].password === password) {
         
          window.location.href = "../clients/index.html";
          return;
        }
      }

      
      alert("El email o la contraseña ingresados son incorrectos.");
    }
  };
  xmlhttp.open("GET", "../Json/credenciales.json", true);
  xmlhttp.send();
}