// Declaración de variables
let listaProfesores = document.querySelector('#imagesContainer');
let buscador = document.querySelector('#buscador');

// Declaración de funciones
const cargarStaff = async (eleccion) => {
  const peticion = await fetch('../data/staff.json');
  const data = await peticion.json();
  const todos = data.map(profe => crearCard(profe)).join('');
  const seleccion = data.filter((elegido) => elegido.id.includes(eleccion));
  const filtro = seleccion.map(profe => crearCard(profe)).join('');
  
  eleccion ? listaProfesores.innerHTML = filtro : listaProfesores.innerHTML = todos
}

const crearCard = (profe) => `
  <div class="col-lg-4 col-md-6 col-12" id="${profe.id}">
    <div class="staff_container">
      <div class="img_container">
        <img src=${profe.foto} alt="${profe.nombre}" />
      </div>
      <div class="tarjetaInterna">
        <span class="float-end"><i class="fa-solid fa-circle-info"></i></span>
        <h3 class="my-md-4 my-1">${profe.nombre}</h3>
        <p>${profe.descripcion}</p>
      </div>
    </div>
  </div>
`;

const cargarProfeElegido = (evt) => {
  listaProfesores.innerHTML = ''
  const eleccion = evt.target.value.toUpperCase();
  cargarStaff(eleccion)
}

// Eventos
buscador.addEventListener('keyup',cargarProfeElegido);
cargarStaff();