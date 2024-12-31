"use client";

import React from 'react';
import styles from './AccessSection.module.css';

const AccessSection: React.FC = () => {
  return (
    <section className={styles.access}>
      <div className={styles.accessInner}>
        <h2 className={styles.accessTitle}>Access</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <dl>
              <dt>住所</dt>
              <dd>〒000-0000<br />東京都...</dd>
              
              <dt>電話番号</dt>
              <dd>03-0000-0000</dd>
              
              <dt>営業時間</dt>
              <dd>10:00-20:00</dd>
              
              <dt>定休日</dt>
              <dd>水曜日</dd>
            </dl>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection; 