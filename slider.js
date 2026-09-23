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