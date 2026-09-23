



const contador = document.querySelector('.contador');


if (contador){


  const fechaMeta = new Date(contador.dataset.fecha).getTime();

  if (Number.isNaN(fechaMeta)){
    console.warn('El contador no entiende la fecha. Revisa data-fecha en el HTML. Ejemplo: 2026-10-20T20:00:00-05:00');
  }


  const cajas = {
    dias:     contador.querySelector('[data-unidad="dias"]'),
    horas:    contador.querySelector('[data-unidad="horas"]'),
    minutos:  contador.querySelector('[data-unidad="minutos"]'),
    segundos: contador.querySelector('[data-unidad="segundos"]')
  };

  
  const conDosDigitos = function(numero){
    return String(numero).padStart(2, '0');
  };

  let reloj;   
  const actualizar = function(){

    
    let faltan = fechaMeta - Date.now();
    if (Number.isNaN(faltan) || faltan < 0){
      faltan = 0;
    }

    const segundosTotales = Math.floor(faltan / 1000);

    const dias     = Math.floor(segundosTotales / 86400);          
    const horas    = Math.floor((segundosTotales % 86400) / 3600); 
    const minutos  = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;

    cajas.dias.textContent     = conDosDigitos(dias);
    cajas.horas.textContent    = conDosDigitos(horas);
    cajas.minutos.textContent  = conDosDigitos(minutos);
    cajas.segundos.textContent = conDosDigitos(segundos);

   
    if (faltan === 0){
      clearInterval(reloj);
    }
  };

  
  actualizar();
  reloj = setInterval(actualizar, 1000);
}
