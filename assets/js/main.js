(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-open', !open); toggle.textContent = open ? 'Menu' : 'Close';
  });
  const headshot = document.querySelector('[data-headshot]');
  if (headshot) {
    const image = headshot.querySelector('img');
    image.addEventListener('load', () => { headshot.hidden = false; }); image.addEventListener('error', () => { headshot.hidden = true; });
    if (image.complete && image.naturalWidth > 0) headshot.hidden = false;
  }
  const checks = [...document.querySelectorAll('[data-file]')].map(async (link) => {
    try { const response = await fetch(link.href, { method: 'HEAD', cache: 'no-store' }); if (!response.ok) return false; link.hidden = false; link.setAttribute('target', '_blank'); link.setAttribute('rel', 'noopener'); return true; }
    catch (_) { return false; }
  });
  Promise.all(checks).then(() => document.querySelectorAll('.paper-links, .button-row').forEach((group) => {
    const fallback = group.querySelector('[data-file-fallback]'); const available = group.querySelector('[data-file]:not([hidden])'); if (fallback && available) fallback.hidden = true;
  }));
})();
