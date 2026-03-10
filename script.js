/* ═══════════════════════════════════════════════
   Sattar Ahmed — Portfolio JavaScript
   ═══════════════════════════════════════════════ */

/* ──────────────────────────────────────
   1. UTILITIES
   ────────────────────────────────────── */

/** Set footer year */
document.getElementById('yr').textContent = new Date().getFullYear();

/** Show toast notification */
function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast ' + type + ' show';
  setTimeout(() => { t.className = 'toast'; }, 4500);
}

/* ──────────────────────────────────────
   2. NAVIGATION — Hamburger & Mobile Menu
   ────────────────────────────────────── */
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileNav');

function openMobileNav() {
  mob.classList.add('open');
  mob.setAttribute('aria-hidden', 'false');
  ham.classList.add('open');
  ham.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
  mob.classList.remove('open');
  mob.setAttribute('aria-hidden', 'true');
  ham.classList.remove('open');
  ham.setAttribute('aria-expanded', 'false');
}

ham.addEventListener('click', () => {
  mob.classList.contains('open') ? closeMobileNav() : openMobileNav();
});

// Close on mobile link tap
mob.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!ham.contains(e.target) && !mob.contains(e.target)) {
    closeMobileNav();
  }
});

/* ──────────────────────────────────────
   3. SCROLL REVEAL
   ────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('on'), i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

/* ──────────────────────────────────────
   4. SKILL BAR ANIMATIONS
   ────────────────────────────────────── */
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.w + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-bar-fill').forEach(bar => barObserver.observe(bar));

/* ──────────────────────────────────────
   5. COUNTER ANIMATIONS (Hero Stats)
   ────────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ──────────────────────────────────────
   6. FAQ ACCORDION
   ────────────────────────────────────── */
document.querySelectorAll('.faq-q').forEach(q => {
  function toggleFaq() {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');

    // Close all open items
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      openItem.querySelector('.faq-a').setAttribute('aria-hidden', 'true');
    });

    // Open clicked item (if it was closed)
    if (!isOpen) {
      item.classList.add('open');
      q.setAttribute('aria-expanded', 'true');
      item.querySelector('.faq-a').setAttribute('aria-hidden', 'false');
    }
  }

  q.addEventListener('click', toggleFaq);
  q.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq();
    }
  });
});

/* ──────────────────────────────────────
   7. CPT / ICD-10 / BILLING SEARCH DATA
   ────────────────────────────────────── */
