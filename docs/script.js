// Update copyright year
document.getElementById('y').textContent = new Date().getFullYear();

// Mobile navigation toggle
document.querySelector('.nav-toggle').addEventListener('click', function() {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Fun confetti effect for main CTA buttons
function createConfetti() {
  const colors = ['#FF8E53', '#FF6B6B', '#2E5946', '#FFB366'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '1000';
    
    document.body.appendChild(confetti);
    
    const animation = confetti.animate([
      { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
      { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: Math.random() * 3000 + 2000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    animation.onfinish = () => confetti.remove();
  }
}

// Add confetti to main CTA buttons
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', createConfetti);
});

// Add some fun hover effects to the animal icons
document.querySelectorAll('.icon-container').forEach(icon => {
  icon.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.05) rotate(5deg)';
  });
  
  icon.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
  });
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


