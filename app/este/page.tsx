"use client";

import React from 'react';
import Image from 'next/image';
import styles from './este.module.css';
import commonStyles from '../../styles/common.module.css';

const EstePage = () => {
    return (
        <main className={styles.main}>
            {/* ヒーローセクション */}
            <section className={styles.hero}>
                <Image
                    src="/images/Este/hero.jpg"
                    alt="エステの様子"
                    className={styles.heroImage}
                    priority
                    quality={90}
                    fill
                    style={{ objectFit: "cover" }}
                />

                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>痩身エステ</h1>
                    <p className={styles.heroSubtitle}>最新マシンと確かな技術で理想のボディラインへ</p>
                </div>
            </section>

            {/* 特徴セクション */}
            <section className={`${commonStyles.section} ${styles.features}`}>
                <div className={commonStyles.sectionInner}>
                    <h2 className={commonStyles.sectionTitle}>特徴</h2>
                    <div className={commonStyles.cardGrid}>
                        <div className={commonStyles.card}>
                            <Image
                                src="/images/Este/1.jpg"
                                alt="最新のマシン"
                                className={commonStyles.cardImage}
                                width={400}
                                height={300}
                            />
                            <h3 className={commonStyles.cardTitle}>最新マシン導入</h3>
                            <p className={commonStyles.cardDescription}>
                                脂肪燃焼と引き締めに効果的な最新マシンを導入。短時間で効率的なボディメイクを実現します。
                            </p>
                        </div>

                        <div className={commonStyles.card}>
                            <Image
                                src="/images/Este/2.jpg"
                                alt="熟練スタッフ"
                                className={commonStyles.cardImage}
                                width={400}
                                height={300}
                            />
                            <h3 className={commonStyles.cardTitle}>熟練スタッフ</h3>
                            <p className={commonStyles.cardDescription}>
                                経験豊富なエステティシャンが、お客様一人ひとりの肌質や体質に合わせた施術を提供します。
                            </p>
                        </div>
                        <div className={commonStyles.card}>
                            <Image
                                src="/images/Este/3.jpg"
                                alt="完全個室"
                                className={commonStyles.cardImage}
                                width={400}
                                height={300}
                            />
                            <h3 className={commonStyles.cardTitle}>完全個室対応</h3>
                            <p className={commonStyles.cardDescription}>
                                プライバシーを重視した完全個室で、リラックスした環境での施術をお約束します。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* メニューセクション */}
            <section className={`${commonStyles.section} ${styles.menu}`}>
                <div className={commonStyles.sectionInner}>
                    <h2 className={commonStyles.sectionTitle}>メニュー</h2>
                    <div className={styles.menuList}>
                        <div className={styles.menuItem}>
                            <h3>脂肪燃焼痩身コース</h3>
                            <p>最新マシンと手技を組み合わせた、効果的な脂肪燃焼メニュー</p>
                            <ul>
                                <li>カウンセリング</li>
                                <li>脂肪燃焼マシン</li>
                                <li>リンパドレナージュ</li>
                                <li>アフターケア</li>
                            </ul>
                            <p className={styles.time}>施術時間: 90分</p>
                        </div>

                        <div className={styles.menuItem}>
                            <h3>リンパドレナージュコース</h3>
                            <p>老廃物の排出を促進し、むくみを解消する本格的なリンパケア</p>
                            <ul>
                                <li>カウンセリング</li>
                                <li>オイルマッサージ</li>
                                <li>リンパドレナージュ</li>
                                <li>デトックスケア</li>
                            </ul>
                            <p className={styles.time}>施術時間: 60分</p>
                        </div>

                        <div className={styles.menuItem}>
                            <h3>集中ケアコース</h3>
                            <p>気になる部分を集中的にケアする、カスタマイズメニュー</p>
                            <ul>
                                <li>カウンセリング</li>
                                <li>部分痩身</li>
                                <li>集中マッサージ</li>
                                <li>引き締めケア</li>
                            </ul>
                            <p className={styles.time}>施術時間: 45分</p>
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
                                <li>体験施術45分</li>
                                <li>アフターカウンセリング</li>
                            </ul>
                        </div>

                        <div className={styles.priceCard}>
                            <h3>通常コース</h3>
                            <p className={styles.price}>¥11,000 / 回</p>
                            <ul>
                                <li>全身痩身ケア60分</li>
                                <li>カウンセリング付き</li>
                                <li>アフターケア付き</li>
                            </ul>
                        </div>

                        <div className={styles.priceCard}>
                            <h3>集中コース</h3>
                            <p className={styles.price}>¥88,000 / 月</p>
                            <ul>
                                <li>週2回の施術</li>
                                <li>カウンセリング</li>
                                <li>ホームケアアドバイス</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTAセクション */}
            <section className={`${commonStyles.section} ${styles.cta}`}>
                <div className={commonStyles.sectionInner}>
                    <h2 className={commonStyles.sectionTitle}>まずは体験エステから</h2>
                    <p className={styles.ctaDescription}>
                        経験豊富なエステティシャンが丁寧にカウンセリング。<br />
                        あなたに最適なプランをご提案いたします。
                    </p>
                    <button className={styles.ctaButton}>体験エステを予約する</button>
                </div>
            </section>
        </main>
    );
};

export default EstePage; 