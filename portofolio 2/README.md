# Personal Portfolio — Rahma Khoyrul Hawa

A one-page portfolio site: minimal, modern, purple–white–dark theme, with a "thread"
signature element that ties the developer + crochet (Freaknit) identity together.

## Folder structure

```
portfolio/
├─ index.html          -> page structure (don't touch this just to add content)
├─ css/
│  └─ style.css          -> all styling & responsive rules
├─ js/
│  ├─ data.js             -> content that changes often (edit here)
│  └─ main.js             -> interactive logic (navbar, carousel, form, animations)
├─ images/                -> put your real photos/images here
└─ assets/                -> other supporting files (favicon, etc.)
```

## Adding content (without touching the site structure)

Open `js/data.js`, then:

- **Add a website project** → add a new object to the `PROJECTS` array.
  Leave `demoUrl` or `githubUrl` as an empty string `""` if the link isn't ready yet —
  that button hides itself automatically.
- **Add an artwork / craft product** → add a new object to the `GALLERY` array.
- **Update contact info** → edit the `CONTACT_LINKS` array.
- **Update the skills list** → edit the `SKILLS` array.

## Replacing placeholders with real photos

Right now the profile photo and gallery use placeholders (initials & emoji) since there
are no real image files yet. To replace them:

1. Put your image file inside the `images/` folder (e.g. `images/profile-photo.jpg`).
2. For the profile photo: in `index.html`, replace `<div class="avatar-placeholder">...</div>`
   with `<img src="images/profile-photo.jpg" alt="Rahma's photo">` (keep the same class so
   the shape and sizing stay consistent).
3. For the gallery: in `js/data.js`, add an `image` property to the matching item, e.g.:
   ```js
   { title: "Granny Square Bag", category: "Crochet — Freaknit", icon: "🧺", image: "images/granny-square-bag.jpg" }
   ```
   Whenever an `image` property is present, `main.js` automatically shows that image instead
   of the placeholder.

## Connecting the contact form to a real inbox

The form currently does basic client-side validation (name, email, message length) and
shows a success message without sending the data anywhere. To make it actually send an
email, connect it to a service like Formspree, EmailJS, or a simple PHP backend — the
integration point is already marked with a comment inside `initContactForm()` in `js/main.js`.

## Running it locally

Just open `index.html` directly in a browser. For the best experience (especially the
Google Fonts), make sure you have an internet connection when opening the page.
