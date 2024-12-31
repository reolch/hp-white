import styles from './InstagramSection.module.css';
import commonStyles from '../../styles/common.module.css';

const InstagramSection = () => {
  return (
    <section className={`${styles.instagram} ${commonStyles.section}`}>
      <div className={commonStyles.sectionInner}>
        <h2 className={`${commonStyles.sectionTitle} ${commonStyles.instagramTitle}`}>
          Instagram
        </h2>
        <div className={styles.feed}>
          {/* InstagramフィードのAPIまたは埋め込みコードをここに実装 */}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;