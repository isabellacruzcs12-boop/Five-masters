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

iniciarAutoplay();

const carrusel = document.getElementById('ligasCarrusel');
  const flecha = document.getElementById('ligasFlecha');

  flecha.addEventListener('click', () => {
    const card = carrusel.querySelector('.liga-card');
    const scrollAmount = card.offsetWidth + 20; // ancho de la card + gap

    // Si ya llegó al final, vuelve al inicio
    if (carrusel.scrollLeft + carrusel.offsetWidth >= carrusel.scrollWidth - 10) {
      carrusel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carrusel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  });