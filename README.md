# Sattar Ahmed — Medical Billing & Revenue Cycle Portfolio

A professional portfolio website for Sattar Ahmed, Medical Billing & Revenue Cycle Specialist.

**Live Demo:** [Enable GitHub Pages to deploy — see instructions below](#setup--deployment)

---

## Features

- Responsive design (mobile, tablet, desktop)
- Animated skill bars & scroll reveal effects
- Live CPT / ICD-10 / Billing Topic search tool (30+ entries)
- FAQ accordion
- Contact form → opens Gmail compose (works on all devices)
- No frameworks, no build tools — pure HTML, CSS, JavaScript

---

## Project Structure

```
sattar-portfolio/
├── index.html                   ← Main HTML (all sections)
├── css/
│   └── style.css                ← All styles & design tokens
├── js/
│   └── script.js                ← All interactivity & search data
├── assets/
│   ├── images/
│   │   └── profile.jpg          ← Add your profile photo here
│   └── cv/
│       └── sattar-ahmed-cv.pdf  ← Add your CV/resume here
└── README.md
```

---

## Setup & Deployment

### Option 1 — GitHub Pages (Free Hosting)

1. Create a new GitHub repository named `sattar-portfolio` (or any name)
2. Upload all files keeping the folder structure intact
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch → `/ (root)` → click **Save**
5. Your site will be live at `https://your-username.github.io/sattar-portfolio/`

### Option 2 — Netlify (Drag & Drop)

1. Go to [netlify.com](https://www.netlify.com) and sign up (free)
2. Drag the entire `sattar-portfolio/` folder onto the Netlify deploy area
3. Your site is live instantly with a generated URL

### Option 3 — Run Locally

No server needed — just open `index.html` directly in any browser.

---

## Customization

### Add Your Profile Photo

Replace `assets/images/profile.jpg` with your photo. Then update `index.html` — find the profile card section and replace:

```html
<div class="profile-img-placeholder">SA</div>
```

with:

```html
<img src="assets/images/profile.jpg" alt="Portrait of Sattar Ahmed" class="profile-img"/>
```

### Add Your CV

Place your CV PDF at `assets/cv/sattar-ahmed-cv.pdf`. The Download CV button in the hero will work automatically.

### Update Contact Info

All contact details are in `index.html` inside the `#contact` section.

### Colors & Fonts

All design tokens (colors, fonts, spacing) are CSS variables at the top of `css/style.css`:

```css
:root {
  --jade:        #0B3D2E;
  --champagne:   #E8C97A;
  --emerald:     #2ECC71;
  /* ... */
}
```

### Add EmailJS (Optional — Silent Background Sending)

To send emails directly without opening Gmail:

1. Sign up at [emailjs.com](https://www.emailjs.com) (free tier available)
2. Add your Gmail service and create an email template
3. In `js/script.js`, replace the `window.open(gmailUrl...)` block with:

```js
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  from_name: name,
  from_email: email,
  subject: subject,
  message: message,
  to_email: 'sattarahmedofficial1@gmail.com'
});
```

4. Load the EmailJS SDK in `index.html` before `script.js`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

---

## Contact

**Sattar Ahmed**
- Email: [sattarahmedofficial1@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=sattarahmedofficial1@gmail.com)
- Phone: 0321-5063-059
- LinkedIn: [linkedin.com/in/sattar-ahmed-88286438a](https://www.linkedin.com/in/sattar-ahmed-88286438a)
- Location: Pakistan · Remote Available Worldwide

---

&copy; 2025 Sattar Ahmed. All rights reserved.