const codeData = [
  // ── E&M Visits ──
  { code: '99213', type: 'CPT',   desc: 'Office visit – established patient, low-moderate complexity. E&M level 3. Most common outpatient visit code.' },
  { code: '99214', type: 'CPT',   desc: 'Office visit – established patient, moderate complexity. E&M level 4. Requires detailed history and medical decision-making.' },
  { code: '99203', type: 'CPT',   desc: 'Office visit – new patient, low-moderate complexity. Requires medically appropriate history and exam.' },
  { code: '99204', type: 'CPT',   desc: 'Office visit – new patient, moderate complexity. Requires 45+ minutes total time or moderate medical decision-making.' },
  { code: '99232', type: 'CPT',   desc: 'Subsequent hospital care, per day – moderate complexity. Used for daily inpatient visits after initial admit.' },
  { code: '99283', type: 'CPT',   desc: 'Emergency department visit – moderate severity. Requires expanded problem-focused history and exam.' },
  // ── GI / Procedures ──
  { code: '45378', type: 'CPT',   desc: 'Colonoscopy, diagnostic. Flexible, proximal to splenic flexure. Without biopsy, polypectomy, or removal of lesion.' },
  { code: '43239', type: 'CPT',   desc: 'Upper GI endoscopy (EGD) with biopsy. Esophagogastroduodenoscopy with single or multiple biopsies.' },
  // ── Behavioral Health ──
  { code: '90837', type: 'CPT',   desc: 'Psychotherapy, 60 minutes with patient. Individual therapy session for mental health and behavioral conditions.' },
  { code: '90834', type: 'CPT',   desc: 'Psychotherapy, 45 minutes with patient. Individual psychotherapy — most common outpatient therapy code.' },
  // ── Infusion / Oncology ──
  { code: '96413', type: 'CPT',   desc: 'Chemotherapy administration, IV infusion technique – first drug/substance, up to 1 hour.' },
  { code: '96369', type: 'CPT',   desc: 'Subcutaneous infusion for therapy, first hour. Used for biologics and hydration therapy.' },
  // ── Rheumatology ──
  { code: '20610', type: 'CPT',   desc: 'Aspiration and/or injection of major joint – shoulder, hip, knee. Common in rheumatology billing.' },
  // ── HCPCS Biologics ──
  { code: 'J0135', type: 'HCPCS', desc: 'Adalimumab injection, 1mg. HCPCS J-code for Humira biologic used in rheumatoid arthritis treatment.' },
  { code: 'J1745', type: 'HCPCS', desc: 'Infliximab injection, 10mg. HCPCS J-code for Remicade infusion — requires infusion center and prior auth.' },
  // ── ICD-10: Diabetes ──
  { code: 'E11.9',  type: 'ICD-10', desc: 'Type 2 diabetes mellitus without complications. Most common diabetes diagnosis code.' },
  { code: 'E11.65', type: 'ICD-10', desc: 'Type 2 diabetes mellitus with hyperglycemia. Use when blood sugar is elevated with documented hyperglycemia.' },
  // ── ICD-10: Rheumatology ──
  { code: 'M79.3',  type: 'ICD-10', desc: 'Panniculitis. Inflammation of subcutaneous fat tissue. Used in rheumatology and dermatology billing.' },
  { code: 'M06.9',  type: 'ICD-10', desc: 'Rheumatoid arthritis, unspecified. Primary diagnosis for RA patients without specified joint involvement.' },
  // ── ICD-10: GI ──
  { code: 'K57.30', type: 'ICD-10', desc: 'Diverticulosis of large intestine without perforation or abscess and without bleeding.' },
  // ── ICD-10: Mental Health ──
  { code: 'F32.9',  type: 'ICD-10', desc: 'Major depressive disorder, single episode, unspecified. Common mental health diagnosis for initial coding.' },
  { code: 'F41.1',  type: 'ICD-10', desc: 'Generalized anxiety disorder. Used in behavioral health billing for anxiety-related therapy services.' },
  // ── ICD-10: Preventive ──
  { code: 'Z23',    type: 'ICD-10', desc: 'Encounter for immunization. Use as primary or secondary diagnosis for preventive vaccine administration visits.' },
  // ── Billing Topics ──
  { code: 'denial',       type: 'TOPIC', desc: 'Claim denial occurs when a payer refuses to reimburse a claim. Common codes: CO-4 (modifier mismatch), CO-97 (bundled benefit), PR-1 (deductible), CO-29 (timely filing exceeded).' },
  { code: 'ar',           type: 'TOPIC', desc: 'Accounts Receivable (AR) tracks money owed by payers and patients. AR aging buckets: 0-30, 31-60, 61-90, 91-120, 120+ days. Target: 80%+ in 0-30 days.' },
  { code: 'eob',          type: 'TOPIC', desc: 'Explanation of Benefits (EOB) details how a claim was processed — amounts billed, allowed, paid, adjusted, and patient responsibility. ERA is the electronic version.' },
  { code: 'prior auth',   type: 'TOPIC', desc: 'Prior Authorization (PA) is advance insurer approval before providing certain services. Required for imaging, surgeries, and biologics. Missing PA is a top denial cause.' },
  { code: 'modifier',     type: 'TOPIC', desc: 'CPT modifiers clarify billing circumstances. Common: -25 (separate E&M same day), -59 (distinct service), -GT (telehealth), -26 (professional component), -TC (technical component).' },
  { code: 'rcm',          type: 'TOPIC', desc: 'Revenue Cycle Management (RCM) is the full financial process of healthcare. Key KPIs: clean claim rate (target 95%+), denial rate (target <5%), days in AR (target <30).' },
  { code: 'credentialing', type: 'TOPIC', desc: 'Provider credentialing is the process of verifying provider qualifications with payers. Required before billing under a provider NPI. Delays can cause months of lost revenue.' },
  { code: 'npi',          type: 'TOPIC', desc: 'National Provider Identifier (NPI) is a unique 10-digit ID required on all HIPAA standard claims. Type 1 = individual providers, Type 2 = organizations.' },
];

/* ──────────────────────────────────────
   8. SEARCH FUNCTION
   ────────────────────────────────────── */
function doSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsEl = document.getElementById('searchResults');

  if (!q) {
    resultsEl.innerHTML = '';
    return;
  }

  const found = codeData.filter(d =>
    d.code.toLowerCase().includes(q) ||
    d.desc.toLowerCase().includes(q) ||
    d.type.toLowerCase().includes(q)
  );

  if (!found.length) {
    resultsEl.innerHTML = `<div class="result-empty">No results for "${q}" — try: 99213, E11.9, denial, AR, modifier</div>`;
    return;
  }

  resultsEl.innerHTML = found.map(d => `
    <div class="result-item">
      <div class="result-code">[${d.type}] ${d.code.toUpperCase()}</div>
      <div class="result-desc">${d.desc}</div>
    </div>
  `).join('');
}

document.getElementById('searchBtn').addEventListener('click', doSearch);
document.getElementById('searchInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') doSearch();
});

/* ──────────────────────────────────────
   9. CONTACT FORM
   ────────────────────────────────────── */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name    = document.getElementById('cf_name').value.trim();
  const email   = document.getElementById('cf_email').value.trim();
  const subject = document.getElementById('cf_subject').value.trim();
  const message = document.getElementById('cf_message').value.trim();
  const btn     = document.getElementById('sendBtn');

  // Validation
  if (!name || !email || !subject || !message) {
    showToast('Please fill in all fields.', 'error');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }

  // Open Gmail compose (works on all devices — no mailto needed)
  const gmailUrl =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    '&to=sattarahmedofficial1@gmail.com' +
    '&su=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(
      'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
    );

  window.open(gmailUrl, '_blank');

  showToast('Opening Gmail compose window...', 'success');

  btn.textContent = '✓ Opening Gmail...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
      Send Message`;
    btn.disabled = false;
  }, 3000);
});
