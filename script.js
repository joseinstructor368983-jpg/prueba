// Menú móvil
const toggle = document.querySelector('.nav__toggle');
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

// Burbujas animadas en el hero
const bubbles = document.querySelector('.hero__bubbles');
for (let i = 0; i < 18; i++) {
  const b = document.createElement('span');
  const size = 6 + Math.random() * 22;
  b.className = 'bubble';
  b.style.width = b.style.height = `${size}px`;
  b.style.left = `${Math.random() * 100}%`;
  b.style.animationDuration = `${8 + Math.random() * 12}s`;
  b.style.animationDelay = `${-Math.random() * 20}s`;
  bubbles.appendChild(b);
}

// Aparición al hacer scroll
const targets = document.querySelectorAll('.card, .offer, .spot, .path li, .stat, details');
targets.forEach((el) => el.classList.add('reveal'));
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.15 }
);
targets.forEach((el) => io.observe(el));

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
  msg.textContent = `¡Gracias, ${nombre}! Te contactaremos pronto para organizar tu inmersión.`;
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
