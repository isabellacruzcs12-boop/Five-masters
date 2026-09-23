
(function(){
  const track = document.getElementById('trackBeneficios');
  if(!track) return;

  const ROMPE_MOVIL = 900;   
  const VELOCIDAD = 0.5;  

  let posicion = 0;
  let anchoMitad = 0;
  let activo = false;
  let clonado = false;
  let pausado = false;

  function clonarTarjetas(){
    if(clonado) return;
    Array.from(track.children).forEach(tarjeta=>{
      const copia = tarjeta.cloneNode(true);
      copia.setAttribute('aria-hidden','true'); 
      track.appendChild(copia);
    });
    clonado = true;
  }

  function quitarClones(){
    if(!clonado) return;
    const hijos = Array.from(track.children);
    hijos.slice(hijos.length / 2).forEach(el => el.remove());
    clonado = false;
    posicion = 0;
    track.style.transform = 'translateX(0)';
  }

  function medir(){
    
    anchoMitad = track.scrollWidth / 2;
  }

  function paso(){
    if(!activo) return;   
    if(!pausado){
      posicion -= VELOCIDAD;
      if(Math.abs(posicion) >= anchoMitad){
        posicion = 0;   
      }
      track.style.transform = `translateX(${posicion}px)`;
    }
    requestAnimationFrame(paso);
  }

  function activar(){
    clonarTarjetas();
    medir();
    if(!activo){
      activo = true;
      requestAnimationFrame(paso);
    }
  }

  function desactivar(){
    activo = false;
    quitarClones();
  }

  function revisarAncho(){
    if(window.innerWidth <= ROMPE_MOVIL){
      activar();
    } else {
      desactivar();
    }
  }

  revisarAncho();
  window.addEventListener('resize', revisarAncho);

  
  track.addEventListener('touchstart', () => pausado = true, {passive:true});
  track.addEventListener('touchend',   () => pausado = false, {passive:true});
})();