
const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu');

hamburguesa.addEventListener('click', () => {
  menu.classList.toggle('activo');
    hamburguesa.classList.toggle('activo');
});



const contenedor = document.querySelector('.CJ_PRINCIPAL');
const mitades = document.querySelectorAll('.INISESI, .CRECUEN');


function activar(mitadElegida){
  mitades.forEach(function(mitad){
    const encendida = (mitad === mitadElegida);

   
    mitad.classList.toggle('activo', encendida);

    
    const boton = mitad.querySelector('h2 button');
    if (boton){
      boton.setAttribute('aria-pressed', String(encendida));
    }
  });

  
  contenedor.dataset.vista = mitadElegida.id;
}


mitades.forEach(function(mitad){


  mitad.addEventListener('pointerdown', function(){
    activar(mitad);
  });

  mitad.addEventListener('focusin', function(){
    activar(mitad);
  });

});


const esCelular = window.matchMedia('(max-width: 900px)');

const inicial = esCelular.matches
  ? document.querySelector('.INISESI')
  : (document.querySelector('.CRECUEN.activo') || mitades[0]);

activar(inicial);

