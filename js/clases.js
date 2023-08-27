// Declaracion de variables
const bsas = document.querySelector('#buenosaires');
const stafe = document.querySelector('#santafe');
const mza = document.querySelector('#mendoza');
const sluis = document.querySelector('#sanluis');
const tBody = document.querySelector('tbody');
// Declaracion de funciones
const onClickHandler = (e) => {
  const activa = document.querySelector('.activada');
  activa && activa.setAttribute('class', 'd-none');
  const sedeId = e.target.id;;
  const tabla = document.querySelector(`#t${sedeId}`);
  tabla.setAttribute('class', 'pt-5 text-center activada');
}

bsas.addEventListener('click',onClickHandler);
mza.addEventListener('click',onClickHandler);
stafe.addEventListener('click',onClickHandler);
sluis.addEventListener('click',onClickHandler);
