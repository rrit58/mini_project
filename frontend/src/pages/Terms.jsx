import React from 'react';
import '../assets/LegalPages.css'; // Update this path if needed

const Terms = () => {
  return (
    <div className="legal-container">
      <h1 className="legal-title">Terms of Service for Care Connect</h1>
      <p className="legal-last-updated"><strong className="legal-strong">Last Updated:</strong> March 3, 2026</p>

      <p className="legal-paragraph">Welcome to Care Connect. These Terms of Service ("Terms") govern your access to and use of the Care Connect website and appointment scheduling services. By using our platform, you agree to comply with and be bound by these Terms.</p>

      <h2 className="legal-heading">1. Description of Service</h2>
      <p className="legal-paragraph">Care Connect is an online platform that facilitates the scheduling of medical appointments between patients and independent healthcare providers (doctors, clinics, etc.). <strong className="legal-strong">Care Connect is not a healthcare provider</strong> and does not provide medical advice, diagnosis, or treatment.</p>

      <h2 className="legal-heading">2. Medical Emergency Disclaimer</h2>
      <p className="legal-paragraph"><strong className="legal-strong" style={{ color: '#dc2626' }}>DO NOT USE THIS PLATFORM FOR MEDICAL EMERGENCIES.</strong> If you are experiencing a medical emergency, please call your local emergency services (e.g., 911, 112, 108) or go to the nearest hospital or emergency room immediately.</p>

      <h2 className="legal-heading">3. User Responsibilities</h2>
      <p className="legal-paragraph">By creating an account and using Care Connect, you agree to:</p>
      <ul className="legal-list">
        <li>Provide accurate, current, and complete information during registration and booking.</li>
        <li>Maintain the security and confidentiality of your account credentials.</li>
        <li>Use the platform solely for lawful purposes and in accordance with these Terms.</li>
        <li>Notify us immediately of any unauthorized use of your account.</li>
      </ul>

      <h2 className="legal-heading">4. Booking, Rescheduling, and Cancellations</h2>
      <p className="legal-paragraph">When you book an appointment through Care Connect, you are committing to a scheduled time with a healthcare provider. We ask that you respect their time:</p>
      <ul className="legal-list">
        <li><strong className="legal-strong">Cancellations:</strong> If you need to cancel or reschedule, please do so at least 24 hours in advance through the platform to avoid potential cancellation fees levied by the doctor's clinic.</li>
        <li><strong className="legal-strong">No-Shows:</strong> Repeated failure to attend scheduled appointments ("no-shows") may result in the suspension or termination of your Care Connect account.</li>
      </ul>

      <h2 className="legal-heading">5. Relationship with Healthcare Providers</h2>
      <p className="legal-paragraph">The doctors and clinics listed on Care Connect are independent professionals. We do not guarantee the availability, quality, or outcome of any medical services you receive. Any disputes regarding medical care, billing for medical services, or patient-doctor relationships are strictly between you and the healthcare provider.</p>

      <h2 className="legal-heading">6. Intellectual Property</h2>
      <p className="legal-paragraph">All content, features, and functionality on the Care Connect website—including text, graphics, logos, and software—are the exclusive property of Care Connect or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p>

      <h2 className="legal-heading">7. Limitation of Liability</h2>
      <p className="legal-paragraph">To the fullest extent permitted by law, Care Connect shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including any medical complications, loss of profits, data, or goodwill, arising out of your use of or inability to use our platform.</p>

      <h2 className="legal-heading">8. Termination</h2>
      <p className="legal-paragraph">We reserve the right to suspend or terminate your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>

      <h2 className="legal-heading">9. Contact Information</h2>
      <p className="legal-paragraph">If you have any questions or concerns regarding these Terms, please contact us at:</p>
      <address className="legal-address">
        <strong className="legal-strong">Email:</strong> legal@careconnect.com<br /><br />
        <strong className="legal-strong">Address:</strong><br />
        Care Connect Inc.<br />
        101, CareConnect Tower,<br />
        Bandra Kurla Complex (BKC),<br />
        Mumbai, Maharashtra 400051,<br />
        India
      </address>
    </div>
  );
};

export default Terms;