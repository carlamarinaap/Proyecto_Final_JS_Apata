// Declaracion de variables
let form = document.querySelector("#form_registro");
let info = document.querySelector("#info");


//Declaracion de Funciones
function submitHandler(evt) {
  evt.preventDefault();
  validarDatos(evt);
}

function validarDatos(evt) {
  if (
    (evt.target.correo.value == "") |
    (evt.target.contrasena.value == "")|
    (evt.target.confirmacion.value == "") |
    (evt.target.genero.value == "") |
    (evt.target.nombre.value == "") 
  ) {
    info.innerHTML = `<p class='text-danger'>Debe completar todos los campos</p>`;
  } else if (localStorage.getItem(evt.target.correo.value)) {
    info.innerHTML = `<p class='text-danger'>Ya existe una cuenta con este correo</p>`;
  } else if (evt.target.contrasena.value !== evt.target.confirmacion.value){
    info.innerHTML = `<p class='text-danger'>Las contraseñas no coinciden</p>`;
  } else {
    let cliente ={
      'nombre': evt.target.nombre.value,
      'correo': evt.target.correo.value,
      'genero': evt.target.genero.value,
      'contrasena': evt.target.confirmacion.value
    };
      localStorage.setItem(evt.target.correo.value, JSON.stringify(cliente));
      info.innerHTML = `
      <div>
        <p class='text-success'>El usuario se ha registrado con éxito.</p>
        <p class='text-success'>Ahora debe iniciar sesión para acceder a su plan de entrenamiento</p>
        <a href="./inicia_sesion.html" class="btn btn-sm btn-outline-warning"
        >Inicia Sesión</a
      >
      </div>`;
  }
}

function saludar(persona) {
  if (persona.genero == "F") {
    info.innerHTML = `
    <h3 class='text-warning'>Bienvenida ${persona.nombre}!</h3>`
  } else {
    info.innerHTML = `
    <h3 class='text-warning'>Bienvenido ${persona.nombre}!</h3>`
  }
}

function recomendacion(persona){
  saludar(persona)
    if(persona.imc < 18.5){
      return (
        info.innerHTML += `
        <p>De acuerdo a tus datos, debes acompañar el siguiente plan con una dieta hipercalórica</p>
        <h3> Este es tu plan </h3>
        <ul class='list-unstyled'>
          <li>3x10 abdominales cortos</li>
          <li>3x10 biceps con mancuernas</li>
          <li>3x10 triceps en polea</li>
          <li>3x20 sentadillas con peso</li>
        </ul>
        `
      );
    }
    if(persona.imc >= 18.5 && persona.imc <= 24.9){
      return (
        info.innerHTML += `
        <h3> Este es tu plan </h3>
        <ul class='list-unstyled'>
          <li>3x10 abdominales cortos</li>
          <li>3x10 biceps con mancuernas</li>
          <li>3x10 triceps en polea</li>
          <li>3x20 sentadillas con peso</li>
        </ul>
        `
      );
    }
    if(persona.imc > 24.9 && persona.imc < 30){
      return (
        info.innerHTML += `
        <p>De acuerdo a tus datos, debes acompañar el siguiente plan con una dieta hipocalórica</p>
        <h3> Este es tu plan </h3>
        <ul class='list-unstyled'>
          <li>3x10 abdominales cortos</li>
          <li>3x10 biceps con mancuernas</li>
          <li>3x10 triceps en polea</li>
          <li>3x20 sentadillas con peso</li>
          <li>30 min cinta</li>
        </ul>
        `
      );
    }
    if(persona.imc >= 30){
      return (
        info.innerHTML += `
        <p>Te sugerimos hacer una consulta médica antes de comenzar el entrenamiento</p>
        `
      );
    }
  };

// Eventos
form.addEventListener("submit", submitHandler);