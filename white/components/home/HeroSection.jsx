"use client";

import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const slides = [
  {
    id: 1,
    image: 'slide1.jpg',
    caption_h1: 'white',
    caption_p1: 'パーソナルトレーニング × 痩身エステ × 整体院',
    caption_p2: '理想のカラダはジブンでつくる'
  },
  {
    id: 2,
    image: 'slide2.jpg',
    caption_h1: 'white',
    caption_p1: 'パーソナルトレーニング × 痩身エステ × 整体院',
    caption_p2: 'ひとつの場所で完結する'
  },
  {
    id: 3,
    image: 'slide3.jpg',
    caption_h1: 'white',
    caption_p1: 'パーソナルトレーニング × 痩身エステ × 整体院',
    caption_p2: '宮崎初のハイブリッドサロン'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className={styles.captionBg}>
            <div className={styles.caption}>
            <h1>{slides[currentSlide].caption_h1}</h1>
            <p>{slides[currentSlide].caption_p1}</p>
            <p>{slides[currentSlide].caption_p2}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
