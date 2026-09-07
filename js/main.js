/* Core content remains usable without JavaScript. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('#nav-toggle');
  const navigation = document.querySelector('#nav-links');
  if (toggle && navigation) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      navigation.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    const mobile = window.matchMedia('(max-width: 540px)');
    mobile.addEventListener('change', () => {
      const focusedLink = navigation.contains(document.activeElement);
      setOpen(false);
      if (mobile.matches && focusedLink) toggle.focus();
    });
  }
})();
