"use client";

import React from 'react';
import Image from 'next/image';
import styles from './TrainingSection.module.css';
import commonStyles from '../../styles/common.module.css';

interface TrainingSectionProps {
  // 必要に応じてpropsの型を定義
}

const TrainingSection: React.FC<TrainingSectionProps> = () => {
  return (
    <section className={`${styles.training} ${commonStyles.section}`}>
      <div className={commonStyles.sectionInner}>
        <h2 className={`${commonStyles.sectionTitle} ${commonStyles.trainingTitle}`}>
          トレーニング
        </h2>
        <div className={commonStyles.cardGrid}>
          <div className={commonStyles.card}>
            <div className={commonStyles.cardImageWrapper}>
              <Image
                src="/images/hero/slide1.jpg"
                alt="ウェイトトレーニング"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={commonStyles.cardImage}
              />
            </div>
            <h3 className={commonStyles.cardTitle}>ウェイトトレーニング</h3>
            <p className={commonStyles.cardDescription}>
              理想の身体をつくる為には、重りを使ったウェイトトレーニングが最も効果的です。
              下半身を中心としたトレーニングを取り入れ、大筋群を効果的に鍛えることで、基礎代謝が上がり、痩せやすい身体を手に入れることができます。
            </p>
          </div>

          <div className={commonStyles.card}>
            <div className={commonStyles.cardImageWrapper}>
              <Image
                src="/images/hero/slide2.jpg"
                alt="有酸素運動"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={commonStyles.cardImage}
              />
            </div>
            <h3 className={commonStyles.cardTitle}>有酸素運動</h3>
            <p className={commonStyles.cardDescription}>
              地方在住の方は、普段の生活から車移動が多く、有酸素運動をする機会が少ないため、都市部在住の方に比べて一日の消費カロリーが少ない傾向にあります。
              当サロンでは、有酸素運動を取り入れることで、体脂肪率を効率よく落とし、日常生活で疲労しにくいスタイリッシュな身体をつくります。
            </p>
          </div>

          <div className={commonStyles.card}>
            <div className={commonStyles.cardImageWrapper}>
              <Image
                src="/images/hero/slide3.jpg"
                alt="HIIT"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={commonStyles.cardImage}
              />
            </div>
            <h3 className={commonStyles.cardTitle}>HIIT</h3>
            <p className={commonStyles.cardDescription}>
              1セット20〜30秒のインターバルトレーニングを約2分から4分間連続して行うことで、従来の有酸素運動の約9倍もの脂肪燃焼効果を得ることができます。
              また、体内のミトコンドリアの量が増え、基礎代謝が上がることで太りづらい身体を作り上げることができます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
