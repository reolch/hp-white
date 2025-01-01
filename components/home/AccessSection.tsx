"use client";

import React from 'react';
import styles from './AccessSection.module.css';

const AccessSection: React.FC = () => {
  return (
    <section className={styles.access} id="access">
      <div className={styles.accessInner}>
        <h2 className={styles.accessTitle}>Access</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <dl className={styles.infoList}>
                <div className={styles.infoItem}>
                  <dt>住所</dt>
                  <dd>
                    <p className={styles.postal}>〒880-0055</p>
                    <p className={styles.address}>宮崎県宮崎市南花ケ島町１３２−１ 川村ビル １F</p>
                  </dd>
                </div>
                
                <div className={styles.infoItem}>
                  <dt>電話番号</dt>
                  <dd>
                    <a href="tel:070-9107-1717" className={styles.tel}>
                    070-9107-1717
                    </a>
                  </dd>
                </div>
                
                <div className={styles.infoItem}>
                  <dt>営業時間</dt>
                  <dd>
                    <span className={styles.hours}>10:00-20:00</span>
                  </dd>
                </div>
                
                <div className={styles.infoItem}>
                  <dt>定休日</dt>
                  <dd>不定休</dd>
                </div>
              </dl>

              <div className={styles.buttonContainer}>
                <a 
                  href="https://goo.gl/maps/..." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.mapButton}
                >
                  Google マップで見る
                </a>
              </div>
            </div>
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
              title="Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection; 