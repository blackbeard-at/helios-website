// Gemeinsame Bewegung der Entwürfe: Teile eines Abschnitts steigen beim
// Eintreten nacheinander auf. Ohne JS oder mit „Bewegung reduzieren“ bleibt
// alles sichtbar (CSS greift nur mit .js).

export function initRise() {
  const els = document.querySelectorAll<HTMLElement>('[data-rise]');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  // Nummer innerhalb des Abschnitts für die Staffelung
  document.querySelectorAll('section, footer').forEach((section) => {
    section.querySelectorAll<HTMLElement>('[data-rise]').forEach((el, i) => {
      if (!el.style.getPropertyValue('--n')) el.style.setProperty('--n', String(i % 6));
    });
  });
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  els.forEach((el) => io.observe(el));
}
