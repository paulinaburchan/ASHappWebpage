// ─── Initialise Lucide icons ────────────────────────────────────────────────
if (typeof lucide !== 'undefined') { lucide.createIcons(); }

// ─── Copyright year ──────────────────────────────────────────────────────────
document.getElementById('y').textContent = new Date().getFullYear();

// ─── Mobile nav drawer ───────────────────────────────────────────────────────
(function () {
  const toggle   = document.getElementById('navToggle');
  const drawer   = document.getElementById('navDrawer');
  const overlay  = document.getElementById('navOverlay');
  const closeBtn = document.getElementById('drawerClose');
  if (!toggle || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openDrawer);
  if (closeBtn)  closeBtn.addEventListener('click', closeDrawer);
  if (overlay)   overlay.addEventListener('click', closeDrawer);

  // Close drawer when a nav link is clicked
  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });
})();

// ─── Scroll-based fade-up animations ────────────────────────────────────────
(function () {
  var els = document.querySelectorAll('.fade-up, .feature-card');
  if (!els.length || typeof IntersectionObserver === 'undefined') {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { obs.observe(el); });
})();

// ─── FAQ accordion (handles any .faq-list container) ─────────────────────────
(function () {
  function initFaqList(faqList) {
    faqList.querySelectorAll('.faq-item').forEach(function (item) {
      var btn = item.querySelector('.faq-question');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        faqList.querySelectorAll('.faq-item.open').forEach(function (o) {
          o.classList.remove('open');
        });
        if (!isOpen) item.classList.add('open');
      });
    });
  }
  ['faqList', 'homeFaqList'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) initFaqList(el);
  });
})();

// ─── Confetti effect ─────────────────────────────────────────────────────────
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
document.querySelectorAll('.btn-primary, .btn-highlight').forEach(button => {
  button.addEventListener('click', createConfetti);
});

