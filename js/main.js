// Heart Haven - shared script (Stage 2: static pages)
// Only the mobile menu toggle is needed at this stage.
// Stage 3+ will add: loading needs from JSON, filters, forms and the admin login.
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  var icon = toggle.querySelector('.material-symbols-outlined');

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (icon) icon.textContent = open ? 'close' : 'menu';
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });

  // Close with the Escape key, or after choosing a link
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
})();
