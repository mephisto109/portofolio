/* =========================================================
   MAIN.JS
   All interactive logic. No need to edit this file if you
   just want to add content — edit js/data.js instead.
   ========================================================= */

// Peta key icon ke class Bootstrap Icons (dipakai di contact links & footer social)
const ICONS = {
  mail: "bi-envelope-fill",
  github: "bi-github",
  instagram: "bi-instagram",
  linkedin: "bi-linkedin",
  whatsapp: "bi-whatsapp",
  yarn: "bi-scissors",
};

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderContact();
  renderFooterSocial();

  initNavbar();
  initMobileMenu();
  initRevealOnScroll();
  initContactForm();
  initBackToTop();

  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------- RENDER: ALL PROJECTS ---------- */
function renderProjects(){
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(projectCardHTML).join("");
}

function projectCardHTML(p){
  const demoBtn = p.demoUrl
    ? `<a class="demo" href="${p.demoUrl}" target="_blank" rel="noopener">Show Project</a>` : "";
  const codeBtn = p.githubUrl
    ? `<a class="code" href="${p.githubUrl}" target="_blank" rel="noopener">GitHub</a>` : "";
  const thumbContent = p.thumbnailImage
    ? `<img src="${p.thumbnailImage}" alt="${p.title} preview">`
    : `<i class="bi ${p.thumbnailIcon}"></i>`;

  return `
    <article class="project-card reveal">
      <div class="project-thumb">${thumbContent}</div>
      <div class="project-body">
        <span class="project-year">${p.year}</span>
        <h3>${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
        ${(demoBtn || codeBtn) ? `<div class="project-actions">${demoBtn}${codeBtn}</div>` : ""}
      </div>
    </article>`;
}

/* ---------- RENDER: GALLERY / CAROUSEL SLIDES ---------- */
function renderGallery(){
  const track = document.getElementById("carouselTrack");
  const dotsWrap = document.getElementById("carouselDots");

  if (!track || !dotsWrap) return;

  track.innerHTML = GALLERY.map(g => {
    const visual = g.image
      ? `<img src="${g.image}" alt="${g.title}" style="width:100%;height:100%;object-fit:cover;">`
      : `<i class="bi ${g.icon} slide-icon"></i>`;
    return `
      <div class="carousel-slide">
        ${visual}
        <div class="carousel-caption">
          <span class="cat">${g.category}</span>
          <h4>${g.title}</h4>
        </div>
      </div>`;
  }).join("");

  dotsWrap.innerHTML = GALLERY.map((_, i) =>
    `<button data-index="${i}" aria-label="Slide ${i + 1}"></button>`).join("");
}

/* ---------- RENDER: CONTACT LINKS ---------- */
function renderContact(){
  const list = document.getElementById("contactLinks");
  list.innerHTML = CONTACT_LINKS.map(c => `
    <li>
      <a href="${c.href}" target="_blank" rel="noopener">
        <span class="ic"><i class="bi ${ICONS[c.icon] || "bi-link-45deg"}"></i></span>
        <span>
          <span class="label">${c.label}</span>
          <span class="value">${c.value}</span>
        </span>
      </a>
    </li>`).join("");
}

/* ---------- RENDER: FOOTER SOCIAL ---------- */
function renderFooterSocial(){
  const wrap = document.getElementById("footerSocial");
  const socials = CONTACT_LINKS.filter(c => ["github","instagram","linkedin"].includes(c.icon));
  wrap.innerHTML = socials.map(c => `
    <a href="${c.href}" target="_blank" rel="noopener" aria-label="${c.label}"><i class="bi ${ICONS[c.icon] || "bi-link-45deg"}"></i></a>`).join("");
}

/* ---------- NAVBAR: scroll style + active link ---------- */
function initNavbar(){
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-link");
  const sections = [...links].map(l => document.getElementById(l.dataset.section));

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);

    let current = sections[0];
    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => { if (sec && sec.offsetTop <= scrollPos) current = sec; });

    links.forEach(l => l.classList.toggle("active", current && l.dataset.section === current.id));
  }, { passive: true });
}

/* ---------- MOBILE MENU ---------- */
function initMobileMenu(){
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });

  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  }));
}

/* ---------- REVEAL ON SCROLL ---------- */
function initRevealOnScroll(){
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));
}

/* ---------- CAROUSEL ---------- 
function initCarousel(){
  const track = document.getElementById("carouselTrack");
  if (!track) return;

  const dots = () => [...document.querySelectorAll("#carouselDots button")];
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const total = GALLERY.length;
  let index = 0;
  let timer;

  function go(i){
    index = (i + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots().forEach((d, di) => d.classList.toggle("active", di === index));
  }

  function autoplay(){
    timer = setInterval(() => go(index + 1), 4500);
  }
  function resetAutoplay(){ clearInterval(timer); autoplay(); }

  prevBtn.addEventListener("click", () => { go(index - 1); resetAutoplay(); });
  nextBtn.addEventListener("click", () => { go(index + 1); resetAutoplay(); });

  document.getElementById("carouselDots").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    go(Number(btn.dataset.index));
    resetAutoplay();
  });

  // swipe support
  let startX = 0;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive:true });
  track.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 40){
      diff > 0 ? go(index - 1) : go(index + 1);
      resetAutoplay();
    }
  }, { passive:true });

  go(0);
  autoplay();
}*/



/* ---------- BACK TO TOP ---------- */
function initBackToTop(){
  document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
