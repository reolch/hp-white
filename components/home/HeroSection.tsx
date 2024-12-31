"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

interface Slide {
  id: number;
  image: string;
  caption_h1: string;
  caption_p1: string;
  caption_p2: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero/slide1.jpg',
    caption_h1: 'white',
    caption_p1: 'パーソナルトレーニング × 痩身エステ × 整体院',
    caption_p2: '理想のカラダはジブンでつくる'
  },
  {
    id: 2,
    image: '/images/hero/slide2.jpg',
    caption_h1: 'white',
    caption_p1: 'パーソナルトレーニング × 痩身エステ × 整体院',
    caption_p2: 'ひとつの場所で完結する'
  },
  {
    id: 3,
    image: '/images/hero/slide3.jpg',
    caption_h1: 'white',
    caption_p1: 'パーソナルトレーニング × 痩身エステ × 整体院',
    caption_p2: '宮崎初のハイブリッドサロン'
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.slide}>
        <Image
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          fill
          priority
          quality={100}
          className={styles.slideImage}
        />
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