"use client";

import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  // 必要に応じてpropsの型を定義
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      {/* ... */}
    </header>
  );
};

export default Header;
