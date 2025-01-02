'use client'

import styles from './test.module.css'
import { useState } from 'react'

export default function TestPage() {

  return (
    <>
      <div className={styles.parallax_box}>
        <div className={`${styles.parallax_content} ${styles.img_bg_01}`}>
          <h1>私たちのサービス</h1>
          <p>革新的なソリューションで、ビジネスの成長をサポートします</p>
        </div>
        
        <div className={`${styles.parallax_content} ${styles.img_bg_02}`}>
          <h2>ウェブ開発</h2>
          <p>最新技術を活用した、高品質なウェブアプリケーション開発</p>
          <ul>
            <li>レスポンシブデザイン</li>
            <li>パフォーマンス最適化</li>
            <li>セキュアな実装</li>
          </ul>
        </div>

        <div className={`${styles.parallax_content} ${styles.img_bg_03}`}>
          <h2>モバイルアプリ開発</h2>
          <p>iOS・Androidアプリの企画から運用まで</p>
          <button className={styles.cta_button}>お問い合わせ</button>
        </div>

        <div className={`${styles.parallax_content} ${styles.img_bg_04}`}>
          <h2>クラウドソリューション</h2>
          <p>スケーラブルで信頼性の高いインフラ構築</p>
          <div className={styles.feature_grid}>
            <div>AWS</div>
            <div>Azure</div>
            <div>GCP</div>
          </div>
        </div>

        <div className={`${styles.parallax_content} ${styles.img_bg_05}`}>
          <h2>お問い合わせ</h2>
          <p>まずはお気軽にご相談ください</p>
          <form className={styles.contact_form}>
            <input type="email" placeholder="メールアドレス" />
            <button type="submit">送信</button>
          </form>
        </div>
      </div>
    </>
  )
}
