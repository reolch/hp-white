'use client';

import React from 'react';
import styles from './ReviewSection.module.css';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import commonStyles from '../../styles/common.module.css';

interface ReviewSectionProps {
  // 必要に応じてpropsの型を定義
}

const ReviewSection: React.FC<ReviewSectionProps> = () => {
  return (
    <section className={`${styles.review} ${commonStyles.section}`}>
      <div className={commonStyles.sectionInner}>
        <h2 className={`${commonStyles.sectionTitle} ${commonStyles.reviewTitle}`}>
          お客様の声
        </h2>
        <div className={styles.reviews}>
          <div className={styles.reviewCard}>
            <div className={styles.rating}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className={styles.reviewContent}>
              <FaUserCircle className={styles.userIcon} />
              <p className={styles.comment}>
                初めてのパーソナルトレーニングで不安でしたが、一人一人の目標や体力に合わせて丁寧に指導してくださり、3ヶ月で-7kgの減量に成功しました。食事指導も細かくしていただけて、無理なくダイエットができました。
              </p>
              <p className={styles.author}>30代女性 会社員</p>
              <p className={styles.date}>2024年2月</p>
            </div>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.rating}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className={styles.reviewContent}>
              <FaUserCircle className={styles.userIcon} />
              <p className={styles.comment}>
                産後の骨盤矯正とダイエットで通い始めて1年になります。子連れOKな点も助かっています。スタッフの方々が子供にも優しく接してくださり、安心して通えています。体型も徐々に戻ってきて、姿勢の悪さも改善されました。
              </p>
              <p className={styles.author}>20代女性 主婦</p>
              <p className={styles.date}>2024年2月</p>
            </div>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.rating}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className={styles.reviewContent}>
              <FaUserCircle className={styles.userIcon} />
              <p className={styles.comment}>
                長年のデスクワークによる肩こりと腰痛に悩んでいましたが、パーソナルストレッチとトレーニングを組み合わせた施術で、かなり改善されました。仕事の合間に通えるので、とても助かっています。
              </p>
              <p className={styles.author}>40代男性 IT企業勤務</p>
              <p className={styles.date}>2024年2月</p>
            </div>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.rating}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className={styles.reviewContent}>
              <FaUserCircle className={styles.userIcon} />
              <p className={styles.comment}>
                美容エステと合わせてトレーニングも始めました。インナーマッスルを意識したトレーニングで、姿勢が良くなり、服のサイズダウンにも成功。何より体が軽くなって若返った気分です！スタッフの方の知識が豊富で、質問にも丁寧に答えていただけます。
              </p>
              <p className={styles.author}>50代女性 自営業</p>
              <p className={styles.date}>2024年2月</p>
            </div>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.rating}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className={styles.reviewContent}>
              <FaUserCircle className={styles.userIcon} />
              <p className={styles.comment}>
                友人の紹介で体験に来てそのまま継続を決意しました。完全予約制なので待ち時間がなく、清潔な空間で快適にトレーニングできます。特にマシンの種類が豊富で、効率的なトレーニングができる点が気に入っています。
              </p>
              <p className={styles.author}>35代女性 看護師</p>
              <p className={styles.date}>2024年2月</p>
            </div>
          </div>
        </div>
        <div className={styles.moreButton}>
          <button onClick={() => console.log('もっと見る')}>
            口コミをもっと見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection; 