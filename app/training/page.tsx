"use client";

import React from 'react';
import Image from 'next/image';
import styles from './training.module.css';
import commonStyles from '../../styles/common.module.css';

const TrainingPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/images/trainingpage/program.jpg"
          alt="パーソナルトレーニングの様子"
          className={styles.heroImage}
          priority
          quality={90}
          fill
          style={{objectFit: "cover"}}
        />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>パーソナルトレーニング</h1>
          <p className={styles.heroSubtitle}>あなたに合わせたオーダーメイドの指導で理想の体づくりをサポート</p>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className={`${commonStyles.section} ${styles.features}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>特徴</h2>
          <div className={commonStyles.cardGrid}>
            <div className={commonStyles.card}>
              <div className={commonStyles.cardImageWrapper}>
                <Image 
                  src="/images/trainingpage/trainer.jpg"
                  alt="経験豊富なトレーナー" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={commonStyles.cardImage}
                />
              </div>

              <h3 className={commonStyles.cardTitle}>経験豊富なトレーナー</h3>
              <p className={commonStyles.cardDescription}>
                国家資格保有者を含む経験豊富なトレーナーが、あなたの目標達成をサポートします。
              </p>
            </div>

            <div className={commonStyles.card}>
              <Image 
                src="/images/trainingpage/facility.jpg" 
                alt="充実した設備" 
                className={commonStyles.cardImage}
                width={400}
                height={300}
              />

              <h3 className={commonStyles.cardTitle}>充実した設備</h3>
              <p className={commonStyles.cardDescription}>
                最新のトレーニングマシンを完備。効率的なトレーニングを可能にします。
              </p>
            </div>

            <div className={commonStyles.card}>
              <Image 
                src="/images/trainingpage/program.jpg" 
                alt="オーダーメイドプログラム" 
                className={commonStyles.cardImage}
                width={400}
                height={300}
              />

              <h3 className={commonStyles.cardTitle}>オーダーメイドプログラム</h3>
              <p className={commonStyles.cardDescription}>
                お客様一人ひとりの目標や体力に合わせた、カスタマイズされたプログラムを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* プログラムセクション */}
      <section className={`${commonStyles.section} ${styles.programs}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>トレーニングプログラム</h2>
          <div className={styles.programList}>

            <div className={styles.programItem}>
              <h3>ダイエットプログラム</h3>
              <p>体脂肪減少と筋力アップを同時に実現。理想的なボディメイクを目指します。</p>
              <ul>
                <li>体組成計測・カウンセリング</li>
                <li>オリジナルトレーニングメニュー作成</li>
                <li>食事指導</li>
                <li>定期的な経過観察</li>
              </ul>
            </div>

            <div className={styles.programItem}>
              <h3>筋力アッププログラム</h3>
              <p>正しいフォームと効果的なメニューで、効率的な筋力アップを実現します。</p>
              <ul>
                <li>筋力測定・評価</li>
                <li>段階的な負荷設定</li>
                <li>フォームチェック</li>
                <li>栄養サポート</li>
              </ul>
            </div>

            <div className={styles.programItem}>
              <h3>コンディショニングプログラム</h3>
              <p>姿勢改善や体の歪み改善に焦点を当てたプログラムです。</p>
              <ul>
                <li>姿勢分析</li>
                <li>ストレッチ指導</li>
                <li>コアトレーニング</li>
                <li>生活習慣改善アドバイス</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section className={`${commonStyles.section} ${styles.pricing}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>料金プラン</h2>
          <div className={styles.priceCards}>

            <div className={styles.priceCard}>
              <h3>体験コース</h3>
              <p className={styles.price}>¥5,500</p>
              <ul>
                <li>カウンセリング</li>
                <li>体験トレーニング60分</li>
                <li>体組成測定</li>
              </ul>
            </div>

            <div className={styles.priceCard}>
              <h3>スタンダードプラン</h3>
              <p className={styles.price}>¥13,200 / 回</p>
              <ul>
                <li>パーソナルトレーニング60分</li>
                <li>体組成測定</li>
                <li>プログラム作成</li>
              </ul>
            </div>
            
            <div className={styles.priceCard}>
              <h3>集中プラン</h3>
              <p className={styles.price}>¥110,000 / 月</p>
              <ul>
                <li>週2回トレーニング</li>
                <li>食事指導</li>
                <li>24時間サポート</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className={`${commonStyles.section} ${styles.cta}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>まずは体験トレーニングから</h2>
          <p className={styles.ctaDescription}>
            経験豊富なトレーナーが丁寧にサポートいたします。<br />
            まずは体験トレーニングでお気軽にお試しください。
          </p>
          <button className={styles.ctaButton}>体験トレーニングを予約する</button>
        </div>
      </section>
    </main>
  );
};

export default TrainingPage;