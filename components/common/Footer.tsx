"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterProps {
  // 必要に応じてpropsの型を定義
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>white</h2>
          <p className={styles.address}>
          〒880-0055<br />
          宮崎県宮崎市南花ケ島町１３２−１ 川村ビル １F
          </p>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navColumn}>
            <h3 className={styles.navTitle}>Menu</h3>
            <ul className={styles.navList}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/training">Training</Link></li>
              <li><Link href="/este">Este</Link></li>
            </ul>
          </div>

          <div className={styles.navColumn}>
            <h3 className={styles.navTitle}>Contact</h3>
            <ul className={styles.navList}>
              <li><Link href="/contact">お問い合わせ</Link></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>&copy; 2024 white All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
