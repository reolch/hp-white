"use client";

import React from 'react';
import styles from './TrainingSection.module.css'; // CSS Modules をインポート
import fontStyles from '../common/Font.module.css'; // フォントスタイルのモジュールCSSをインポート

const TrainingSection = () => {
  return (
    <section className={styles.trainingSection}>
      <h2 className={`${styles.sectionTitle} ${fontStyles.cormorantGaramondBold}`}>痩身エステ付きパーソナルジム</h2>
      <div className={styles.trainingContent}>
        <div className={styles.trainingCard}>
          <img src="slide1.jpg" alt="ウェイトトレーニング" className={styles.trainingImage} />
          <strong className={`${styles.trainingTitle} ${fontStyles.notoSansJpBold}`}>ウェイトトレーニング</strong>
          <p className={`${styles.trainingDescription} ${fontStyles.notoSansJpRegular}`}>
            理想の身体をつくる為には、重りを使ったウェイトトレーニングが最も効果的です。<br />
            下半身を中心としたトレーニングを取り入れ、大筋群を効果的に鍛えることで、基礎代謝が上がり、痩せやすい身体を手に入れることができます。
          </p>
        </div>

        <div className={styles.trainingCard}>
          <img src="slide2.jpg" alt="有酸素運動" className={styles.trainingImage} />
          <strong className={`${styles.trainingTitle} ${fontStyles.notoSansJpBold}`}>有酸素運動</strong>
          <p className={`${styles.trainingDescription} ${fontStyles.notoSansJpRegular}`}>
            地方在住の方は、普段の生活から車移動が多く、有酸素運動をする機会が少ないため、都市部在住の方に比べて一日の消費カロリーが少ない傾向にあります。
            当サロンでは、有酸素運動を取り入れることで、体脂肪率を効率よく落とし、日常生活で疲労しにくいスタイリッシュな身体をつくります。
          </p>
        </div>

        <div className={styles.trainingCard}>
          <img src="slide3.jpg" alt="HIIT" className={styles.trainingImage} />
          <strong className={`${styles.trainingTitle} ${fontStyles.notoSansJpBold}`}>HIIT</strong>
          <p className={`${styles.trainingDescription} ${fontStyles.notoSansJpRegular}`}>
            1セット20〜30秒のインターバルトレーニングを約2分から4分間連続して行うことで、従来の有酸素運動の約9倍もの脂肪燃焼効果を得ることができます。
            また、体内のミトコンドリアの量が増え、基礎代謝が上がることで太りづらい身体を作り上げることができます。
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
