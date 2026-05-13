const navbar = document.querySelector(".navbar");
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

  // Navbar blur on scroll
  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

  // Hero parallax
  if(heroBg){

    heroBg.style.transform =
      `translateY(${window.scrollY * 0.18}px) scale(1.04)`;

  }

});



// Reveal animations

const revealElements = document.querySelectorAll(`
  .why-card,
  .card,
  .feature,
  .price-card,
  .gallery-card,
  .hours-card,
  .hours-note,
  .area-box,
  .contact-box,
  .trust-card
`);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry, index) => {

    if(entry.isIntersecting){

      setTimeout(() => {

        entry.target.classList.add("show");

      }, index * 80);

    }

  });

},{
  threshold:0.14
});

revealElements.forEach((el) => {

  el.classList.add("hidden");

  observer.observe(el);

});



// Smooth hover glow effect

const cards = document.querySelectorAll(`
  .card,
  .price-card,
  .why-card,
  .gallery-card
`);

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,0.08),
        rgba(255,255,255,0.02) 40%
      ),
      linear-gradient(180deg,#242321,#1c1b19)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.background =
      "linear-gradient(180deg,#242321,#1c1b19)";

  });

});



// Floating button hide/show

const floatingCall = document.querySelector(".floating-call");

let lastScroll = 0;

window.addEventListener("scroll", () => {

  let currentScroll = window.scrollY;

  if(currentScroll > lastScroll && currentScroll > 200){

    floatingCall.style.transform =
      "translateY(120px)";

  } else {

    floatingCall.style.transform =
      "translateY(0px)";

  }

  lastScroll = currentScroll;

});



// Simple loading animation

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});