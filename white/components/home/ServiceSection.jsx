"use client";

import React from 'react';
import './ServiceSection.css'; // スタイルシートのインポート
import commonStyles from '../../styles/common.module.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-content">
        <div className="services-text">
          <h2 className={`${commonStyles.sectionTitle} ${commonStyles.servicesTitle}`}>
            サービス
          </h2>
          <hr className="services-separator" />
          <p className="services-description">
            パーソナルトレーニングでは<br />
            <strong>「ウェイトトレーニング」</strong><br />
            <strong>「ファンクショナルトレーニング」</strong><br />
            <strong>「HIIT（高強度インターバルトレーニング）」</strong><br />
            を組み合わせたサービスを提供します。
          </p>
          <p className="services-description">
            痩身エステでは<br />
            <strong>「ハイパーナイフ」<br />
            「リンパドレナージュ」<br />
            「整体ストレッチ」</strong><br />
            を組み合わせたサービスをご提供します。
          </p>
        </div>
        <div className="services-image">
          <figure>
            <img
              decoding="async"
              src="http://qualitas-conditioning.com/wp-content/uploads/2023/11/QUALITASホームページ内画像8のコピー.jpg"
              alt="パーソナルジムQUALITASのサービス内容を説明する図"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
