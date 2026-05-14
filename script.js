const navbar = document.querySelector(".navbar");
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
  navbar?.classList.toggle("scrolled", window.scrollY > 50);

  if (heroBg && window.innerWidth > 768) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.12}px) scale(1.04)`;
  }
});

const revealElements = document.querySelectorAll(
  ".trust-card, .service-card, .feature, .price-card, .gallery-grid img, .areas, .hours-box, .contact-box"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

revealElements.forEach((el) => {
  el.classList.add("hidden");
  revealObserver.observe(el);
});

function setActiveCard(containerSelector, itemSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const items = container.querySelectorAll(itemSelector);
  if (!items.length) return;

  function updateActive() {
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closest = null;
    let closestDistance = Infinity;

    items.forEach((item) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closest = item;
      }
    });

    items.forEach((item) => item.classList.remove("is-active"));
    closest?.classList.add("is-active");
  }

  updateActive();

  container.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateActive);
  });

  window.addEventListener("resize", updateActive);
}

setActiveCard(".service-grid", ".service-card");
setActiveCard(".pricing-grid", ".price-card");
setActiveCard(".gallery-grid", "img");