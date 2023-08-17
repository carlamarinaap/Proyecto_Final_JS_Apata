//Declaración de variables
let form = document.getElementById("formulario");
let plan = document.querySelector(".plan");

//Declaracion de funciones
function submitHandler(evt) {
  evt.preventDefault();
  validarDatos(evt);
}

function validarDatos(evt) {
  if (
    (evt.target.nombre.value == "") |
    (evt.target.correo.value == "") |
    (evt.target.genero.value == "") |
    (evt.target.altura.value == "") |
    (evt.target.peso.value == "")
  ) {
    plan.innerHTML = `<p class='text-danger text-center'>Debe completar todos los campos</p>`;
  } else if (localStorage.getItem(evt.target.correo.value)) {
      form.setAttribute("class", "d-none");
      plan.innerHTML = `
      <div class='text-center'>
        <h4>Hola ${evt.target.nombre.value}!</h4>
        <p>Tu plan fue creado exitosamente, para verlo debes iniciar sesión</p>
        <a href="./pages/inicia_sesion.html" class="btn btn-sm btn-outline-warning m-auto">Inicia Sesión</a>
      </div>`;
    persona = JSON.parse(localStorage.getItem(evt.target.correo.value));
    persona.altura = evt.target.altura.value;
    persona.peso = evt.target.peso.value;
    persona.imc = Math.round(evt.target.peso.value/((evt.target.altura.value/100)**2));
    localStorage.setItem(evt.target.correo.value, JSON.stringify(persona));
  } 
  else {
    form.setAttribute("class", "d-none");
    plan.innerHTML = `
    <div class='text-center'>
      <h4>Hola ${evt.target.nombre.value}!</h4>
      <p>Debes crearte un usuario para acceder a tu plan</p>
      <a href="./pages/registro.html" class="btn btn-sm btn-outline-warning m-auto">Registrate</a>
    </div>`;
  }
}


//Eventos
form.addEventListener("submit", submitHandler);
