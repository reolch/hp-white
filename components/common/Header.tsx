"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        <Link href="/" className={styles.logoLink}>
          <Image 
            src="/images/logo/logo.svg" 
            alt="WHITE" 
            width={120}
            height={40}
            priority
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
          <li><Link href="/about">About</Link></li>
          <li className={styles.serviceDropdown}>
            <Link href="" className={styles.serviceLink}>
              サービス <span className={styles.dropdownArrow}>▼</span>
            </Link>
            <div className={styles.dropdownMenu}>
              <ul>
                <li>
                  <Link href="/training">
                    パーソナルトレーニング
                  </Link>
                </li>
                <li>
                  <Link href="/este">
                    痩身エステ
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li><Link href="/price">料金</Link></li>
          <li><Link href="/contact">お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;