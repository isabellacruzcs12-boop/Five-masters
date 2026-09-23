
document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------
     1) MENÚ HAMBURGUESA 
     ------------------------------------------------------------ */
  const hamburguesa = document.getElementById('btnHamburguesa');
  const menu = document.getElementById('menuNav');
  const btnMenu = document.getElementById('btnMenu');

  if (hamburguesa && menu) {
    hamburguesa.addEventListener('click', () => {
      // classList.toggle: si la clase "activo" no está, la pone; si ya está, la quita
      menu.classList.toggle('activo');
      hamburguesa.classList.toggle('activo');
      if (btnMenu) btnMenu.classList.toggle('activo');
    });
  }

  /* ------------------------------------------------------------
     2) MENÚ DE CONTENIDO 
     ------------------------------------------------------------ */

 
  const buttons = document.querySelectorAll('#navList button');

 
  const sections = document.querySelectorAll('.section');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      buttons.forEach(b => b.parentElement.classList.remove('active'));
      
      btn.parentElement.classList.add('active');

      
      const target = document.getElementById(btn.dataset.target);

      if (target) {
       
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ------------------------------------------------------------
     3) 
     ------------------------------------------------------------ */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { 
          buttons.forEach(b => b.parentElement.classList.remove('active'));
          const active = document.querySelector(`button[data-target="${entry.target.id}"]`);
          if (active) active.parentElement.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  }

});
/* ------------------------------------------------------------
     4) slider
     ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#sliderFreestyle .slide-freestyle");
  let actual = 0;
  const intervalo = 3500;

  if (slides.length === 0) return;

  setInterval(() => {
    slides[actual].classList.remove("activo");
    actual = (actual + 1) % slides.length;
    slides[actual].classList.add("activo");
  }, intervalo);
});
