// Update copyright year
document.getElementById('y').textContent = new Date().getFullYear();

// Mobile navigation toggle
document.querySelector('.nav-toggle').addEventListener('click', function() {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Fun confetti effect for main CTA buttons
function createConfetti() {
  const colors = ['#FF8E53', '#EA596E', '#2E5946', '#FFB366'];
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

// Full Privacy Policy and Terms of Service content from the app
const privacy = document.getElementById('privacy-content');
if (privacy) {
  privacy.innerHTML = `
    <p style="text-align: center; color: #666; font-style: italic; margin-bottom: 2rem;">Last updated: ${new Date().toLocaleDateString()}</p>
    
    <div class="doc-section">
      <h2>1. Introduction</h2>
      <p>Welcome to ASHapp ("we," "our," or "us"). This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application and related services.</p>
      <p>By using ASHapp, you agree to the collection and use of information in accordance with this policy.</p>
    </div>

    <div class="doc-section">
      <h2>2. Data We Collect</h2>
      <p>We collect the following types of personal data:</p>
      <ul>
        <li><strong>Account Information:</strong> Email address, user ID, and authentication tokens</li>
        <li><strong>User-Generated Content:</strong> Learning materials, concepts, collections, and study progress you create</li>
        <li><strong>Usage Data:</strong> How you interact with the app, learning progress, and feature usage</li>
        <li><strong>Technical Data:</strong> Device information, app version, and performance metrics</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>3. How We Use Your Data</h2>
      <p>We use your personal data for the following purposes:</p>
      <ul>
        <li><strong>Service Provision:</strong> To provide and maintain the ASHapp learning platform</li>
        <li><strong>AI Processing:</strong> To process your learning materials through OpenAI's GPT service for AI-generated collections and learning assistance</li>
        <li><strong>Data Storage:</strong> To securely store your learning materials and progress on AWS cloud infrastructure</li>
        <li><strong>Account Management:</strong> To manage your account, subscriptions, and preferences</li>
        <li><strong>Improvement:</strong> To improve our services and develop new features</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>4. Legal Basis for Processing</h2>
      <p>We process your personal data based on the following legal grounds:</p>
      <ul>
        <li><strong>Contract:</strong> To fulfill our service agreement with you</li>
        <li><strong>Legitimate Interest:</strong> To improve our services and provide a better user experience</li>
        <li><strong>Consent:</strong> For optional features and communications (you can withdraw consent at any time)</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>5. Data Storage and Processing</h2>
      <p><strong>AWS Cloud Services:</strong> Your learning materials, account data, and app data are stored on Amazon Web Services (AWS) cloud infrastructure located in the European Union (EU) to ensure GDPR compliance.</p>
      <p><strong>OpenAI GPT Processing:</strong> When you use AI-generated features, your learning materials may be processed by OpenAI's GPT service. This processing is necessary to provide AI-powered learning assistance and collection generation.</p>
      <p><strong>Data Security:</strong> All data is encrypted in transit using TLS (Transport Layer Security) and at rest using AES-256 encryption. We follow AWS security standards and industry best practices.</p>
    </div>

    <div class="doc-section">
      <h2>6. Third-Party Services</h2>
      <p>We use the following third-party services:</p>
      <ul>
        <li><strong>Amazon Web Services (AWS):</strong> For cloud hosting, data storage, and infrastructure services</li>
        <li><strong>OpenAI:</strong> For AI-powered learning features and content generation</li>
      </ul>
      <p>All third-party services are bound by data processing agreements and comply with GDPR requirements.</p>
    </div>

    <div class="doc-section">
      <h2>7. Data Retention</h2>
      <p>We retain your personal data for as long as your account is active or as needed to provide services. When you delete your account, all your data is permanently removed from our systems within 30 days.</p>
      <ul>
        <li><strong>Learning Materials:</strong> Your user-generated content is retained until account deletion</li>
        <li><strong>Account Data:</strong> Retained until account deletion</li>
        <li><strong>Verification Codes:</strong> 5 minutes (for security purposes)</li>
        <li><strong>System Logs:</strong> 30 days (for security and debugging)</li>
        <li><strong>Usage Analytics:</strong> Aggregated and anonymized after 2 years</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>8. Your Rights</h2>
      <p>Under applicable data protection laws, you have the right to:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of your personal data</li>
        <li><strong>Rectification:</strong> Correct inaccurate information</li>
        <li><strong>Erasure:</strong> Delete your account and all associated data</li>
        <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
        <li><strong>Objection:</strong> Object to certain types of processing</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>9. International Data Transfers</h2>
      <p>Your data is primarily stored in the European Union (Stockholm, Sweden). Any transfers outside the EU are protected by appropriate safeguards, including Standard Contractual Clauses (SCCs) and adequacy decisions.</p>
    </div>

    <div class="doc-section">
      <h2>10. Children's Privacy</h2>
      <p>ASHapp is not intended for children under 16. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us immediately.</p>
    </div>

    <div class="doc-section">
      <h2>11. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy in the app and updating the "Last updated" date.</p>
    </div>

    <div class="doc-section">
      <h2>12. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or want to exercise your rights, please contact us:</p>
      <p><a href="mailto:privacy@ashapp.pl">privacy@ashapp.pl</a></p>
      <p>We will respond to your request within 30 days.</p>
    </div>

    <div class="doc-section">
      <h2>13. Supervisory Authority</h2>
      <p>If you are in the European Union and believe your data protection rights have been violated, you have the right to lodge a complaint with your local data protection supervisory authority.</p>
    </div>
  `;
}

const terms = document.getElementById('terms-content');
if (terms) {
  terms.innerHTML = `
    <p style="text-align: center; color: #666; font-style: italic; margin-bottom: 2rem;">Last updated: ${new Date().toLocaleDateString()}</p>
    
    <div class="doc-section">
      <h2>1. Acceptance of Terms</h2>
      <p>By downloading, installing, or using ASHapp ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>
      <p>These Terms constitute a legally binding agreement between you and ASHapp ("we," "our," or "us").</p>
    </div>

    <div class="doc-section">
      <h2>2. Description of Service</h2>
      <p>ASHapp is a mobile learning application that allows users to:</p>
      <ul>
        <li>Create and manage learning collections and concepts</li>
        <li>Use AI-powered features to generate learning content</li>
        <li>Track learning progress and participate in challenges</li>
        <li>Access different subscription tiers with varying features</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>3. Service Description</h2>
      <p>ASHapp is a learning platform that allows users to create, organize, and study learning materials. Our services include:</p>
      <ul>
        <li><strong>Learning Management:</strong> Create and organize learning collections and concepts</li>
        <li><strong>AI-Powered Features:</strong> AI-generated learning collections using OpenAI's GPT technology</li>
        <li><strong>Progress Tracking:</strong> Monitor your learning progress and set personal goals</li>
        <li><strong>Cloud Storage:</strong> Secure storage of your learning materials on AWS cloud infrastructure</li>
        <li><strong>Sharing Features:</strong> Share learning collections with other users (Premium feature)</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>4. User Accounts</h2>
      <p>To use ASHapp, you must create an account by providing a valid email address. You are responsible for:</p>
      <ul>
        <li><strong>Account Security:</strong> Keeping your login credentials secure and confidential</li>
        <li><strong>Account Activity:</strong> All activities performed under your account</li>
        <li><strong>Account Verification:</strong> Verifying your email address to activate your account</li>
        <li><strong>Account Deletion:</strong> You may delete your account at any time, which will permanently remove all your data</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>5. User-Generated Content</h2>
      <p>You retain ownership of all content you create in ASHapp. By using our services, you:</p>
      <ul>
        <li><strong>Grant License:</strong> Grant us a license to store, process, and display your content to provide our services</li>
        <li><strong>AI Processing:</strong> Consent to your learning materials being processed by OpenAI's GPT service for AI-generated features</li>
        <li><strong>Data Storage:</strong> Consent to your content being stored on AWS cloud infrastructure</li>
        <li><strong>Content Responsibility:</strong> Are responsible for ensuring your content doesn't violate any laws or third-party rights</li>
        <li><strong>Content Removal:</strong> Can delete your content at any time, which will be permanently removed from our systems</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>6. AI-Powered Features</h2>
      <p>ASHapp uses OpenAI's GPT technology to provide AI-generated learning features:</p>
      <ul>
        <li><strong>AI Processing:</strong> When you use AI features, your learning materials are processed by OpenAI's GPT service</li>
        <li><strong>Data Sharing:</strong> Your content is shared with OpenAI solely for the purpose of providing AI-generated learning assistance</li>
        <li><strong>OpenAI Terms:</strong> Use of AI features is also subject to OpenAI's terms of service and privacy policy</li>
        <li><strong>AI Limitations:</strong> AI-generated content is for educational purposes only and should be verified for accuracy</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>7. Data Storage and Security</h2>
      <p>Your data is stored and processed using industry-standard security measures:</p>
      <ul>
        <li><strong>AWS Infrastructure:</strong> All data is stored on Amazon Web Services (AWS) cloud infrastructure</li>
        <li><strong>Data Encryption:</strong> Data is encrypted in transit and at rest using industry-standard protocols</li>
        <li><strong>EU Compliance:</strong> AWS infrastructure is located in the European Union to ensure GDPR compliance</li>
        <li><strong>Access Control:</strong> Strict access controls limit who can access your data</li>
        <li><strong>Regular Backups:</strong> Your data is regularly backed up to prevent loss</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>8. Acceptable Use</h2>
      <p>You agree not to use ASHapp to:</p>
      <ul>
        <li><strong>Violate Laws:</strong> Use the service for any illegal or unauthorized purpose</li>
        <li><strong>Harm Others:</strong> Harass, abuse, or harm other users</li>
        <li><strong>Infringe Rights:</strong> Violate intellectual property rights or privacy of others</li>
        <li><strong>Misuse AI:</strong> Use AI features to generate harmful, misleading, or inappropriate content</li>
        <li><strong>Overload Systems:</strong> Attempt to overload or disrupt our services</li>
        <li><strong>Unauthorized Access:</strong> Attempt to gain unauthorized access to our systems or other users' accounts</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>9. Subscriptions and Billing</h2>
      <ul>
        <li>Subscription plans and one-time purchases are offered at the prices and billing periods shown in the app and on the store listing at the time of purchase. Prices may change; if they do, we will notify existing subscribers in advance and changes will apply at the next billing cycle.</li>
        <li>Billing, renewals, cancellations, and refunds are handled by the app store (e.g., Google Play). You can manage or cancel your subscription at any time in your store account settings; cancellation takes effect at the end of the current billing period.</li>
        <li>Free trials, if offered, convert to a paid subscription at the price shown unless you cancel before the trial ends.</li>
        <li>Applicable taxes and currency conversions may apply and are shown before you confirm purchase.</li>
        <li>If a payment fails or a subscription expires, access to paid features may be suspended until payment is successful or the plan is changed.</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>10. Intellectual Property</h2>
      <h3>10.1 Our Rights</h3>
      <ul>
        <li>The App and its original content are owned by ASHapp</li>
        <li>Our trademarks, logos, and branding are protected</li>
      </ul>
      
      <h3>10.2 Third-Party Rights</h3>
      <ul>
        <li>The App may include third-party content and services</li>
        <li>Third-party content is subject to their respective licenses</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>11. Privacy and Data</h2>
      <ul>
        <li>Your privacy is important to us</li>
        <li>Our Privacy Policy explains how we collect and use your data</li>
        <li>By using the App, you consent to our data practices</li>
        <li>You have rights regarding your personal data as outlined in our Privacy Policy</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>12. Disclaimers and Limitations</h2>
      <h3>12.1 Service Availability</h3>
      <ul>
        <li>The App is provided "as is" without warranties</li>
        <li>We do not guarantee uninterrupted or error-free service</li>
        <li>We may modify or discontinue features at any time</li>
      </ul>
      
      <h3>12.2 Limitation of Liability</h3>
      <ul>
        <li>We are not liable for indirect, incidental, or consequential damages</li>
        <li>Our total liability is limited to the amount you paid for the service</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>13. Termination</h2>
      <h3>13.1 Termination by You</h3>
      <ul>
        <li>You may delete your account at any time</li>
        <li>Account deletion is permanent and irreversible</li>
      </ul>
      
      <h3>13.2 Termination by Us</h3>
      <ul>
        <li>We may terminate or suspend your account for Terms violations</li>
        <li>We will provide reasonable notice unless immediate action is required</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>14. Changes to Terms</h2>
      <ul>
        <li>We may update these Terms from time to time</li>
        <li>We will notify you of significant changes</li>
        <li>Continued use after changes constitutes acceptance</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>15. Governing Law</h2>
      <ul>
        <li>These Terms are governed by Polish law</li>
        <li>Any disputes will be resolved in Polish courts</li>
        <li>EU consumer protection laws may apply</li>
      </ul>
    </div>

    <div class="doc-section">
      <h2>16. Contact Information</h2>
      <p>For questions about these Terms, please contact us:</p>
      <p><a href="mailto:privacy@ashapp.pl">privacy@ashapp.pl</a></p>
    </div>

    <div class="doc-section">
      <h2>17. Severability</h2>
      <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
    </div>
  `;
}


