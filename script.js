const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-link');
const closeBtn  = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('show');
  navLinks.setAttribute('aria-hidden', String(!isOpen));
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
  navLinks.setAttribute('aria-hidden', 'true');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('show');
    navLinks.setAttribute('aria-hidden', 'true');
  });
});


document.querySelectorAll('.skill-card').forEach(card => {
  const toggle = () => {
    const flipped = card.classList.toggle('flipped');
    card.setAttribute('aria-expanded', String(flipped));
  };
  card.addEventListener('click', toggle);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });
});

document.querySelectorAll('a[href]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });