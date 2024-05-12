// Desplegado de ShopCar
const btnShop = document.querySelector('.icon_shop');
const shopDes = document.querySelector('.cont-carShop');
const modalCard = document.querySelector('.modal-card');

btnShop.addEventListener('click', desBtnShop);

function desBtnShop() { // Boton desplegado
  if( btnShop.classList.contains('desplegado') ) {
    shopDes.classList.remove('act-carShop');
    btnShop.classList.remove('desplegado');
    modalCard.classList.remove('act-modal-card');
  } else {
    btnShop.classList.add('desplegado');
    shopDes.classList.add('act-carShop');
  }
}

const shopCar = document.querySelector('#shop-car');
const contenedorCard = document.querySelector('.cont-art');
const vaciarCarBtn = document.querySelector('.vaciar-car');
const listCard = document.querySelector('#list-card');
let artCar = [];


loadEvent();
function loadEvent() {
  listCard.addEventListener('click', addCity);
  
  //ELiminar curso uno a uno
  contenedorCard.addEventListener('click', eliminarCard);
  
  // Vaciador de carrito
  vaciarCarBtn.addEventListener('click', () => {
    modalCard.classList.add('act-modal-card');
    modalCard.children[1].children[0].addEventListener('click',() => {
      artCar = [];
      limpiarHtml();
      modalCard.classList.remove('act-modal-card');
    })
    modalCard.children[1].children[1].addEventListener('click', () => {
      modalCard.classList.remove('act-modal-card');
    })
    
  })
}

// Funciones
function addCity(e) {
  e.preventDefault();
  
  if( e.target.classList.contains('add-car')) {
    const citySelected = e.target.parentElement;
    //console.log(e.target.parentElement)
    readData(e.target.parentElement);
  }
}

function eliminarCard(e) {
  if(e.target.classList.contains('icon_clear')) {
    const cardId = e.target.parentElement.children[1].firstElementChild.textContent;
    artCar = artCar.filter( curso => curso.title !== cardId);
    carHtml();
  }
}

// Read content of card 
function readData(city) {
  //console.log(city)
  
  // Make object with content of card
  const infoCard = {
    img: city.querySelector('img').src,
    title: city.querySelector('h3').textContent.substring(0, 10),
    autor: city.querySelector('h5').textContent,
    price: city.querySelector('p').textContent,
    cantidad: 1
  }
  
  // Revisar elemento y si existe
  const existe = artCar.some( curso => curso.title === infoCard.title );
  if(existe) {
    return false;  
  } else {
    // Agregando elementos a carrito
    artCar = [...artCar, infoCard];
  }
  carHtml();
}

// muestra el carrito en html
function carHtml() {
  limpiarHtml();
  
  artCar.forEach( curso => {
    const card_Shop = document.createElement('div');
    card_Shop.innerHTML = `
      <div class="shop-card">
        <img src="${curso.img}">
        <span class="na-pri-pro">
            <h5>${curso.title}</h5>
            <p class="pro_name">${curso.autor}</p>
          </span>
          <p class="pro_price">${curso.price}</p>
          <span class="icon_clear material-icons-outlined">clear</span>
      </div>
    `;
    
    // agregar en el contenedro del carrito
    contenedorCard.appendChild(card_Shop)
  } )
}
// Limpiador de no repeticion
function limpiarHtml() {
  while(contenedorCard.firstChild) {
    contenedorCard.removeChild(contenedorCard.firstChild)
  }
}

