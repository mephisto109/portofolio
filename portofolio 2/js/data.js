/* =========================================================
   DATA.JS
   All frequently-changing content lives here.
   Want to add a new project / artwork / Freaknit product?
   Just add one new object to the matching array below.
   No need to touch index.html or main.js at all.
   ========================================================= */

// ---------- CONTACT ----------
const CONTACT_LINKS = [
  { label: "Email", value: "rahmakhoyrulhawa@email.com", href: "mailto:rahmakhoyrulhawa@email.com", icon: "mail" },
  { label: "GitHub", value: "github.com/mephisto109", href: "https://github.com/mephisto109", icon: "github" },
  { label: "Instagram", value: "@weird.fishes707", href: "https://www.instagram.com/weird.fishes707?igsh=OHNkNHpsb29haDdy", icon: "instagram" },
  { label: "Freaknit", value: "@_freaknit", href: "https://www.instagram.com/_freaknit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: "yarn" },
  // Remove the lines below if you don't use them
  //{ label: "LinkedIn",  value: "linkedin.com/in/rahmakh",   href: "https://linkedin.com/",                icon: "linkedin" },
  //{ label: "WhatsApp",  value: "+62 812-0000-0000",         href: "https://wa.me/6281200000000",          icon: "whatsapp" },
];

// ---------- SKILLS ----------
// icon berisi nama class dari Bootstrap Icons (https://icons.getbootstrap.com/)
const SKILLS = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "PHP" },
  { name: "MySQL" },
  { name: "Tailwind CSS" },
  { name: "Figma" },
  { name: "UI Design" },
  { name: "Git" },
];

// ---------- PROJECTS ----------
// Leave demoUrl / githubUrl as "" when there isn't a link yet — the button hides itself automatically.
const PROJECTS = [
  {
    title: "CRUD PHP",
    description: "This is a native PHP CRUD web app, managing inventory, student records, and realtime employee data, all secured by a role-based login system with reCAPTCHA and an integrated email-sending feature using PHPMailer.",
    stack: ["HTML", "CSS", "bootstrap", "PHP"],
    year: "2026",
    // thumbnailIcon: "bi-bag-heart",
    thumbnailImage: "images/ss-index-crud.png",
    demoUrl: "https://rahmakhoyrul-crud-php.sao.dom.my.id/",
    githubUrl: "https://github.com/mephisto109/full-crud-php.git",
  },
  {
    title: "Mapsbin",
    description: "MapsBin is an educational website developed for the Sanlat Ecology Project. It provides information about waste management, interactive quizzes, and a map showing the locations of trash bins around SMKN 2 Cimahi to encourage environmental awareness and proper waste disposal.",
    stack: ["php", "CSS", "Javascript"],
    year: "2026",
    // thumbnailIcon: "bi-calendar-check",
    thumbnailImage: "images/mapsbin.png",
    demoUrl: "https://mapsbin-smkn2cimahi.sao.dom.my.id/",
    githubUrl: "https://github.com/mephisto109/maps-bin---kuis-dan-lokasi-tempat-sampah-smkn-2-cimahi.git",
  },
  {
    title: "Famiresu-iko!",
    description: "Famiresu-Iko is a web-based restaurant management application developed as my final project. It streamlines restaurant operations by providing features for order management, transactions, menu organization, and customer service through an efficient and user-friendly interface. (This application is designed for local network use only, so it is not hosted online.)",
    stack: ["PHP", "CSS", "Javascript", "Bootstrap"],
    year: "2026",
    // thumbnailIcon: "bi-magic",
    thumbnailImage: "images/famiresu.jpg",
    demoUrl: "",
    githubUrl: "https://github.com/mephisto109/apk-kasir-restauran-berbasis-web---Tugas-akhir---Rahma.git",
  },
  // {
  //   title: "Recipe Finder",
  //   description: "A simple recipe search website that pulls data from a public API.",
  //   stack: ["JavaScript", "PHP", "MySQL"],
  //   year: "2025",
  //   thumbnailIcon: "bi-egg-fried",
  //   demoUrl: "",
  //   githubUrl: "",
  // },
];

// ---------- GALLERY (carousel) ----------
// category is only used as a small caption label
const GALLERY = [
  { title: "flower bouquet", category: "Crochet", icon: "bi-flower1", image: "images/buket.jpeg" },
  { title: "Granny Square Bag", category: "Crochet — Freaknit", icon: "bi-bag-fill" },
  { title: "Character Sketch", category: "Artwork", icon: "bi-pencil-fill" },
  { title: "Amigurumi Bear", category: "Crochet — Freaknit", icon: "bi-heart-fill" },
  { title: "Line Art Study", category: "Illustration", icon: "bi-vector-pen" },
  { title: "Scarf Collection", category: "Crochet — Freaknit", icon: "bi-layers-fill" },
];

/* Note on swapping in real images:
  Any item above can get an "image": "images/file-name.jpg" property.
  If "image" is present, main.js will automatically use it instead of the placeholder. */
