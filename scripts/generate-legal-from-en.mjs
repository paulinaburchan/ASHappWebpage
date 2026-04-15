/**
 * Generates legal doc HTML snippets for docs/script.js from ASHapp enEN.json.
 * Run: node scripts/generate-legal-from-en.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..', '..');
const enPath = path.join(root, 'ASHapp-frontend', 'localization', 'enEN.json');
const j = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const p = j.privacyPolicy;
const t = j.termsOfService;

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function li(label, text) {
  return `<li><strong>${escHtml(label)}</strong> ${escHtml(text)}</li>`;
}

function pp(label, text) {
  return `<p><strong>${escHtml(label)}</strong> ${escHtml(text)}</p>`;
}

const privacyLines = [];
privacyLines.push(
  `    <p style="text-align: center; color: #666; font-style: italic; margin-bottom: 2rem;">Last updated: \${new Date().toLocaleDateString()}</p>`
);
privacyLines.push(`    <div class="doc-section"><h2>1. ${escHtml(p.introduction)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.introText)}</p>`);
privacyLines.push(`      <p>${escHtml(p.agreementText)}</p></div>`);
privacyLines.push(`    <div class="doc-section"><h2>2. ${escHtml(p.cameraScreenshotsTitle)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.cameraScreenshotsIntro)}</p>`);
privacyLines.push(`      ${pp(p.cameraScreenshotsPurposeLabel, p.cameraScreenshotsPurposeText)}`);
privacyLines.push(`      ${pp(p.cameraScreenshotsDataLabel, p.cameraScreenshotsDataText)}`);
privacyLines.push(`      ${pp(p.cameraScreenshotsStorageLabel, p.cameraScreenshotsStorageText)}`);
privacyLines.push(`      ${pp(p.cameraScreenshotsSharingLabel, p.cameraScreenshotsSharingText)}`);
privacyLines.push(`      ${pp(p.cameraScreenshotsRetentionLabel, p.cameraScreenshotsRetentionText)}`);
privacyLines.push(`      ${pp(p.cameraScreenshotsOptionalLabel, p.cameraScreenshotsOptionalText)}`);
privacyLines.push(`    </div>`);
privacyLines.push(`    <div class="doc-section"><h2>3. ${escHtml(p.voiceSectionTitle)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.voiceSectionIntro)}</p>`);
privacyLines.push(`      ${pp(p.voiceModePurposeLabel, p.voiceModePurposeText)}`);
privacyLines.push(`      ${pp(p.voiceModeLocalLabel, p.voiceModeLocalText)}`);
privacyLines.push(`      ${pp(p.voiceModeCloudLabel, p.voiceModeCloudText)}`);
privacyLines.push(`      ${pp(p.voiceModeRetentionLabel, p.voiceModeRetentionText)}`);
privacyLines.push(`      ${pp(p.voiceModeOptionalLabel, p.voiceModeOptionalText)}`);
privacyLines.push(`    </div>`);
privacyLines.push(`    <div class="doc-section"><h2>4. ${escHtml(p.dataWeCollect)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.dataWeCollectText)}</p><ul>`);
privacyLines.push(`        ${li(p.accountInfo, p.accountInfoText)}`);
privacyLines.push(`        ${li(p.userContent, p.userContentText)}`);
privacyLines.push(`        ${li(p.usageData, p.usageDataText)}`);
privacyLines.push(`        ${li(p.technicalData, p.technicalDataText)}`);
privacyLines.push(`      </ul></div>`);
privacyLines.push(`    <div class="doc-section"><h2>5. ${escHtml(p.howWeUse)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.howWeUseText)}</p><ul>`);
privacyLines.push(`        ${li(p.serviceProvision, p.serviceProvisionText)}`);
privacyLines.push(`        ${li(p.aiProcessing, p.aiProcessingText)}`);
privacyLines.push(`        ${li(p.imageProcessing, p.imageProcessingText)}`);
privacyLines.push(`        ${li(p.voiceProcessing, p.voiceProcessingText)}`);
privacyLines.push(`        ${li(p.dataStorage, p.dataStorageText)}`);
privacyLines.push(`        ${li(p.accountManagement, p.accountManagementText)}`);
privacyLines.push(`        ${li(p.improvement, p.improvementText)}`);
privacyLines.push(`      </ul></div>`);
privacyLines.push(`    <div class="doc-section"><h2>6. ${escHtml(p.legalBasis)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.legalBasisText)}</p><ul>`);
privacyLines.push(`        ${li(p.contract, p.contractText)}`);
privacyLines.push(`        ${li(p.legitimateInterest, p.legitimateInterestText)}`);
privacyLines.push(`        ${li(p.consent, p.consentText)}`);
privacyLines.push(`      </ul></div>`);
privacyLines.push(`    <div class="doc-section"><h2>7. ${escHtml(p.dataStorageProcessing)}</h2>`);
privacyLines.push(
  `      <p><strong>${escHtml(p.awsCloud)}</strong> ${escHtml(p.awsCloudText)}</p>`
);
privacyLines.push(
  `      <p><strong>${escHtml(p.openaiGpt)}</strong> ${escHtml(p.openaiGptText)}</p>`
);
privacyLines.push(
  `      <p><strong>${escHtml(p.geminiOcr)}</strong> ${escHtml(p.geminiOcrText)}</p>`
);
privacyLines.push(
  `      <p><strong>${escHtml(p.dataSecurity)}</strong> ${escHtml(p.dataSecurityText)}</p></div>`
);
privacyLines.push(`    <div class="doc-section"><h2>8. ${escHtml(p.thirdPartyServices)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.thirdPartyServicesText)}</p><ul>`);
privacyLines.push(`        ${li(p.aws, p.awsText)}`);
privacyLines.push(`        ${li(p.openai, p.openaiText)}`);
privacyLines.push(`        ${li(p.googleGemini, p.googleGeminiText)}`);
privacyLines.push(`      </ul>`);
privacyLines.push(`      <p>${escHtml(p.gdprCompliance)}</p></div>`);
privacyLines.push(`    <div class="doc-section"><h2>9. ${escHtml(p.dataRetention)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.dataRetentionText)}</p>`);
privacyLines.push(
  `      <p><strong>${escHtml(p.learningMaterials)}</strong> ${escHtml(p.learningMaterialsText)}</p>`
);
privacyLines.push(
  `      <p><strong>${escHtml(p.accountData)}</strong> ${escHtml(p.accountDataText)}</p>`
);
privacyLines.push(
  `      <p><strong>${escHtml(p.verificationCodes)}</strong> ${escHtml(p.verificationCodesText)}</p>`
);
privacyLines.push(
  `      <p><strong>${escHtml(p.systemLogs)}</strong> ${escHtml(p.systemLogsText)}</p>`
);
privacyLines.push(
  `      <p><strong>${escHtml(p.usageAnalytics)}</strong> ${escHtml(p.usageAnalyticsText)}</p></div>`
);
privacyLines.push(`    <div class="doc-section"><h2>10. ${escHtml(p.yourRights)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.yourRightsText)}</p><ul>`);
privacyLines.push(`        ${li(p.access, p.accessText)}`);
privacyLines.push(`        ${li(p.rectification, p.rectificationText)}`);
privacyLines.push(`        ${li(p.erasure, p.erasureText)}`);
privacyLines.push(`        ${li(p.portability, p.portabilityText)}`);
privacyLines.push(`        ${li(p.objection, p.objectionText)}`);
privacyLines.push(`      </ul></div>`);
privacyLines.push(`    <div class="doc-section"><h2>11. ${escHtml(p.internationalTransfers)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.internationalTransfersText)}</p></div>`);
privacyLines.push(`    <div class="doc-section"><h2>12. ${escHtml(p.childrensPrivacy)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.childrensPrivacyText)}</p></div>`);
privacyLines.push(`    <div class="doc-section"><h2>13. ${escHtml(p.policyChanges)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.policyChangesText)}</p></div>`);
privacyLines.push(`    <div class="doc-section"><h2>14. ${escHtml(p.contactUs)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.contactUsText)}</p>`);
privacyLines.push(
  `      <p><a class="btn btn-primary" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;" href="mailto:${escHtml(p.contactEmail)}">${escHtml(p.contactEmail)}</a></p>`
);
privacyLines.push(`      <p>${escHtml(p.responseTime)}</p></div>`);
privacyLines.push(`    <div class="doc-section"><h2>15. ${escHtml(p.supervisoryAuthority)}</h2>`);
privacyLines.push(`      <p>${escHtml(p.supervisoryAuthorityText)}</p></div>`);

const termsLines = [];
termsLines.push(
  `    <p style="text-align: center; color: #666; font-style: italic; margin-bottom: 2rem;">Last updated: \${new Date().toLocaleDateString()}</p>`
);
termsLines.push(`    <div class="doc-section"><h2>1. ${escHtml(t.acceptance)}</h2>`);
termsLines.push(`      <p>${escHtml(t.acceptanceText)}</p>`);
termsLines.push(`      <p>${escHtml(t.legalBinding)}</p></div>`);
termsLines.push(`    <div class="doc-section"><h2>2. ${escHtml(t.serviceDescription)}</h2>`);
termsLines.push(`      <p>${escHtml(t.serviceDescriptionText)}</p><ul>`);
termsLines.push(`        <li>${escHtml(t.createCollections)}</li>`);
termsLines.push(`        <li>${escHtml(t.aiFeatures)}</li>`);
termsLines.push(`        <li>${escHtml(t.trackProgress)}</li>`);
termsLines.push(`        <li>${escHtml(t.subscriptionTiers)}</li>`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>3. ${escHtml(t.userAccounts)}</h2>`);
termsLines.push(`      <p>${escHtml(t.userAccountsText)}</p><ul>`);
termsLines.push(`        ${li(t.accountSecurity, t.accountSecurityText)}`);
termsLines.push(`        ${li(t.accountActivity, t.accountActivityText)}`);
termsLines.push(`        ${li(t.accountVerification, t.accountVerificationText)}`);
termsLines.push(`        ${li(t.accountDeletion, t.accountDeletionText)}`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>4. ${escHtml(t.userGeneratedContent)}</h2>`);
termsLines.push(`      <p>${escHtml(t.userGeneratedContentText)}</p><ul>`);
termsLines.push(`        ${li(t.grantLicense, t.grantLicenseText)}`);
termsLines.push(`        ${li(t.aiProcessingConsent, t.aiProcessingConsentText)}`);
termsLines.push(`        ${li(t.ocrProcessingConsent, t.ocrProcessingConsentText)}`);
termsLines.push(`        ${li(t.dataStorageConsent, t.dataStorageConsentText)}`);
termsLines.push(`        ${li(t.contentResponsibility, t.contentResponsibilityText)}`);
termsLines.push(`        ${li(t.contentRemoval, t.contentRemovalText)}`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>5. ${escHtml(t.aiPoweredFeaturesSection)}</h2>`);
termsLines.push(`      <p>${escHtml(t.aiPoweredFeaturesSectionText)}</p><ul>`);
termsLines.push(`        ${li(t.aiProcessingTerms, t.aiProcessingTermsText)}`);
termsLines.push(`        ${li(t.geminiOcrTerms, t.geminiOcrTermsText)}`);
termsLines.push(`        ${li(t.voiceModeTerms, t.voiceModeTermsText)}`);
termsLines.push(`        ${li(t.dataSharing, t.dataSharingText)}`);
termsLines.push(`        ${li(t.openaiTerms, t.openaiTermsText)}`);
termsLines.push(`        ${li(t.noTrainingUse, t.noTrainingUseText)}`);
termsLines.push(`        ${li(t.aiLimitations, t.aiLimitationsText)}`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>6. ${escHtml(t.dataStorageSecuritySection)}</h2>`);
termsLines.push(`      <p>${escHtml(t.dataStorageSecuritySectionText)}</p><ul>`);
termsLines.push(`        ${li(t.awsInfrastructure, t.awsInfrastructureText)}`);
termsLines.push(`        ${li(t.dataEncryption, t.dataEncryptionText)}`);
termsLines.push(`        ${li(t.euCompliance, t.euComplianceText)}`);
termsLines.push(`        ${li(t.accessControl, t.accessControlText)}`);
termsLines.push(`        ${li(t.reliableStorage, t.reliableStorageText)}`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>7. ${escHtml(t.acceptableUse)}</h2>`);
termsLines.push(`      <p>${escHtml(t.acceptableUseText)}</p><ul>`);
termsLines.push(`        ${li(t.violateLaws, t.violateLawsText)}`);
termsLines.push(`        ${li(t.harmOthers, t.harmOthersText)}`);
termsLines.push(`        ${li(t.infringeRights, t.infringeRightsText)}`);
termsLines.push(`        ${li(t.misuseAI, t.misuseAIText)}`);
termsLines.push(`        ${li(t.overloadSystems, t.overloadSystemsText)}`);
termsLines.push(`        ${li(t.unauthorizedAccess, t.unauthorizedAccessText)}`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>8. ${escHtml(t.subscriptionsBilling)}</h2><ul>`);
termsLines.push(`        <li>${escHtml(t.subscriptionsBillingText)}</li>`);
termsLines.push(`        <li>${escHtml(t.billingManagement)}</li>`);
termsLines.push(`        <li>${escHtml(t.freeTrials)}</li>`);
termsLines.push(`        <li>${escHtml(t.taxes)}</li>`);
termsLines.push(`        <li>${escHtml(t.paymentFailure)}</li>`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>9. ${escHtml(t.intellectualProperty)}</h2>`);
termsLines.push(`      <h3>9.1 ${escHtml(t.ourRights)}</h3><ul>`);
termsLines.push(`        <li>${escHtml(t.ourRightsText)}</li>`);
termsLines.push(`        <li>${escHtml(t.trademarks)}</li>`);
termsLines.push(`      </ul>`);
termsLines.push(`      <h3>9.2 ${escHtml(t.thirdPartyRights)}</h3><ul>`);
termsLines.push(`        <li>${escHtml(t.thirdPartyContent)}</li>`);
termsLines.push(`        <li>${escHtml(t.thirdPartyLicenses)}</li>`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>10. ${escHtml(t.privacyData)}</h2><ul>`);
termsLines.push(`        <li>${escHtml(t.privacyImportant)}</li>`);
termsLines.push(`        <li>${escHtml(t.privacyPolicyRef)}</li>`);
termsLines.push(
  `        <li><strong>${escHtml(t.dataConsent)}</strong> ${escHtml(t.dataConsentText)}</li>`
);
termsLines.push(
  `        <li><strong>${escHtml(t.dataRights)}</strong> ${escHtml(t.dataRightsText)}</li>`
);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>11. ${escHtml(t.disclaimersLimitations)}</h2>`);
termsLines.push(`      <h3>11.1 ${escHtml(t.serviceAvailability)}</h3><ul>`);
termsLines.push(`        <li>${escHtml(t.asIsService)}</li>`);
termsLines.push(`        <li>${escHtml(t.noGuarantee)}</li>`);
termsLines.push(`        <li>${escHtml(t.modifyService)}</li>`);
termsLines.push(`      </ul>`);
termsLines.push(`      <h3>11.2 ${escHtml(t.limitationLiability)}</h3><ul>`);
termsLines.push(`        <li>${escHtml(t.noIndirectLiability)}</li>`);
termsLines.push(`        <li>${escHtml(t.totalLiability)}</li>`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>12. ${escHtml(t.termination)}</h2>`);
termsLines.push(`      <h3>12.1 ${escHtml(t.terminationByYou)}</h3><ul>`);
termsLines.push(`        <li>${escHtml(t.deleteAccount)}</li>`);
termsLines.push(`        <li>${escHtml(t.permanentDeletion)}</li>`);
termsLines.push(`      </ul>`);
termsLines.push(`      <h3>12.2 ${escHtml(t.terminationByUs)}</h3><ul>`);
termsLines.push(`        <li>${escHtml(t.terminateViolation)}</li>`);
termsLines.push(`        <li>${escHtml(t.reasonableNotice)}</li>`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>13. ${escHtml(t.termsChanges)}</h2><ul>`);
termsLines.push(`        <li>${escHtml(t.updateTerms)}</li>`);
termsLines.push(`        <li>${escHtml(t.notifyChanges)}</li>`);
termsLines.push(`        <li>${escHtml(t.continuedUse)}</li>`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>14. ${escHtml(t.governingLaw)}</h2><ul>`);
termsLines.push(`        <li>${escHtml(t.polishLaw)}</li>`);
termsLines.push(`        <li>${escHtml(t.polishCourts)}</li>`);
termsLines.push(`        <li>${escHtml(t.euConsumerLaws)}</li>`);
termsLines.push(`      </ul></div>`);
termsLines.push(`    <div class="doc-section"><h2>15. ${escHtml(t.contactInfo)}</h2>`);
termsLines.push(`      <p>${escHtml(t.contactUsText)}</p>`);
termsLines.push(
  `      <p><a class="btn btn-primary" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;" href="mailto:${escHtml(t.contactEmail)}">${escHtml(t.contactEmail)}</a></p></div>`
);
termsLines.push(`    <div class="doc-section"><h2>16. ${escHtml(t.severability)}</h2>`);
termsLines.push(`      <p>${escHtml(t.severabilityText)}</p></div>`);

const scriptPath = path.join(__dirname, '..', 'docs', 'script.js');
let script = fs.readFileSync(scriptPath, 'utf8');
const start =
  '// Full Privacy Policy and Terms of Service content from the app';
const startIdx = script.indexOf(start);
if (startIdx === -1) {
  console.error('Could not find start marker in script.js');
  process.exit(1);
}

const privacyBlock = `// Full Privacy Policy and Terms of Service content from the app (generated from ASHapp-frontend/localization/enEN.json — run: node scripts/generate-legal-from-en.mjs)
const privacy = document.getElementById('privacy-content');
if (privacy) {
  privacy.innerHTML = \`
${privacyLines.join('\n')}
  \`;
}

`;

const termsBlock = `const terms = document.getElementById('terms-content');
if (terms) {
  terms.innerHTML = \`
${termsLines.join('\n')}
  \`;
}
`;

const before = script.slice(0, startIdx);
fs.writeFileSync(scriptPath, before + privacyBlock + termsBlock + '\n');
console.log('Updated docs/script.js from enEN.json');
