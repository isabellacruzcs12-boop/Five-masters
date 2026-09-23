
document.addEventListener('DOMContentLoaded', () => {

  // Menú hamburguesa
  const btnHamburguesa = document.getElementById('btnHamburguesa');
  const menuNav = document.getElementById('menuNav');
  const btnMenu = document.getElementById('btnMenu');

  btnHamburguesa.addEventListener('click', () => {
    btnHamburguesa.classList.toggle('activo');
    menuNav.classList.toggle('activo');
    btnMenu.classList.toggle('activo');
  });

  // Tabs móvil: Muro de la calle / Debates top
  const tabs = document.querySelectorAll('.tab-comunidad');
  const paneles = document.querySelectorAll('.panel-comunidad');
  const indicador = document.getElementById('indicadorTab');

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('activo'));
      paneles.forEach(p => p.classList.remove('activo'));

      tab.classList.add('activo');
      document
        .querySelector(`.panel-comunidad[data-panel="${tab.dataset.panel}"]`)
        .classList.add('activo');

      indicador.classList.toggle('derecha', i === 1);
    });
  });

  // "Ver perfil": feedback visible al tocar, incluso en celular
  document.querySelectorAll('.btn-ver-perfil').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('tocado');
      setTimeout(() => btn.classList.remove('tocado'), 400);
    });
  });

  
});
