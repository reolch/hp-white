"use client";

import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <main>
      <div className={styles.parallax_box}>
        {/* ヒーローセクション */}
        <div className={`${styles.parallax_content} ${styles.img_bg_hero}`}>
          <Image
            src="/images/hero/slide1.jpg"
            alt="Hero background"
            fill
            priority
            quality={90}
            style={{ objectFit: 'cover', zIndex: -1 }}
          />
          <div className={styles.content_wrapper}>
            <h1 className={styles.section_title}>About Us</h1>
            <p className={styles.section_description}>
              美と健康のトータルサポート
            </p>
          </div>
        </div>

        {/* ミッションセクション */}
        <div className={`${styles.parallax_content} ${styles.img_bg_mission}`}>
          <Image
            src="/images/hero/slide2.jpg"
            alt="Mission background"
            fill
            quality={90}
            style={{ objectFit: 'cover', zIndex: -1 }}
          />
          <div className={styles.content_wrapper}>
            <h2 className={styles.section_title}>Our Mission</h2>
            <p className={styles.section_description}>
              WHITEは、お客様一人ひとりの「なりたい自分」の実現をサポートします。
              最新の設備と確かな技術で、美と健康の両面からトータルケアを提供いたします。
            </p>
          </div>
        </div>

        {/* 特徴セクション */}
        <div className={`${styles.parallax_content} ${styles.img_bg_features}`}>
          <Image
            src="/images/hero/slide3.jpg"
            alt="Features background"
            fill
            quality={90}
            style={{ objectFit: 'cover', zIndex: -1 }}
          />
          <div className={styles.content_wrapper}>
            <h2 className={styles.section_title}>特徴</h2>
            <div className={styles.features_grid}>
              <div className={styles.feature_item}>
                <h3>パーソナライズドケア</h3>
                <p>お客様一人ひとりの目標や体質に合わせて、オーダーメイドのプログラムを提供します。</p>
              </div>
              <div className={styles.feature_item}>
                <h3>最新設備</h3>
                <p>効果的なトレーニングとケアを実現する最新のマシンを完備しています。</p>
              </div>
              <div className={styles.feature_item}>
                <h3>専門スタッフ</h3>
                <p>経験豊富な専門スタッフが、確かな技術とサポートを提供します。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 施設情報セクション */}
        <div className={`${styles.parallax_content} ${styles.img_bg_facility}`}>
          <Image
            src="/images/hero/slide1.jpg"
            alt="Facility background"
            fill
            quality={90}
            style={{ objectFit: 'cover', zIndex: -1 }}
          />
          <div className={styles.content_wrapper}>
            <h2 className={styles.section_title}>施設情報</h2>
            <div className={styles.facility_info}>
              <dl className={styles.info_list}>
                <dt>営業時間</dt>
                <dd>10:00 - 20:00（最終受付 19:00）</dd>
                <dt>定休日</dt>
                <dd>水曜日</dd>
                <dt>住所</dt>
                <dd>〒880-0055 宮崎県宮崎市南花ケ島町１３２−１ 川村ビル １F</dd>
                <dt>アクセス</dt>
                <dd>宮交シティ徒歩10分</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage; 