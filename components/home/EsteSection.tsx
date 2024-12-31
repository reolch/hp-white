"use client";

import React from 'react';
import styles from './EsteSection.module.css';
import commonStyles from '../../styles/common.module.css';

const EsteSection = () => {
  return (
    <section className={`${styles.este} ${commonStyles.section}`}>
      <div className={commonStyles.sectionInner}>
        <h2 className={`${commonStyles.sectionTitle} ${commonStyles.esteTitle}`}>
          エステ
        </h2>
        <div className={commonStyles.cardGrid}>
          <div className={commonStyles.card}>
            <img src="slide1.jpg" alt="脂肪燃焼痩身マシン" className={commonStyles.cardImage} />
            <h3 className={commonStyles.cardTitle}>脂肪燃焼痩身マシン</h3>
            <p className={commonStyles.cardDescription}>
              熱の伝わりがはやいバイポーラ式ラジオ波を採用することで、短時間で頑固な冷え切った脂肪を芯までほぐし温めることができます。
              また、身体だけではなくお顔も独自の美肌機能、青色LEDライトでお肌をキュッと引き締めます。
              脂肪燃焼ホルモンであるリパーゼを活性化させ中性脂肪を遊離脂肪酸に分解することで、ダイエットをより効率よく進めることができます。
            </p>
          </div>
          <div className={commonStyles.card}>
            <img src="slide2.jpg" alt="有酸素運動" className={commonStyles.cardImage} />
            <h3 className={commonStyles.cardTitle}>リンパドレナージュ</h3>
            <p className={commonStyles.cardDescription}>
              脂肪燃焼痩身マシンでほぐした後に、流れやすくなったリンパ液や老廃物を、オイルを使ったハンドマッサージでアプローチすることにより、施術箇所の老廃物を流し、脂肪燃焼を促します。
              ただのマッサージではなく、国家資格保有者が監修するリンパドレナージュを行うことで、あなたの身体や体質に合わせた施術と至高の時間をお楽しみくださいませ。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsteSection;
