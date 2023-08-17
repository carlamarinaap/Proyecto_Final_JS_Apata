// Declaración de variables
const sedes = [
    {
        nombre: 'Buenos Aires',
        direccion:'Av. Juan B. Justo 10010, CABA',
        telefono:'(11)2222-3333',
        correo: 'sedebuenosaires@fightergym.com.ar',
        ubicacion:'"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d41787.82866355996!2d-58.45136482239822!3d-34.59779490937904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1682633044043!5m2!1ses-419!2sar"',
    },
    {
        nombre: 'Santa Fe',
        direccion:'Dirección: Ayacucho 1011, Guadalupe Oeste',
        telefono:'(342) 4444-5555',
        correo: 'sedesantafe@fightergym.com.ar',
        ubicacion:'"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15107.428458350174!2d-60.69185634424333!3d-31.598982991073754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1682633912263!5m2!1ses-419!2sar"',
    },
    {
        nombre: 'Mendoza',
        direccion:'Luzuriaga 1001, Godoy Cruz',
        telefono:'(261) 1231-3453',
        correo: 'sedemendoza@fightergym.com.ar',
        ubicacion:'"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11613.90192892263!2d-68.85445499257519!3d-32.92692552426826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1682634147769!5m2!1ses-419!2sar"',
    },
    {
        nombre: 'San Luis',
        direccion:'Sarmiento 11111, San Luis',
        telefono:'(266) 1244-6767',
        correo: 'sedesanluis@fightergym.com.ar',
        ubicacion:'"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13322.755522619593!2d-66.33783128637123!3d-33.30176147448045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1682634335318!5m2!1ses-419!2sar"',
    }
  ]
  
  // Declaración de funciones 
  function cargarSedes(sedes) {
    const contenedor = document.getElementById('sedesContainer');
  
    sedes.forEach((sede) => {
      
    contenedor.innerHTML += `
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
            src=${sede.ubicacion}
            width="400"
            height="200"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
    `
    })
   }
  
  cargarSedes(sedes);

