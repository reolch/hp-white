import styles from './AccessSection.module.css';
import commonStyles from '../../styles/common.module.css';

const AccessSection = () => {
  return (
    <section className={`${styles.access} ${commonStyles.section}`}>
      <div className={commonStyles.sectionInner}>
        <h2 className={`${commonStyles.sectionTitle} ${commonStyles.accessTitle}`}>
          アクセス
        </h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <dl>
              <dt>住所</dt>
              <dd>〒880-0055<br />
                  宮崎県宮崎市南花ケ島町132-1<br />
                  川村ビル 1F</dd>
              <dt>営業時間</dt>
              <dd>10:00-20:00</dd>
              <dt>定休日</dt>
              <dd>毎週水曜日</dd>
            </dl>
          </div>
          <div className={styles.map}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.3776171562147!2d131.4229247!3d31.9115833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3538b7c13d2f5b9f%3A0x9f07a896d87b7960!2z44CSODgwLTAwNTUg5a6u5bSO55yM5a6u5bSO5biC5Y2X6Iqx44Kx5bO277yR77yT77yS4oiS77yR!5e0!3m2!1sja!2sjp!4v1709704577044!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection; 