/* =========================================================
   DATA.JS
   All frequently-changing content lives here.
   Want to add a new project / artwork / Freaknit product?
   Just add one new object to the matching array below.
   No need to touch index.html or main.js at all.
   ========================================================= */

// ---------- CONTACT ----------
const CONTACT_LINKS = [
  { label: "Email",     value: "rahmakhoyrulhawa@email.com",   href: "mailto:rahmakhoyrulhawa@email.com",       icon: "mail" },
  { label: "GitHub",    value: "github.com/mephisto109",        href: "https://github.com/mephisto109",                  icon: "github" },
  { label: "Instagram", value: "@weird.fishes707",              href: "https://www.instagram.com/weird.fishes707?igsh=OHNkNHpsb29haDdy",               icon: "instagram" },
  { label: "Freaknit",  value: "@_freaknit",              href: "https://www.instagram.com/_freaknit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",               icon: "yarn" },
  // Remove the lines below if you don't use them
  //{ label: "LinkedIn",  value: "linkedin.com/in/rahmakh",   href: "https://linkedin.com/",                icon: "linkedin" },
  //{ label: "WhatsApp",  value: "+62 812-0000-0000",         href: "https://wa.me/6281200000000",          icon: "whatsapp" },
];

// ---------- SKILLS ----------
// icon accepts a plain emoji so no extra image files are needed
const SKILLS = [
  { name: "HTML",         icon: "🧱" },
  { name: "CSS",          icon: "🎨" },
  { name: "JavaScript",   icon: "⚡" },
  { name: "PHP",          icon: "🐘" },
  { name: "MySQL",        icon: "🗄️" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Figma",        icon: "🖊️" },
  { name: "UI Design",    icon: "✨" },
  { name: "Git",          icon: "🌿" },
];

// ---------- PROJECTS ----------
// Leave demoUrl / githubUrl as "" when there isn't a link yet — the button hides itself automatically.
const PROJECTS = [
  {
    title: "Freaknit Store",
    description: "A simple e-commerce landing page for the Freaknit crochet brand, complete with a product catalog and order form.",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    thumbnailIcon: "🧶",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Study Planner",
    description: "A web app for tracking daily study schedules and tasks, with a clean, minimal calendar view.",
    stack: ["JavaScript", "Tailwind CSS"],
    year: "2025",
    thumbnailIcon: "🗓️",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Portfolio v1",
    description: "The first version of my personal portfolio site, built to learn the fundamentals of responsive layout.",
    stack: ["HTML", "CSS"],
    year: "2025",
    thumbnailIcon: "🪄",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Recipe Finder",
    description: "A simple recipe search website that pulls data from a public API.",
    stack: ["JavaScript", "PHP", "MySQL"],
    year: "2025",
    thumbnailIcon: "🍜",
    demoUrl: "",
    githubUrl: "",
  },
];

// ---------- GALLERY (carousel) ----------
// category is only used as a small caption label
const GALLERY = [
  { title: "flower bouquet",       category: "Crochet", icon: "💐", image: "images/buket.jpeg" },
  { title: "Granny Square Bag",   category: "Crochet — Freaknit", icon: "🧺" },
  { title: "Character Sketch",    category: "Artwork", icon: "🖍️" },
  { title: "Amigurumi Bear",      category: "Crochet — Freaknit", icon: "🧸" },
  { title: "Line Art Study",      category: "Illustration", icon: "✏️" },
  { title: "Scarf Collection",    category: "Crochet — Freaknit", icon: "🧣" },
];

/* Note on swapping in real images:
   Any item above can get an "image": "images/file-name.jpg" property.
   If "image" is present, main.js will automatically use it instead of the placeholder. */
