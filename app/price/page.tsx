"use client";

import React from 'react';
import styles from './price.module.css';
import commonStyles from '../../styles/common.module.css';

const PricePage = () => {
  return (
    <main className={styles.main}>
      {/* ヘッダーセクション */}
      <section className={styles.header}>
        <h1 className={styles.headerTitle}>料金案内</h1>
        <p className={styles.headerDescription}>
          トレーニング、エステ、整体のプランをご用意しております。<br />
          お客様のニーズに合わせて最適なプランをお選びください。
        </p>
      </section>

      {/* トレーニング料金 */}
      <section className={`${commonStyles.section} ${styles.priceSection}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>パーソナルトレーニング</h2>
          <div className={styles.priceCards}>
            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <h3>体験コース</h3>
                <p className={styles.price}>¥5,500</p>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  <li>カウンセリング</li>
                  <li>体験トレーニング60分</li>
                  <li>体組成測定</li>
                  <li>施設利用方法の説明</li>
                </ul>
              </div>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <h3>都度払いプラン</h3>
                <p className={styles.price}>¥13,200<span>/回</span></p>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  <li>カウンセリング</li>
                  <li>パーソナルトレーニング60分</li>
                  <li>体組成測定</li>
                  <li>プログラム作成</li>
                </ul>
              </div>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.recommendBadge}>おすすめ</div>
                <h3>月4回プラン</h3>
                <p className={styles.price}>¥44,000<span>/月</span></p>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  <li>週1回トレーニング</li>
                  <li>体組成測定</li>
                  <li>食事指導</li>
                  <li>LINEサポート</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* エステ料金 */}
      <section className={`${commonStyles.section} ${styles.priceSection}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>痩身エステ</h2>
          <div className={styles.priceCards}>
            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <h3>体験コース</h3>
                <p className={styles.price}>¥5,500</p>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  <li>カウンセリング</li>
                  <li>体験エステ45分</li>
                  <li>お肌診断</li>
                  <li>アフターカウンセリング</li>
                </ul>
              </div>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <h3>都度払いプラン</h3>
                <p className={styles.price}>¥11,000<span>/回</span></p>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  <li>全身痩身ケア60分</li>
                  <li>カウンセリング</li>
                  <li>アフターケア</li>
                  <li>ホームケアアドバイス</li>
                </ul>
              </div>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.recommendBadge}>おすすめ</div>
                <h3>月8回プラン</h3>
                <p className={styles.price}>¥77,000<span>/月</span></p>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  <li>週2回施術</li>
                  <li>カウンセリング</li>
                  <li>ホームケア用品プレゼント</li>
                  <li>24時間LINEサポート</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* オプションメニュー */}
      <section className={`${commonStyles.section} ${styles.optionSection}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>オプションメニュー</h2>
          <div className={styles.optionList}>
            <div className={styles.optionItem}>
              <h3>体組成測定</h3>
              <p className={styles.optionPrice}>¥1,100</p>
            </div>
            <div className={styles.optionItem}>
              <h3>食事指導（30分）</h3>
              <p className={styles.optionPrice}>¥3,300</p>
            </div>
            <div className={styles.optionItem}>
              <h3>ストレッチ（30分）</h3>
              <p className={styles.optionPrice}>¥3,300</p>
            </div>
            <div className={styles.optionItem}>
              <h3>重点ケア（15分）</h3>
              <p className={styles.optionPrice}>¥2,200</p>
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className={`${commonStyles.section} ${styles.notesSection}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>ご利用に関する注意事項</h2>
          <div className={styles.notesList}>
            <p>・表示価格はすべて税込です。</p>
            <p>・キャンセルは24時間前までにご連絡ください。</p>
            <p>・月額プランは3ヶ月以上のご契約をお願いしております。</p>
            <p>・施術の効果には個人差があります。</p>
            <p>・ご不明な点がございましたら、お気軽にお問い合わせください。</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${commonStyles.section} ${styles.cta}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>まずは体験からスタート</h2>
          <p className={styles.ctaDescription}>
            お客様一人ひとりに最適なプランをご提案いたします。<br />
            まずは体験コースでお試しください。
          </p>
          <button className={styles.ctaButton}>体験予約をする</button>
        </div>
      </section>
    </main>
  );
};

export default PricePage; 