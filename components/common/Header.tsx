"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles['header-top']}>
        <Link href="/">
          <img 
            src="header_logo.svg" 
            alt="Logo" 
            className={styles.logo} 
          />
        </Link>
        <button 
          className={styles['menu-toggle']} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
      </div>
      <nav 
        className={`${styles['header-bottom']} ${
          isMenuOpen ? styles.open : ''
        } noto-serif-jp-bold`}
      >
        <ul>
          <li><Link href="#about">About</Link></li>
          <li className={styles.serviceDropdown}>
            <Link href="#service" className={styles.serviceLink}>
              サービス <span className={styles.dropdownArrow}>▼</span>
            </Link>
            <div className={styles.dropdownMenu}>
              <ul>
                <li>
                  <Link href="#training">
                    パーソナルトレーニング
                  </Link>
                </li>
                <li>
                  <Link href="#esthetic">
                    痩身エステ
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li><Link href="#plans">料金</Link></li>
          <li><Link href="#contact">お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;