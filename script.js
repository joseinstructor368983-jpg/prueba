// Fecha del día en la barra superior
const hoy = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
document.getElementById('fecha').textContent = `Tarifa, ${hoy}`;
document.getElementById('year').textContent = new Date().getFullYear();

// Menú de secciones en móvil
const toggle = document.querySelector('.sections__toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Formulario de reserva (sin backend: solo validación y mensaje)
const form = document.getElementById('reserva-form');
const msg = form.querySelector('.form__msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    msg.textContent = 'Por favor, indica tu nombre y un email válido.';
    return;
  }
  const nombre = form.nombre.value.trim().split(' ')[0];
  msg.textContent = `¡Gracias, ${nombre}! Buddha Divers te contactará pronto.`;
  form.reset();
});
