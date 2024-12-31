"use client";

import React from 'react';
import styles from './AboutSection.module.css';
import commonStyles from '../../styles/common.module.css';

interface AboutSectionProps {
  // 必要に応じてpropsの型を定義
}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className={`${styles.about} ${commonStyles.section}`}>
      <div className={commonStyles.sectionInner}>
        <h2 className={`${commonStyles.sectionTitle} ${commonStyles.aboutTitle}`}>
          私たちについて
        </h2>
        <div className={styles.aboutContent}>
          <p className={`${styles.aboutDescription} noto-serif-jp-regular`}>
            whiteは宮崎初、<br />
            『パーソナルトレーニング』『痩身エステ』『整体院』を組み合わせた<br />
            ひとつの場所で完結する痩身エステサロンです。
          </p>
          <p className={`${styles.aboutDescription} noto-serif-jp-regular`}>
            お客様一人ひとりの目標や目的、運動レベルに合わせた<br />
            トレーニング指導、骨盤矯正、痩身エステのサービス、<br />
            至高の時間を提供いたします。<br />
            お客様が美を追求できる空間を創ります。
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
