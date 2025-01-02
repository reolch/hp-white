"use client";

import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';
import commonStyles from '../../styles/common.module.css';

const AboutPage = () => {
  return (
    <main className={styles.main}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
      <Image
                    src="/images/About/hero.jpg"
                    alt="アバウトページのヒーロー画像"
                    className={styles.heroImage}
                    priority
                    quality={90}
                    fill
                    style={{ objectFit: "cover" }}
                />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSubtitle}>
            美と健康のトータルサポート
          </p>
        </div>
      </section>

      {/* ミッションセクション */}
      <section className={`${commonStyles.section} ${styles.mission}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            WHITEは、お客様一人ひとりの「なりたい自分」の実現をサポートします。<br />
            最新の設備と確かな技術で、美と健康の両面からトータルケアを提供いたします。
          </p>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className={`${commonStyles.section} ${styles.features}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>特徴</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <Image
                  src="/images/about/feature1.jpg"
                  alt="パーソナライズドケア"
                  width={400}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <h3>パーソナライズドケア</h3>
              <p>
                お客様一人ひとりの目標や体質に合わせて、オーダーメイドのプログラムを提供します。
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <Image
                  src="/images/about/feature2.jpg"
                  alt="最新設備"
                  width={400}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <h3>最新設備</h3>
              <p>
                効果的なトレーニングとケアを実現する最新のマシンを完備しています。
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <Image
                  src="/images/about/feature3.jpg"
                  alt="専門スタッフ"
                  width={400}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <h3>専門スタッフ</h3>
              <p>
                経験豊富な専門スタッフが、確かな技術とサポートを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 施設情報セクション */}
      <section className={`${commonStyles.section} ${styles.facility}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>施設情報</h2>
          <div className={styles.facilityInfo}>
            <div className={styles.facilityText}>
              <dl className={styles.infoList}>
                <dt>営業時間</dt>
                <dd>10:00 - 20:00（最終受付 19:00）</dd>
                
                <dt>定休日</dt>
                <dd>水曜日</dd>
                
                <dt>住所</dt>
                <dd>〒000-0000 東京都○○区○○1-2-3</dd>
                
                <dt>アクセス</dt>
                <dd>○○駅徒歩5分</dd>
              </dl>
            </div>
            <div className={styles.facilityImage}>
              <Image
                src="/images/about/facility.jpg"
                alt="施設外観"
                width={600}
                height={400}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage; 