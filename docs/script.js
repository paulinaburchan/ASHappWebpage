document.getElementById('y')?.append(new Date().getFullYear());

// Mobile nav (basic)
const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', () => {
  document.querySelector('.nav')?.classList.toggle('open');
});

// Inject short web versions of policy/terms from app content if available later.
// Placeholder text so pages are useful immediately.
const privacy = document.getElementById('privacy-content');
if (privacy) {
  privacy.innerHTML = `
    <h2>Summary</h2>
    <p>We store your email and learning materials in AWS (EU) and process AI features via OpenAI. Data is encrypted in transit (TLS) and at rest (AES‑256). You can delete your account at any time; all data is removed within 30 days. Contact: <a href="mailto:privacy@ashapp.pl">privacy@ashapp.pl</a>.</p>
    <h3>Retention</h3>
    <ul>
      <li>Email and account data: until account deletion</li>
      <li>Verification codes: 5 minutes</li>
      <li>System logs: 30 days</li>
      <li>Usage analytics: anonymized after 2 years</li>
    </ul>
    <h3>Your rights</h3>
    <p>Access, rectify, delete, port your data, or object to processing by emailing privacy@ashapp.pl.</p>
  `;
}

const terms = document.getElementById('terms-content');
if (terms) {
  terms.innerHTML = `
    <h2>Using ASHapp</h2>
    <p>ASHapp helps you learn with collections, daily goals, and optional AI assistance. Be respectful and don’t misuse the service.</p>
    <h3>Subscriptions and Billing</h3>
    <ul>
      <li>Prices and billing periods are shown in the app/store at purchase. Changes apply on next cycle with prior notice.</li>
      <li>Billing and cancellations are handled by the app store. Manage in your store account settings.</li>
      <li>Free trials convert unless cancelled before the trial ends.</li>
    </ul>
  `;
}


