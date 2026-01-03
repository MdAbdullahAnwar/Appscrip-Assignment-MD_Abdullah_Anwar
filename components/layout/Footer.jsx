"use client";
import { useState } from "react";
import { Instagram, Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [email, setEmail] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing:", email);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.topSection}>
          <div className={styles.newsletter}>
            <h3 className={styles.sectionTitle}>BE THE FIRST TO KNOW</h3>
            <p className={styles.description}>
              Sign up for updates from mettā muse.
            </p>
            <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your e-mail..."
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.subscribeButton}>
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactBlock}>
              <h3 className={styles.sectionTitle}>CONTACT US</h3>
              <div className={styles.contactDetails}>
                <p className={styles.contactText}>+44 221 133 5360</p>
                <span>◆</span>
                <p className={styles.contactText}>customercare@mettamuse.com</p>
              </div>
            </div>

            <div className={styles.currencyBlock}>
              <h3 className={styles.sectionTitle}>CURRENCY</h3>
              <div className={styles.currencySelector}>
                <img
                  src="/usa.png"
                  alt="USA Flag"
                  className={styles.flagImage}
                />
                <span className={styles.currencyText}>◆ USD</span>
              </div>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomSection}>
          <div className={styles.linksColumn}>
            <h4 className={`${styles.linksTitle} ${styles.desktopOnly}`}>
              mettā muse
            </h4>
            <button
              className={`${styles.linksTitle} ${styles.mobileToggle}`}
              onClick={() => toggleSection("metta")}
            >
              <span>mettā muse</span>
              <span className={styles.toggleIcon}>
                {openSection === "metta" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
            </button>
            <ul
              className={`${styles.linksList} ${
                openSection === "metta" ? styles.open : ""
              }`}
            >
              <li>
                <a href="#" className={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Artisans
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Boutiques
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  EU Compliances Docs
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={`${styles.linksTitle} ${styles.desktopOnly}`}>
              QUICK LINKS
            </h4>
            <button
              className={`${styles.linksTitle} ${styles.mobileToggle}`}
              onClick={() => toggleSection("quick")}
            >
              <span>QUICK LINKS</span>
              <span className={styles.toggleIcon}>
                {openSection === "quick" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
            </button>
            <ul
              className={`${styles.linksList} ${
                openSection === "quick" ? styles.open : ""
              }`}
            >
              <li>
                <a href="#" className={styles.link}>
                  Orders & Shipping
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Join/Login as a Seller
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Payment & Pricing
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Return & Refunds
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={`${styles.linksTitle} ${styles.desktopOnly}`}>
              FOLLOW US
            </h4>
            <button
              className={`${styles.linksTitle} ${styles.mobileToggle}`}
              onClick={() => toggleSection("follow")}
            >
              <span>FOLLOW US</span>
              <span className={styles.toggleIcon}>
                {openSection === "follow" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
            </button>
            <div
              className={`${styles.socialContent} ${
                openSection === "follow" ? styles.open : ""
              }`}
            >
              <div className={styles.socialIcons}>
                <a
                  href="#"
                  className={styles.socialIcon}
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <h4 className={`${styles.linksTitle} ${styles.paymentTitle}`}>
              mettā muse ACCEPTS
            </h4>
            <div className={styles.paymentMethods}>
              <div className={styles.paymentIcon}>
                <img
                  src="/gpay.png"
                  alt="Google Pay"
                  className={styles.paymentImage}
                />
              </div>
              <div className={styles.paymentIcon}>
                <img
                  src="/mastercard.webp"
                  alt="Mastercard"
                  className={styles.paymentImage}
                />
              </div>
              <div className={styles.paymentIcon}>
                <img
                  src="/paypal.png"
                  alt="PayPal"
                  className={styles.paymentImage}
                />
              </div>
              <div className={styles.paymentIcon}>
                <img
                  src="/applepay.png"
                  alt="Apple Pay"
                  className={styles.paymentImage}
                />
              </div>
              <div className={styles.paymentIcon}>
                <img
                  src="/shoppay.png"
                  alt="Shop Pay"
                  className={styles.paymentImage}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
