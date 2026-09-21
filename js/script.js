'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () {
  if (modal) modal.classList.add('closed');
};

// modal eventListener
if (modalCloseOverlay) modalCloseOverlay.addEventListener('click', modalCloseFunc);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', modalCloseFunc);




// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
if (toastCloseBtn) {
  toastCloseBtn.addEventListener('click', function () {
    if (notificationToast) notificationToast.classList.add('closed');
  });
}




// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    if (mobileMenu[i]) mobileMenu[i].classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  };

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    if (mobileMenu[i]) mobileMenu[i].classList.add('active');
    if (overlay) overlay.classList.add('active');
  });

  if (mobileMenuCloseBtn[i]) mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);

}

// overlay click closes all mobile menus (single listener, no leak)
if (overlay) {
  overlay.addEventListener('click', function () {
    for (let i = 0; i < mobileMenu.length; i++) {
      if (mobileMenu[i]) mobileMenu[i].classList.remove('active');
    }
    overlay.classList.remove('active');
  });
}




// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedAccordion = this.nextElementSibling;
    const clickedBtnActive = clickedAccordion && clickedAccordion.classList.contains('active');

    // Only close sibling accordions within the same parent container
    if (!clickedBtnActive) {
      const parent = this.closest('.mobile-menu-category-list, .menu-category-list, .sidebar-menu-category-list');
      if (parent) {
        const siblingAccordions = parent.querySelectorAll('[data-accordion].active');
        const siblingBtns = parent.querySelectorAll('[data-accordion-btn].active');
        siblingAccordions.forEach(function (el) { el.classList.remove('active'); });
        siblingBtns.forEach(function (el) { el.classList.remove('active'); });
      }
    }

    if (clickedAccordion) {
      clickedAccordion.classList.toggle('active');
    }
    this.classList.toggle('active');

  });

}


// newsletter form submission handler
const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (modal) modal.classList.add('closed');
  });
}




// ============================================
// SMOOTH SCROLL & FADE-IN ANIMATIONS
// ============================================

// Intersection Observer for fade-in animations
var fadeElements = document.querySelectorAll(
  '.product-grid .showcase, .blog-card, .service-item, .testimonial-card, ' +
  '.product-minimal .showcase, .product-featured .showcase-container, ' +
  '.category-item, .cta-container'
);

if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  fadeElements.forEach(function (el) {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
  });
}
