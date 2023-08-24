// Declaración de variables
let contenedor = document.getElementById('sedesContainer');

 // Declaración de funciones 
const cargarSedes = async () => {
  const peticion = await fetch('../data/sedes.json');
  const data = await peticion.json();
  const todos = data.map(sede => crearCard(sede)).join('');
  contenedor.innerHTML = todos
}

const crearCard = (sede) => 
  `
  <div class="bg_img container" >
    <div class="row justify-content-around">
      <div class="sede col-md-auto col-12">
        <h3 class="fs-2 text-warning">${sede.nombre}</h3>
        <p>Dirección: ${sede.direccion}</p>
        <p>Teléfono: ${sede.telefono}</p>
        <p class="d-md-block d-none">Email: ${sede.correo}</p>
        <div class="mt-2">
          <a class="p-2" href="https://www.instagram.com" target="_blank"
            ><i class="fa-brands fa-instagram"></i
          ></a>
          <a class="p-2" href="https://www.facebook.com" target="_blank"
            ><i class="fa-brands fa-square-facebook"></i
          ></a>
          <a class="p-2" href="https://www.google.com/mail" target="_blank"
            ><i class="fa-regular fa-envelope"></i
          ></a>
        </div>
      </div>
      <div class="col-md-auto d-none d-md-grid align-self-center">
        <iframe
          src="${sede.ubicacion}"
          width="400"
          height="200"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  </div>
  `;
  
cargarSedes();

