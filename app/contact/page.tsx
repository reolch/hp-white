"use client";

import React, { useState } from 'react';
import styles from './contact.module.css';
import commonStyles from '../../styles/common.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージを入力してください';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // ここにフォーム送信のロジックを実装
      console.log('Form submitted:', formData);
      // 送信成功時の処理
      alert('お問い合わせを受け付けました。');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('送信に失敗しました。もう一度お試しください。');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className={styles.main}>
      {/* ヘッダーセクション */}
      <section className={styles.header}>
        <h1 className={styles.headerTitle}>お問い合わせ</h1>
        <p className={styles.headerDescription}>
          ご質問・ご相談などございましたら、<br className={styles.spOnly} />
          お気軽にお問い合わせください。
        </p>
      </section>

      {/* お問い合わせフォーム */}
      <section className={`${commonStyles.section} ${styles.formSection}`}>
        <div className={commonStyles.sectionInner}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                お名前 <span className={styles.required}>必須</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="山田 太郎"
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                メールアドレス <span className={styles.required}>必須</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="example@email.com"
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                電話番号 <span className={styles.optional}>任意</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="090-1234-5678"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                お問い合わせ項目 <span className={styles.required}>必須</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">選択してください</option>
                <option value="training">パーソナルトレーニングについて</option>
                <option value="este">エステについて</option>
                <option value="price">料金について</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                お問い合わせ内容 <span className={styles.required}>必須</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={6}
                placeholder="お問い合わせ内容をご記入ください"
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            <div className={styles.submitContainer}>
              <button type="submit" className={styles.submitButton}>
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* その他の連絡方法 */}
      <section className={`${commonStyles.section} ${styles.otherContact}`}>
        <div className={commonStyles.sectionInner}>
          <h2 className={commonStyles.sectionTitle}>その他の連絡方法</h2>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <h3>電話でのお問い合わせ</h3>
              <p className={styles.phone}>000-0000-0000</p>
              <p className={styles.hours}>営業時間: 10:00-20:00（水曜定休）</p>
            </div>
            <div className={styles.contactMethod}>
              <h3>LINEでのお問い合わせ</h3>
              <p>LINE公式アカウントから、お気軽にお問い合わせください。</p>
              <button className={styles.lineButton}>
                LINE公式アカウント
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage; 