import React from 'react';
import styles from './AccessSection.module.css';

interface AccessSectionProps {
  // 必要に応じてpropsの型を定義
}

const AccessSection: React.FC<AccessSectionProps> = () => {
  return (
    <section className={styles.access}>
      <div className={styles.accessInner}>
        <h2 className={styles.accessTitle}>Access</h2>
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
        <div className={styles.accessInfo}>
          <p>住所: 〒000-0000 東京都...</p>
          <p>電話: 03-0000-0000</p>
          <p>営業時間: 10:00-20:00</p>
          <p>定休日: 水曜日</p>
        </div>
      </div>
    </section>
  );
};

export default AccessSection; 