'use client';
import { useState } from "react";
import { Heart, ShoppingCart, User, Search, Menu, X, Sparkles } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topItem}>
            <Sparkles size={12} className={styles.topIcon} />
            <span>Lorem ipsum dolor</span>
          </div>
          <div className={styles.topItem}>
            <Sparkles size={12} className={styles.topIcon} />
            <span>Lorem ipsum dolor</span>
          </div>
          <div className={styles.topItem}>
            <Sparkles size={12} className={styles.topIcon} />
            <span>Lorem ipsum dolor</span>
          </div>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.headerTopRow}>
          <div className={styles.leftSection}>
            <button
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <img src="/Logo.png" alt="Logo Icon" className={styles.logoIcon} />
          </div>

          <div className={styles.logoContainer}>
            <h1 className={styles.logoText}>LOGO</h1>
          </div>

          <div className={styles.iconGroup}>
            <Search size={18} />
            <Heart size={18} />
            <ShoppingCart size={18} />
            <User size={18} />
            <select className={styles.languageSelect}>
              <option>ENG</option>
            </select>
          </div>
        </div>

        <nav className={styles.desktopNav}>
          <a href="#shop">SHOP</a>
          <a href="#skills">SKILLS</a>
          <a href="#stories">STORIES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT US</a>
        </nav>

        {mobileMenuOpen && (
          <nav className={styles.mobileNav}>
            <a href="#shop">SHOP</a>
            <a href="#skills">SKILLS</a>
            <a href="#stories">STORIES</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT US</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
