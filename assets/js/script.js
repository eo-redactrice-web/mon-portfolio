/* =================================================================
   SCRIPT.JS · Portfolio Emmanuelle Ouine
   ================================================================= */

(function () {
  'use strict';

  /* ===============================================================
     1. ANNÉE DYNAMIQUE
     =============================================================== */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ===============================================================
     2. NAVIGATION MOBILE
     =============================================================== */
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });
  });

  /* ===============================================================
     3. RÉVÉLATION AU SCROLL
     =============================================================== */
  const revealTargets = document.querySelectorAll(
    '.hero-content, .section-head, .card, .case, .article-card, .why-item, .expertise-block, .contact-form, .col-content, .col-label'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  /* ===============================================================
     4. SMOOTH SCROLL avec offset header
     =============================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });

  /* ===============================================================
     5. FORMULAIRE DE CONTACT (mailto fallback)
     =============================================================== */
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#f-name').value.trim();
      const company = form.querySelector('#f-company').value.trim();
      const email = form.querySelector('#f-email').value.trim();
      const type = form.querySelector('#f-type').value;
      const message = form.querySelector('#f-message').value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = '// merci de remplir les champs obligatoires';
        formStatus.style.color = '#f87171';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.textContent = '// adresse email invalide';
        formStatus.style.color = '#f87171';
        return;
      }

      const subject = encodeURIComponent(`[Portfolio] Projet ${type}, de ${name}`);
      const body = encodeURIComponent(
        `Nom : ${name}\n` +
        `Entreprise : ${company || 'non renseignée'}\n` +
        `Email : ${email}\n` +
        `Type de projet : ${type}\n\n` +
        `Message :\n${message}`
      );

      const recipient = 'e.o.redactriceweb@gmail.com';
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

      formStatus.style.color = '';
      formStatus.textContent = '// votre client mail va s\'ouvrir…';
    });
  }

  /* ===============================================================
     6. ÉTAT ACTIF NAVIGATION SELON SECTION VISIBLE
     =============================================================== */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-list a');

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navAnchors.forEach((a) => {
              const isCurrent = a.getAttribute('href') === `#${id}`;
              a.style.color = isCurrent ? 'var(--color-text)' : '';
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => navObserver.observe(s));
  }

})();
