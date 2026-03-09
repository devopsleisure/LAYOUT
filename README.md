<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Sattar Ahmed - Medical Billing & Revenue Cycle Specialist Portfolio"
    />
    <title>Sattar Ahmed | Medical Billing Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header class="site-header" id="home">
      <nav class="navbar container" aria-label="Main navigation">
        <a class="brand" href="#home">Sattar Ahmed</a>
        <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#knowledge-hub">Medical Billing Knowledge Hub</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section class="hero container">
        <div class="hero-image-wrapper">
          <img
            src="assets/images/profile.jpg"
            alt="Portrait of Sattar Ahmed"
            class="profile-image"
          />
        </div>
        <div class="hero-content">
          <p class="hero-tag">Revenue Focused. Detail Driven.</p>
          <h1>Sattar Ahmed</h1>
          <h2>Medical Billing &amp; Revenue Cycle Specialist</h2>
          <p>
            Helping healthcare providers optimize revenue cycle management and
            medical billing processes.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="assets/cv/sattar-ahmed-cv.pdf" download
              >Download CV</a
            >
            <a class="btn btn-secondary" href="#portfolio">View Portfolio</a>
          </div>
        </div>
      </section>
    </header>
    <main>
      <section id="about" class="section container">
        <div class="section-heading">
          <p class="eyebrow">About</p>
          <h3>Professional Introduction</h3>
        </div>
        <div class="about-grid">
          <p>
            I support healthcare organizations by building reliable medical billing
            workflows, reducing claim denials, and improving payment turnaround.
            My approach combines compliance, analytics, and patient-centric
            communication to keep financial operations efficient.
          </p>
          <ul class="expertise-list">
            <li>Revenue Cycle Management</li>
            <li>AR Follow-Up</li>
            <li>Payment Posting</li>
            <li>Insurance Verification</li>
            <li>Denial Management</li>
            <li>Credentialing</li>
            <li>CPT Coding</li>
            <li>ICD-10 Coding</li>
          </ul>
        </div>
      </section>
      <section id="skills" class="section section-alt">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Skills Dashboard</p>
            <h3>Core Capabilities</h3>
          </div>
          <div class="card-grid skills-grid">
            <article class="card skill-card">
              <div class="icon">📈</div>
              <h4>Revenue Cycle Management</h4>
              <p>End-to-end optimization from patient intake to final reimbursement.</p>
            </article>
            <article class="card skill-card">
              <div class="icon">📞</div>
              <h4>AR Follow-Up</h4>
              <p>Focused claim tracking to reduce aging balances and improve collections.</p>
            </article>
            <article class="card skill-card">
              <div class="icon">🛡️</div>
              <h4>Denial Management</h4>
              <p>Root-cause analysis and resubmission workflows to recover lost revenue.</p>
            </article>
            <article class="card skill-card">
              <div class="icon">💳</div>
              <h4>Payment Posting</h4>
              <p>Accurate ERA/EOB posting with variance checks and reconciliation.</p>
            </article>
            <article class="card skill-card">
              <div class="icon">✅</div>
              <h4>Insurance Verification</h4>
              <p>Coverage and eligibility validation to prevent avoidable billing errors.</p>
            </article>
            <article class="card skill-card">
              <div class="icon">🧾</div>
              <h4>Medical Coding</h4>
              <p>Precise CPT and ICD-10 coding alignment for compliant claim submission.</p>
            </article>
          </div>
        </div>
      </section>
      <section id="knowledge-hub" class="section container">
        <div class="section-heading">
          <p class="eyebrow">Medical Billing Knowledge Hub</p>
          <h3>Key Concepts</h3>
        </div>
        <div class="card-grid">
          <article class="card">
            <h4>CPT Codes Overview</h4>
            <p>
              Current Procedural Terminology (CPT) codes describe medical services
              and procedures for billing and reimbursement.
            </p>
          </article>
          <article class="card">
            <h4>ICD-10 Diagnosis Coding</h4>
            <p>
              ICD-10 codes capture diagnoses and clinical conditions to justify
              treatment, support claims, and maintain compliance.
            </p>
          </article>
          <article class="card">
            <h4>Insurance Claim Workflow</h4>
            <p>
              Verify eligibility, submit clean claims, monitor payer status, post
              payments, and resolve denials quickly.
            </p>
          </article>
          <article class="card">
            <h4>Revenue Cycle Stages</h4>
            <p>
              Scheduling, registration, coding, claim filing, adjudication,
              payment posting, and patient follow-up all impact cash flow.
            </p>
          </article>
        </div>
      </section>
      <section id="search" class="section section-alt">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Search Tool</p>
            <h3>CPT, ICD-10 &amp; Billing Q&amp;A</h3>
          </div>
          <div class="search-box card">
            <label for="searchInput">Search CPT/ICD-10 codes or billing topics</label>
            <div class="search-controls">
              <input
                id="searchInput"
                type="text"
                placeholder="Try: 99213, E11.9, denial management"
              />
              <button id="searchBtn" class="btn btn-primary" type="button">Search</button>
            </div>
            <div id="searchResults" class="search-results" aria-live="polite"></div>
          </div>
        </div>
      </section>
      <section id="faq" class="section container">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h3>Frequently Asked Questions</h3>
        </div>
        <div class="faq-list">
          <details>
            <summary>What is Revenue Cycle Management?</summary>
            <p>
              Revenue Cycle Management (RCM) covers all financial activities from
              patient registration to final payment collection.
            </p>
          </details>
          <details>
            <summary>What is AR Follow-Up?</summary>
            <p>
              AR Follow-Up means actively reviewing unpaid claims and coordinating
              with payers to resolve delays and secure payment.
            </p>
          </details>
          <details>
            <summary>What causes claim denials?</summary>
            <p>
              Common reasons include coding errors, missing documentation,
              eligibility issues, authorization gaps, and filing deadline misses.
            </p>
          </details>
          <details>
            <summary>What is the difference between CPT and ICD-10?</summary>
            <p>
              CPT codes represent services/procedures performed, while ICD-10 codes
              represent diagnoses and clinical conditions.
            </p>
          </details>
        </div>
      </section>
      <section id="portfolio" class="section section-alt">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Portfolio</p>
            <h3>Featured Projects</h3>
          </div>
          <div class="card-grid">
            <article class="card">
              <h4>Medical Billing Knowledge Hub</h4>
              <p>
                Educational resource module for explaining coding, claims, and
                payer workflows to teams and stakeholders.
              </p>
              <p class="tech">Technologies: HTML5, CSS3, JavaScript</p>
            </article>
            <article class="card">
              <h4>CPT Code Learning Tool</h4>
              <p>
                Lightweight lookup utility to assist users in discovering and
                understanding common CPT entries.
              </p>
              <p class="tech">Technologies: JSON, JavaScript Search, Responsive UI</p>
            </article>
            <article class="card">
              <h4>ICD-10 Reference Tool</h4>
              <p>
                Structured diagnosis code explorer focused on fast search and
                simplified terminology for quick learning.
              </p>
              <p class="tech">Technologies: JSON Data Mapping, Front-End Filtering</p>
            </article>
          </div>
        </div>
      </section>
      <section id="contact" class="section container">
        <div class="section-heading">
          <p class="eyebrow">Contact</p>
          <h3>Let's Connect</h3>
        </div>
        <div class="card contact-card">
          <p><strong>Name:</strong> Sattar Ahmed</p>
          <p><strong>Title:</strong> Medical Billing &amp; Revenue Cycle Specialist</p>
          <p>
            <strong>GitHub:</strong>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
              >github.com/your-profile</a
            >
          </p>
          <p><strong>Email:</strong> your-email@example.com</p>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="container">
        <p>&copy; <span id="year"></span> Sattar Ahmed. All rights reserved.</p>
      </div>
    </footer>
    <script src="js/script.js"></script>
  </body>
</html>
