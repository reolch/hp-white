"use client";

import React from 'react';
import styles from './CampaignSection.module.css';

const CampaignSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={`${styles.title} noto-serif-jp-bold`}>新規入会キャンペーン</h2>
        <p className={`${styles.description} noto-serif-jp-regular`}>
          今ならエステの新規入会で、特別なキャンペーンをご用意しています。<br />
          美しさと健康を手に入れるチャンスをお見逃しなく！
        </p>
        <div className={styles.priceWrapper}>
          <span className={`${styles.priceLabel} noto-serif-jp-regular`}>初回限定価格</span>
          <p className={`${styles.price} noto-serif-jp-bold`}>
            ￥22,000<span style={{ fontSize: '0.5em' }}>~</span>
          </p>
        </div>
        <ul className={`${styles.benefits} noto-serif-jp-regular`}>
          <li className={styles.benefitsItem}>✨ 初回トリートメント無料体験</li>
          <li className={styles.benefitsItem}>💫 2回目以降のトリートメントが20%オフ</li>
          <li className={styles.benefitsItem}>🎀 入会時に美容グッズをプレゼント</li>
        </ul>
        <a href="/signup" className={`${styles.button} noto-serif-jp-regular`}>
          今すぐ申し込む
        </a>
      </div>
    </section>
  );
};

export default CampaignSection;