// Full Privacy Policy and Terms of Service content from the app (generated from ASHapp-frontend/localization/enEN.json — run: node scripts/generate-legal-from-en.mjs)
const privacy = document.getElementById('privacy-content');
if (privacy) {
  privacy.innerHTML = `
    <p style="text-align: center; color: #666; font-style: italic; margin-bottom: 2rem;">Last updated: ${new Date().toLocaleDateString()}</p>
    <div class="doc-section"><h2>1. Introduction</h2>
      <p>Welcome to ASHapp (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application and related services.</p>
      <p>By using ASHapp, you agree to the collection and use of information in accordance with this policy.</p></div>
    <div class="doc-section"><h2>2. Your photos, camera, and screenshots</h2>
      <p>We process your photos, camera, and screenshots as follows:</p>
      <p><strong>Purpose:</strong> We use the camera, your photo library, or screenshots in three situations: (1) when you report an issue in the app, so you can attach an image to help us diagnose it; (2) when you add an association image to a concept from your gallery or camera, as part of the learning content you create; and (3) for OCR (text extraction from photos): printed notes are processed on our servers for OCR; images of handwritten notes may be sent to Google Gemini for processing so that content can be turned into learning materials. We do not perform background capture or biometric/face recognition.</p>
      <p><strong>Data collected:</strong> For issue reports—the image you attach and any optional text. For concepts—the image you choose or capture for your association, linked to your learning content. For OCR—images are used only while we process them; we do not keep the image files in our database after OCR finishes. We store the learning materials and text derived from the process (for example, extracted text and content you create), not the original images themselves.</p>
      <p><strong>Storage:</strong> Images stay on your device until you upload them. When you submit a report or save an association image, we store the file securely in Amazon S3 (AWS): support tickets for troubleshooting, and concept images as part of the service until you remove them or delete your account. For OCR, images are held only temporarily while processing runs; after processing completes, they are removed from our storage (including cloud storage used in the pipeline). We do not retain OCR source images after processing. Extracted text and learning materials derived from OCR are stored like your other content.</p>
      <p><strong>Sharing:</strong> Not sold. Not shared with third parties except trusted processors (e.g., AWS S3 for cloud storage and processing, Google Gemini when handwritten images are sent for OCR) under data processing agreements. Printed-text OCR runs on our infrastructure and is not sent to Google or other external AI providers for that step.</p>
      <p><strong>Retention:</strong> Issue-report images—until the reported issue is resolved or you delete your account, whichever is first. Association images—for as long as you keep the concept or image, or until account deletion, consistent with our general retention rules for user content. OCR—we do not retain the original source images after processing; we retain the learning materials and extracted text derived from OCR like your other user content.</p>
      <p><strong>Optional:</strong> Camera and photo library access are only needed for features that attach or upload images (including OCR from photos). You can deny these permissions and still use ASHapp for features that do not require them.</p>
    </div>
    <div class="doc-section"><h2>3. Voice (speech input)</h2>
      <p>We process voice input in learning mode as follows:</p>
      <p><strong>Purpose:</strong> In voice mode you practice by speaking your answer. We use the result to compare against your learning content, the same way as typing mode.</p>
      <p><strong>On-device processing:</strong> When the app uses on-device speech recognition, audio is processed on your phone or tablet by the operating system (Apple or Google) according to that platform’s settings and policies.</p>
      <p><strong>Cloud transcription:</strong> When our servers are configured for cloud speech-to-text, a short recording of your answer is sent securely to OpenAI for transcription only. We do not store the audio file after transcription by default.</p>
      <p><strong>Retention:</strong> Transcripts you submit are treated like other learning activity. We do not keep uploaded voice audio after transcription unless we explicitly change that policy and notify you.</p>
      <p><strong>Optional:</strong> Voice mode requires microphone access. You can deny it and use flashcards or typing mode instead.</p>
    </div>
    <div class="doc-section"><h2>4. Data We Collect</h2>
      <p>We collect the following types of personal data:</p><ul>
        <li><strong>Account Information:</strong> Email address, user ID, and authentication tokens</li>
        <li><strong>User-Generated Content:</strong> Learning materials, concepts, collections, study progress you create, images you upload or send to us, and AI-generated images created through our services</li>
        <li><strong>Usage Data:</strong> How you interact with the app, learning progress, and feature usage</li>
        <li><strong>Technical Data:</strong> Device information, app version, and performance metrics</li>
      </ul></div>
    <div class="doc-section"><h2>5. How We Use Your Data</h2>
      <p>We use your personal data for the following purposes:</p><ul>
        <li><strong>Service Provision:</strong> To provide and maintain the ASHapp learning platform</li>
        <li><strong>AI Processing:</strong> To process your learning materials through Anthropic, OpenAI, and Google services (including Google Gemini for handwritten-note OCR) for AI-generated collections, learning assistance, image generation for visual learning aids, and other AI-powered features</li>
        <li><strong>Image Processing:</strong> To extract text from note images you upload (we assume you have the right to use them), we process printed notes on our servers to run OCR. When you enable handwritten notes, image content is sent to Google Gemini for vision OCR. We then use that text to create your learning materials. We do not keep the original images after OCR; we keep the learning materials derived from the process.</li>
        <li><strong>Voice mode (speech input):</strong> When you use voice mode, we process your spoken answer to check it against your learning content. On-device recognition may be handled by Apple or Google on your device. When cloud transcription is enabled, a short audio clip is sent to OpenAI for speech-to-text and is not stored after transcription by default.</li>
        <li><strong>Data Storage:</strong> To securely store your learning materials and progress on AWS cloud infrastructure</li>
        <li><strong>Account Management:</strong> To manage your account, subscriptions, and preferences</li>
        <li><strong>Improvement:</strong> To improve our services and develop new features</li>
      </ul></div>
    <div class="doc-section"><h2>6. Legal Basis for Processing</h2>
      <p>We process your personal data based on the following legal grounds:</p><ul>
        <li><strong>Contract:</strong> To fulfill our service agreement with you</li>
        <li><strong>Legitimate Interest:</strong> To improve our services and provide a better user experience</li>
        <li><strong>Consent:</strong> For optional features and communications (you can withdraw consent at any time)</li>
      </ul></div>
    <div class="doc-section"><h2>7. Data Storage and Processing</h2>
      <p><strong>AWS Cloud Services:</strong> Your learning materials, account data, and app data are stored on Amazon Web Services (AWS) cloud infrastructure located in the European Union (EU) to ensure GDPR compliance.</p>
      <p><strong>OpenAI AI Processing:</strong> When you use AI-generated features, your content may be processed by OpenAI’s services for image generation for visual learning aids. AI-generated content is filtered through OpenAI’s content moderation systems to prevent inappropriate, violent, or sexual content; image generation includes built-in safety filters for policy violations. Images are stored in our secure AWS S3 storage. We do not use your data to train OpenAI’s models.</p>
      <p><strong>Anthropic Claude AI Processing:</strong> When you use AI features to generate learning collections or individual concepts, your learning materials (text content) are processed by Anthropic’s Claude models. Only the text content relevant to your learning materials is sent — no personal identifiers (email, user ID, or account information). Anthropic’s processing is subject to their terms and privacy policy. Under Anthropic’s API usage policies, your data is not used to train their models.</p>
      <p><strong>Google Gemini (handwritten OCR):</strong> When you import notes with the handwritten option enabled, image content is sent to Google Gemini to read handwriting. Only the image content is sent—no personal identifiers (email, user ID, or account information). Google's processing is subject to their terms and privacy policy. Extracted text is used in our app to create your learning materials. After processing, source images are removed from our storage; we do not retain them.</p>
      <p><strong>Data Security:</strong> All data is encrypted in transit using TLS (Transport Layer Security) and at rest using AES-256 encryption. We follow AWS security standards and industry best practices.</p></div>
    <div class="doc-section"><h2>8. Third-Party Services</h2>
      <p>We use the following third-party services:</p><ul>
        <li><strong>Amazon Web Services (AWS):</strong> For cloud hosting, data storage, and infrastructure services</li>
        <li><strong>OpenAI:</strong> For AI-powered image generation (visual learning aids). Content is moderated for safety and appropriateness. OpenAI does not use your data to train its models.</li>
        <li><strong>Anthropic:</strong> For AI-powered text generation features — generating learning collections and individual concepts using Claude language models. Anthropic does not use your data to train its models under the applicable API usage policies.</li>
        <li><strong>Google Gemini:</strong> For handwritten-note OCR when you enable that option: image content is sent to Google Gemini. For printed notes, text is extracted on our servers and is not sent to Google or other external AI providers for that step. Only image content is sent for handwritten OCR; we do not include personal account identifiers in those requests.</li>
      </ul>
      <p>All third-party services are bound by data processing agreements and comply with GDPR requirements.</p></div>
    <div class="doc-section"><h2>9. Data Retention</h2>
      <p>We retain your personal data for as long as your account is active or as needed to provide services. When you delete your account, your account, learning materials, and uploaded images are deleted immediately and permanently. Only system logs are retained for up to 90 days.</p>
      <p><strong>Learning Materials:</strong> Your user-generated content (collections, concepts, images) is deleted immediately upon account deletion</p>
      <p><strong>Account Data:</strong> Your account and all associated data are deleted immediately upon account deletion</p>
      <p><strong>Verification Codes:</strong> 5 minutes (for security purposes)</p>
      <p><strong>System Logs:</strong> 90 days (for security and debugging) - these are the only data retained after account deletion</p>
      <p><strong>Usage Analytics:</strong> Aggregated and anonymized after 2 years</p></div>
    <div class="doc-section"><h2>10. Your Rights</h2>
      <p>Under applicable data protection laws, you have the right to:</p><ul>
        <li><strong>Access:</strong> Request a copy of your personal data</li>
        <li><strong>Rectification:</strong> Correct inaccurate information</li>
        <li><strong>Erasure:</strong> Delete your account and all associated data</li>
        <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
        <li><strong>Objection:</strong> Object to certain types of processing</li>
      </ul></div>
    <div class="doc-section"><h2>11. International Data Transfers</h2>
      <p>Your data is primarily stored in the European Union (Stockholm, Sweden). Any transfers outside the EU are protected by appropriate safeguards, including Standard Contractual Clauses (SCCs) and adequacy decisions.</p></div>
    <div class="doc-section"><h2>12. Children's Privacy</h2>
      <p>ASHapp is not intended for children under 16. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us immediately.</p></div>
    <div class="doc-section"><h2>13. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy in the app and updating the &quot;Last updated&quot; date.</p></div>
    <div class="doc-section"><h2>14. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or want to exercise your rights, please contact us:</p>
      <p><a class="btn btn-primary" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;" href="mailto:privacy@ashapp.pl">privacy@ashapp.pl</a></p>
      <p>We will respond to your request within 30 days.</p></div>
    <div class="doc-section"><h2>15. Supervisory Authority</h2>
      <p>If you are in the European Union and believe your data protection rights have been violated, you have the right to lodge a complaint with your local data protection supervisory authority.</p></div>
  `;
}

