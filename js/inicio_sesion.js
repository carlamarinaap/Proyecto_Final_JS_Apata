// Declaracion de variables
let form = document.querySelector("#form_inicioSesion");
let sesionIniciada = document.querySelector('#sesionIniciada')
let info = document.querySelector("#info");
let botonSalir = document.querySelector('#salir')
let correoSesion = document.querySelector('#correoSesion')
let datos = document.querySelector("#datos");
let listado = document.querySelector('#listado')
let logo = document.querySelector('#logo')

//Declaracion de Funciones
function submitHandler(evt) {
  evt.preventDefault();
  validarDatos(evt);
}

function validarDatos(evt) {
  if (
    (evt.target.correo.value == "") |
    (evt.target.contrasena.value == "")
  ) {
    info.innerHTML = `<p class='text-danger'>Debe completar todos los campos</p>`;
  } else
  if (!localStorage.getItem(evt.target.correo.value)) {
    info.innerHTML = `<p class='text-danger'>Correo no regisgtrado o incorrecto</p>`
  }
    else {
    let persona = JSON.parse(localStorage.getItem(evt.target.correo.value))
    if (persona.contrasena == evt.target.contrasena.value) {
      sessionStorage.setItem(persona.correo, JSON.stringify(persona))
      form.setAttribute('class', 'd-none');
      sesionIniciada.removeAttribute('class');
      saludar(persona)
      if(persona.imc) {
        datos.setAttribute('class','d-none')
        recomendacion(persona);
      } else {
        correoSesion.setAttribute('value',JSON.parse(sessionStorage.getItem(persona.correo)).correo) 
        datos.addEventListener('submit', agregarDatos)
      }
    } else {
      info.innerHTML = `<p class='text-danger'>Contraseña incorrecta</p>`;
    }
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
    info.innerHTML += `
    <p>De acuerdo a tus datos, debes acompañar el siguiente plan con una dieta hipercalórica</p>
    <h3> Este es tu plan </h3>
    <ul class='list-unstyled'>
      <li>3x10 abdominales cortos</li>
      <li>3x10 biceps con mancuernas</li>
      <li>3x10 triceps en polea</li>
      <li>3x20 sentadillas con peso</li>
    </ul>
    `;
  }
  if(persona.imc >= 18.5 && persona.imc <= 24.9){
    info.innerHTML += `
    <h3> Este es tu plan </h3>
    <ul class='list-unstyled'>
      <li>3x10 abdominales cortos</li>
      <li>3x10 biceps con mancuernas</li>
      <li>3x10 triceps en polea</li>
      <li>3x20 sentadillas con peso</li>
    </ul>
    `;
  }
  if(persona.imc > 24.9 && persona.imc < 30){
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
      `;
  }
  if(persona.imc >= 30){
      info.innerHTML += `<p>Te sugerimos hacer una consulta médica antes de comenzar el entrenamiento</p>`;
  }
};

function agregarDatos(evt) {
  evt.preventDefault();
  if (evt.target.altura.value == '' | evt.target.peso.value == '') {
    info.innerHTML += `<p class='text-danger'>Debe completar todos los datos</p>`;
  } else {
    cliente = JSON.parse(sessionStorage.getItem(evt.target.correoSesion.value));
    cliente.altura = evt.target.altura.value;
    cliente.peso = evt.target.peso.value;
    cliente.imc = Math.round(evt.target.peso.value/((evt.target.altura.value/100)**2));
    sessionStorage.setItem(evt.target.correoSesion.value, JSON.stringify(cliente));
    localStorage.setItem(evt.target.correoSesion.value, JSON.stringify(cliente));
    datos.setAttribute('class', 'd-none')
    recomendacion(cliente)
  }

}

function cerrarSesion() {
  sessionStorage.clear()
}
// Eventos
form.addEventListener("submit", submitHandler);
botonSalir.addEventListener('click', cerrarSesion);
listado.addEventListener('click', cerrarSesion)
logo.addEventListener('click', cerrarSesion)


