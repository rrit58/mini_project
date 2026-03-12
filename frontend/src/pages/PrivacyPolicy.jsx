import React from 'react';
import '../assets/LegalPages.css'; 

const PrivacyPolicy = () => {
  return (
    <div className="legal-container">
      <h1 className="legal-title">Privacy Policy for Care Connect</h1>
      <p className="legal-last-updated"><strong className="legal-strong">Last Updated:</strong> March 3, 2026</p>

      <p className="legal-paragraph">Welcome to Care Connect. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our doctor appointment scheduling services.</p>

      <h2 className="legal-heading">1. Information We Collect</h2>
      <p className="legal-paragraph">We collect personal information that you voluntarily provide to us when registering on Care Connect, expressing an interest in obtaining information about doctors, or booking an appointment. This may include:</p>
      <ul className="legal-list">
        <li><strong className="legal-strong">Personal Identifiers:</strong> Name, date of birth, gender, email address, phone number, and mailing address.</li>
        <li><strong className="legal-strong">Health Information:</strong> Reason for visit, symptoms, past medical history, insurance details, and any notes you provide for the doctor.</li>
        <li><strong className="legal-strong">Account Information:</strong> Usernames, passwords, and similar security information used to create your account.</li>
        <li><strong className="legal-strong">Automatically Collected Data:</strong> IP address, browser type, device characteristics, operating system, and data about how you interact with our website (via cookies and similar technologies).</li>
      </ul>

      <h2 className="legal-heading">2. How We Use Your Information</h2>
      <p className="legal-paragraph">We use personal information collected via Care Connect for a variety of business purposes described below:</p>
      <ul className="legal-list">
        <li><strong className="legal-strong">To Facilitate Appointments:</strong> Sending your details to the respective doctors or clinics to secure your booking.</li>
        <li><strong className="legal-strong">Communication:</strong> Sending appointment confirmations, reminders, cancellations, and updates via email or SMS.</li>
        <li><strong className="legal-strong">Account Management:</strong> To create, maintain, and secure your user account.</li>
        <li><strong className="legal-strong">Improving Our Service:</strong> To analyze user behavior to improve website functionality and user experience.</li>
      </ul>

      <h2 className="legal-heading">3. How We Share Your Information</h2>
      <p className="legal-paragraph">We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share data with:</p>
      <ul className="legal-list">
        <li><strong className="legal-strong">Healthcare Providers:</strong> Doctors, clinics, and medical staff you choose to book appointments with.</li>
        <li><strong className="legal-strong">Service Providers:</strong> Third-party vendors who perform services for us (e.g., payment processing, SMS delivery, cloud hosting).</li>
        <li><strong className="legal-strong">Legal Obligations:</strong> When required by law, governmental requests, or a judicial proceeding.</li>
      </ul>

      <h2 className="legal-heading">4. Data Security</h2>
      <p className="legal-paragraph">We implement appropriate technical and organizational security measures designed to protect the security of any personal and sensitive health information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

      <h2 className="legal-heading">5. Your Privacy Rights</h2>
      <p className="legal-paragraph">Depending on your location, you may have rights regarding your personal information, including the right to:</p>
      <ul className="legal-list">
        <li>Access and obtain a copy of your personal information.</li>
        <li>Request rectification of incorrect data.</li>
        <li>Request deletion of your personal information.</li>
        <li>Opt-out of marketing communications.</li>
      </ul>

      <h2 className="legal-heading">6. Changes to This Privacy Policy</h2>
      <p className="legal-paragraph">We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>

      <h2 className="legal-heading">7. Contact Us</h2>
      <p className="legal-paragraph">If you have questions or comments about this notice, you may email us at <strong className="legal-strong">privacy@careconnect.com</strong> or contact us by post at:</p>
      <address className="legal-address">
        Care Connect Inc.<br />
        101, CareConnect Tower,<br />
        Bandra Kurla Complex (BKC),<br />
        Mumbai, Maharashtra 400051,<br />
        India
      </address>
    </div>
  );
};

export default PrivacyPolicy;