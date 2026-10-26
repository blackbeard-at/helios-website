// Interaktionen und Animationen der HELIOS-Seite, nachgebaut nach dem
// Uncode-Theme des Originals:
// - Einblenden beim Scrollen (data-anim: fade, ltr, rtl, btt, zoom)
// - Wortanimation und Hervorhebungen in Überschriften (data-split)
// - Parallax wie Rellax (data-parallax = Geschwindigkeit, optional
//   data-parallax-center → Ruhelage in der Bildschirmmitte)
// - Header schrumpft beim Scrollen, Scrollspy für Menü und Punkt-Navigation
// - Akkordeon, Mobilmenü, Nach-oben-Button, Karte per Klick, Mail-Links

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

/* ---------- Einblenden ---------- */

function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>('[data-anim], [data-split]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }
  // Uncode startet, sobald ein Element „fast sichtbar“ ist
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  targets.forEach((el) => io.observe(el));
}

/* ---------- Parallax ---------- */

function initParallax() {
  const els = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  if (!els.length || reduceMotion) return;
  const desktop = window.matchMedia('(min-width: 960px)');

  type Item = { el: HTMLElement; speed: number; top: number; height: number; base: number; center: boolean };
  let items: Item[] = [];

  // Fortschritt eines Elements durch den Viewport (Rellax-Formel)
  const progress = (it: Item, y: number) => (y - it.top + innerHeight) / (it.height + innerHeight);

  function measure() {
    const y = scrollY;
    items = els.map((el) => {
      el.style.transform = '';
      const r = el.getBoundingClientRect();
      const it: Item = {
        el,
        speed: Number(el.dataset.parallax) || 1,
        top: r.top + y,
        height: r.height,
        base: 0,
        center: el.hasAttribute('data-parallax-center'),
      };
      it.base = it.center ? 0.5 : progress(it, y);
      return it;
    });
    update();
  }

  function update() {
    if (!desktop.matches) {
      items.forEach((it) => (it.el.style.transform = ''));
      return;
    }
    const y = scrollY;
    for (const it of items) {
      const shift = Math.round(it.speed * 100 * (it.base - progress(it, y)));
      it.el.style.transform = `translate3d(0, ${shift}px, 0)`;
    }
  }

  let ticking = false;
  addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true },
  );
  addEventListener('resize', measure);
  addEventListener('load', measure);
  desktop.addEventListener('change', measure);
  measure();
}

/* ---------- Header, Scrollspy, Nach oben ---------- */

function initScrollState() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-spy]')];
  const sections = [...new Set(links.map((a) => a.hash.slice(1)))]
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => !!el);

  function update() {
    const y = scrollY;
    root.classList.toggle('is-stuck', y > 10);
    root.classList.toggle('show-top', y > innerHeight * 0.5);

    if (!sections.length) return;
    // Aktiv ist der letzte Abschnitt, dessen Oberkante die Bildschirmmitte passiert hat
    const line = y + innerHeight * 0.4;
    let current = sections[0].id;
    for (const s of sections) if (s.offsetTop <= line) current = s.id;
    if (innerHeight + y >= document.documentElement.scrollHeight - 4) current = sections.at(-1)!.id;
    for (const a of links) a.classList.toggle('is-active', a.hash === `#${current}`);
  }

  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();

  document.querySelector('[data-to-top]')?.addEventListener('click', () => {
    scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
}

/* ---------- Mobilmenü ---------- */

function initMobileNav() {
  const button = document.querySelector<HTMLButtonElement>('[data-burger]');
  if (!button) return;
  const set = (open: boolean) => {
    root.classList.toggle('nav-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  };
  button.addEventListener('click', () => set(!root.classList.contains('nav-open')));
  document.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => set(false)));
  addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
  window.matchMedia('(min-width: 960px)').addEventListener('change', () => set(false));
}

/* ---------- Akkordeon (immer nur ein Eintrag offen) ---------- */

function initAccordion() {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-acc]')];
  const duration = reduceMotion ? 0 : 350;

  const panelOf = (b: HTMLButtonElement) => document.getElementById(b.getAttribute('aria-controls')!)!;

  function toggle(button: HTMLButtonElement, open: boolean) {
    const panel = panelOf(button);
    if ((button.getAttribute('aria-expanded') === 'true') === open) return;
    button.setAttribute('aria-expanded', String(open));
    if (!duration) {
      panel.hidden = !open;
      return;
    }
    if (open) {
      panel.hidden = false;
      const h = panel.scrollHeight;
      panel.style.height = '0px';
      requestAnimationFrame(() => (panel.style.height = `${h}px`));
    } else {
      panel.style.height = `${panel.scrollHeight}px`;
      requestAnimationFrame(() => (panel.style.height = '0px'));
    }
    window.setTimeout(() => {
      panel.style.height = '';
      if (!open) panel.hidden = true;
    }, duration);
  }

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      if (open) buttons.forEach((b) => b !== button && toggle(b, false));
      toggle(button, open);
    });
  }

  // Direktlink auf eine Leistung (z. B. /#familienhilfe) öffnet sie
  const fromHash = () => {
    const target = buttons.find((b) => b.closest('.acc')?.id === location.hash.slice(1));
    if (target) target.click();
  };
  addEventListener('hashchange', fromHash);
  fromHash();
}

/* ---------- Mail-Adressen (ROT13 gegen Spam-Bots, wie im Original) ---------- */

function initMailLinks() {
  const rot13 = (s: string) =>
    s.replace(/[a-z]/gi, (c) => {
      const base = c <= 'Z' ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
    });
  document.querySelectorAll<HTMLAnchorElement>('[data-mail]').forEach((a) => {
    a.href = `mailto:${rot13(a.dataset.mail!)}`;
  });
}

/* ---------- Google Maps erst nach Einwilligung ---------- */

function initMap() {
  document.querySelectorAll<HTMLElement>('[data-map]').forEach((map) => {
    map.querySelector('[data-map-load]')?.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = map.dataset.map!;
      iframe.title = 'Standort HELIOS Hilfen GmbH auf Google Maps';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.allowFullscreen = true;
      map.replaceChildren(iframe);
    });
  });
}

export function initSite() {
  initReveal();
  initParallax();
  initScrollState();
  initMobileNav();
  initAccordion();
  initMailLinks();
  initMap();
}
