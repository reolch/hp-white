"use client";
import React, { useState } from 'react';
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
        <img 
          src="header_logo.svg" 
          alt="Logo" 
          className={styles.logo} 
        />
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
          <li><a href="#about">About</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#plans">Price</a></li>
          <li><a href="#stores">店舗一覧</a></li>
          <li><a href="#trials">体験レッスン</a></li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;