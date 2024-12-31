"use client";

import React from 'react';
import styles from './EsteSection.module.css';

const EsteSection = () => {
  return (
    <section className={styles.eteSection}>
      <h2 className={styles.sectionTitle}>痩身エステ</h2>
      <div className={styles.esteContent}>
        <div className={styles.esteCard}>
          <img src="slide1.jpg" alt="脂肪燃焼痩身マシン" className={styles.esteImage} />
          <strong className={styles.esteTitle}>脂肪燃焼痩身マシン</strong>
          <p className={styles.esteDescription}>
          熱の伝わりがはやいバイポーラ式ラジオ波を採用することで、短時間で頑固な冷え切った脂肪を芯までほぐし温めることができます。<br />
          また、身体だけではなくお顔も独自の美肌機能、青色LEDライトでお肌をキュッと引き締めます。 <br />
          脂肪燃焼ホルモンであるリパーゼを活性化させ中性脂肪を遊離脂肪酸に分解することで、ダイエットをより効率よく進めることができます。<br />
          </p>
        </div>

        <div className={styles.esteCard}>
          <img src="slide2.jpg" alt="有酸素運動" className={styles.esteImage} />
          <strong className={styles.esteTitle}>リンパドレナージュ</strong>
          <p className={styles.esteDescription}>
          脂肪燃焼痩身マシンでほぐした後に、流れやすくなったリンパ液や老廃物を、オイルを使ったハンドマッサージでアプローチすることにより、施術箇所の老廃物を流し、脂肪燃焼を促します。
          ただのマッサージではなく、国家資格保有者が監修するリンパドレナージュを行うことで、あなたの身体や体質に合わせた施術と至高の時間をお楽しみくださいませ。
          </p>
        </div>
      </div>
    </section>
  );
};

export default EsteSection;