const terms = document.getElementById('terms-content');
if (terms) {
  terms.innerHTML = `
    <p style="text-align: center; color: #666; font-style: italic; margin-bottom: 2rem;">Last updated: ${new Date().toLocaleDateString()}</p>
    <div class="doc-section"><h2>1. Acceptance of Terms</h2>
      <p>By downloading, installing, or using ASHapp (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.</p>
      <p>These Terms constitute a legally binding agreement between you and ASHapp (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).</p></div>
    <div class="doc-section"><h2>2. Description of Service</h2>
      <p>ASHapp is a mobile learning application that allows users to:</p><ul>
        <li>Create and manage learning collections and concepts</li>
        <li>Use AI-powered features to generate learning content</li>
        <li>Track learning progress and participate in challenges</li>
        <li>Access different subscription tiers with varying features</li>
      </ul></div>
    <div class="doc-section"><h2>3. User Accounts</h2>
      <p>To use ASHapp, you must create an account by providing a valid email address. You are responsible for:</p><ul>
        <li><strong>Account Security:</strong> Keeping your login credentials secure and confidential</li>
        <li><strong>Account Activity:</strong> All activities performed under your account</li>
        <li><strong>Account Verification:</strong> Verifying your email address to activate your account</li>
        <li><strong>Account Deletion:</strong> You may delete your account at any time, which will permanently remove all your data</li>
      </ul></div>
    <div class="doc-section"><h2>4. User-Generated Content</h2>
      <p>You retain ownership of all content you create in ASHapp. By using our services, you:</p><ul>
        <li><strong>Grant License:</strong> Grant us a license to store, process, and display your content to provide our services</li>
        <li><strong>AI Processing:</strong> Consent to your learning materials being processed by Anthropic’s Claude and OpenAI’s services for AI-generated features, with content moderation filtering</li>
        <li><strong>OCR Processing:</strong> Consent to uploaded images being processed for OCR: printed text on our servers, and when you choose handwritten mode, via Google Gemini (no personal identifiers sent)</li>
        <li><strong>Data Storage:</strong> Consent to your content being stored on AWS cloud infrastructure</li>
        <li><strong>Content Responsibility:</strong> Are responsible for ensuring your content doesn't violate any laws or third-party rights</li>
        <li><strong>Content Removal:</strong> Can delete your content at any time, which will be permanently removed from our systems</li>
      </ul></div>
    <div class="doc-section"><h2>5. AI-Powered Features</h2>
      <p>ASHapp uses AI services from Anthropic, OpenAI, and Google (including Gemini for handwritten-note OCR) to provide enhanced learning features:</p><ul>
        <li><strong>AI Processing:</strong> When you use AI features, your learning materials are processed by Anthropic’s Claude models for generating learning collections and concepts, and by OpenAI’s services for image generation. All content is filtered through content moderation systems to prevent inappropriate content</li>
        <li><strong>OCR (printed and handwritten):</strong> When you use OCR to import notes from images, printed text is extracted on our servers. If you enable handwritten notes, images are sent to Google Gemini for text extraction. No personal identifiers are sent with your images for OCR. Google processes content under its own terms. After processing, source images are removed from our storage; we keep the extracted text and learning materials you create.</li>
        <li><strong>Voice mode (microphone and speech):</strong> Voice mode uses your microphone and may use on-device speech recognition (Apple/Google) or, when enabled on our servers, send a short audio clip to OpenAI for transcription. By using voice mode you consent to that processing as described in the Privacy Policy. The recognized text is shown so you can see what will be checked.</li>
        <li><strong>Data Sharing:</strong> Your content is shared with these services solely for providing AI-generated learning assistance and text extraction</li>
        <li><strong>Third-Party Terms:</strong> Use of AI features is also subject to Anthropic's, OpenAI's, and Google's terms of service and privacy policies where applicable</li>
        <li><strong>No Training Use:</strong> Under the applicable API and provider policies, your content is not used to train Anthropic, OpenAI, or Google models for these services in the way described in their documentation</li>
        <li><strong>AI Limitations:</strong> AI-generated content is for educational purposes only and should be verified for accuracy</li>
      </ul></div>
    <div class="doc-section"><h2>6. Data Storage and Security</h2>
      <p>Your data is stored and processed using industry-standard security measures:</p><ul>
        <li><strong>AWS Infrastructure:</strong> All data is stored on Amazon Web Services (AWS) cloud infrastructure</li>
        <li><strong>Data Encryption:</strong> Data is encrypted in transit and at rest using industry-standard protocols</li>
        <li><strong>EU Compliance:</strong> AWS infrastructure is located in the European Union to ensure GDPR compliance</li>
        <li><strong>Access Control:</strong> Strict access controls limit who can access your data</li>
        <li><strong>Reliable cloud storage:</strong> Your data is stored on AWS in the European Union using managed services (databases, authentication, and file storage) engineered for durability, redundancy, and high availability</li>
      </ul></div>
    <div class="doc-section"><h2>7. Acceptable Use</h2>
      <p>You agree not to use ASHapp to:</p><ul>
        <li><strong>Violate Laws:</strong> Use the service for any illegal or unauthorized purpose</li>
        <li><strong>Harm Others:</strong> Harass, abuse, or harm other users</li>
        <li><strong>Infringe Rights:</strong> Violate intellectual property rights or privacy of others</li>
        <li><strong>Misuse AI:</strong> Use AI features to generate harmful, misleading, or inappropriate content</li>
        <li><strong>Overload Systems:</strong> Attempt to overload or disrupt our services</li>
        <li><strong>Unauthorized Access:</strong> Attempt to gain unauthorized access to our systems or other users' accounts</li>
      </ul></div>
    <div class="doc-section"><h2>8. Subscriptions and Billing</h2><ul>
        <li>Subscription plans and one-time purchases are offered at the prices and billing periods shown in the app and on the store listing at the time of purchase. Prices may change; if they do, we will notify existing subscribers in advance and changes will apply at the next billing cycle.</li>
        <li>Billing, renewals, cancellations, and refunds are handled by the app store (e.g., Google Play). You can manage or cancel your subscription at any time in your store account settings; cancellation takes effect at the end of the current billing period.</li>
        <li>Free trials, if offered, convert to a paid subscription at the price shown unless you cancel before the trial ends.</li>
        <li>Applicable taxes and currency conversions may apply and are shown before you confirm purchase.</li>
        <li>If a payment fails or a subscription expires, access to paid features may be suspended until payment is successful or the plan is changed.</li>
      </ul></div>
    <div class="doc-section"><h2>9. Intellectual Property</h2>
      <h3>9.1 Our Rights</h3><ul>
        <li>The App and its original content are owned by ASHapp.</li>
        <li>Our trademarks, logos, and branding are protected.</li>
      </ul>
      <h3>9.2 Third-Party Rights</h3><ul>
        <li>The App may include third-party content and services</li>
        <li>Third-party content is subject to their respective licenses</li>
      </ul></div>
    <div class="doc-section"><h2>10. Privacy Data</h2><ul>
        <li>Your privacy is important to us</li>
        <li>Our Privacy Policy explains how we collect and use your data</li>
        <li><strong>Data Consent:</strong> Consent to our collection and use of your data for the following purposes:</li>
        <li><strong>Data Rights:</strong> You have the right to access, rectify, export, and object to certain types of processing of your personal data</li>
      </ul></div>
    <div class="doc-section"><h2>11. Disclaimers and Limitations</h2>
      <h3>11.1 Service Availability:</h3><ul>
        <li>The App is provided &quot;as is&quot; without warranties</li>
        <li>We do not guarantee uninterrupted or error-free service</li>
        <li>We may modify or discontinue features at any time</li>
      </ul>
      <h3>11.2 Limitation of Liability:</h3><ul>
        <li>We are not liable for indirect, incidental, or consequential damages</li>
        <li>Our total liability is limited to the amount you paid for the service</li>
      </ul></div>
    <div class="doc-section"><h2>12. Termination</h2>
      <h3>12.1 Termination by You:</h3><ul>
        <li>You may delete your account at any time, which will permanently remove all your data</li>
        <li>Account deletion is permanent and irreversible</li>
      </ul>
      <h3>12.2 Termination by Us</h3><ul>
        <li>We may terminate or suspend your account for Terms violations</li>
        <li>We will provide reasonable notice unless immediate action is required</li>
      </ul></div>
    <div class="doc-section"><h2>13. Changes to Terms</h2><ul>
        <li>We may update these Terms from time to time</li>
        <li>We will notify you of significant changes</li>
        <li>Continued use after changes constitutes acceptance</li>
      </ul></div>
    <div class="doc-section"><h2>14. Governing Law</h2><ul>
        <li>These Terms are governed by Polish law.</li>
        <li>Any disputes will be resolved in Polish courts.</li>
        <li>EU consumer protection laws may apply</li>
      </ul></div>
    <div class="doc-section"><h2>15. Contact Information</h2>
      <p>For questions about these Terms, please contact us:</p>
      <p><a class="btn btn-primary" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;" href="mailto:privacy@ashapp.pl">privacy@ashapp.pl</a></p></div>
    <div class="doc-section"><h2>16. Severability</h2>
      <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p></div>
  `;
}

