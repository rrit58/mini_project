import React from 'react';
import '../assets/LegalPages.css'; 

const Cookie = () => {
  return (
    <div className="legal-container">
      <h1 className="legal-title">Cookie Policy for Care Connect</h1>
      <p className="legal-last-updated"><strong className="legal-strong">Last Updated:</strong> March 3, 2026</p>

      <p className="legal-paragraph">This Cookie Policy explains how Care Connect uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>

      <h2 className="legal-heading">1. What are Cookies?</h2>
      <p className="legal-paragraph">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

      <h2 className="legal-heading">2. Why Do We Use Cookies?</h2>
      <p className="legal-paragraph">We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Care Connect platform to operate securely, especially when handling user accounts and appointment bookings. We refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our online properties.</p>

      <h2 className="legal-heading">3. Types of Cookies We Use</h2>
      <ul className="legal-list">
        <li>
          <strong className="legal-strong">Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website. They include, for example, cookies that enable you to log into secure areas of Care Connect and book medical appointments safely.
        </li>
        <li>
          <strong className="legal-strong">Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality (like remembering your preferred location or recent searches) may become unavailable.
        </li>
        <li>
          <strong className="legal-strong">Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used, how effective our platform is, or to help us customize our website for you.
        </li>
      </ul>

      <h2 className="legal-heading">4. Patient Privacy & Tracking</h2>
      <p className="legal-paragraph">Because Care Connect deals with sensitive health-related appointments, <strong className="legal-strong">we do not use advertising cookies to track your medical inquiries across the internet</strong>. The data collected via cookies is strictly used to facilitate your appointments, keep your session secure, and improve our website's technical performance.</p>

      <h2 className="legal-heading">5. How Can You Control Cookies?</h2>
      <p className="legal-paragraph">You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website (like remaining logged into your account) may be restricted.</p>
      <p className="legal-paragraph">As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.</p>

      <h2 className="legal-heading">6. Updates to This Policy</h2>
      <p className="legal-paragraph">We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>

      <h2 className="legal-heading">7. Contact Us</h2>
      <p className="legal-paragraph">If you have any questions about our use of cookies or other technologies, please email us at <strong className="legal-strong">privacy@careconnect.com</strong>.</p>
    </div>
  );
};

export default Cookie;