"use client";

import React from 'react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  // 必要に応じてpropsの型を定義
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className={styles.hero}>
      {/* ... */}
    </section>
  );
};

export default HeroSection;
