

const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu');

hamburguesa.addEventListener('click', () => {
  menu.classList.toggle('activo');
    hamburguesa.classList.toggle('activo');
});







const slides = document.querySelectorAll('.cta-home-slide');
const dots = document.querySelectorAll('.cta-home-dot');
let indiceActual = 0;
let intervalo;

function mostrarSlide(indice){
  slides.forEach(slide => slide.classList.remove('activo'));
  dots.forEach(dot => dot.classList.remove('activo'));

  slides[indice].classList.add('activo');
  dots[indice].classList.add('activo');
  indiceActual = indice;
}

function siguienteSlide(){
  const nuevoIndice = (indiceActual + 1) % slides.length;
  mostrarSlide(nuevoIndice);
}

function iniciarAutoplay(){
  intervalo = setInterval(siguienteSlide, 5000);
}

dots.forEach((dot, indice) => {
  dot.addEventListener('click', () => {
    mostrarSlide(indice);
    clearInterval(intervalo);
    iniciarAutoplay();
  });
});








 
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


















