import React from 'react';
import styles from './Footer.module.scss';
import { CustomSelect } from '../CustomSelect';
import Telegram from '@assets/tg.svg?react';
import Github from '@assets/gh.svg?react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { i18n, t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.central}>
          <p className={styles.title}>PROSklad</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <p>{t('footer.subscriptionSlogan')}</p>
            <div>
              <input type="email" placeholder={t('form.emailPlaceholder')} />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <div className={styles.bottom}>
          <CustomSelect
            options={Object.keys(i18n.options.resources || {}).map((lng) => ({
              value: lng,
            }))}
            value={i18n.language}
            onChange={(value: string) => {
              i18n.changeLanguage(value);
            }}
          />
          <nav>
            <ul>
              <li>
                <a href="#">© 2025 ProSklad</a>
              </li>
              <li>
                <a href="#">{t('footer.termsOfUse')}</a>
              </li>
              <li>
                <a href="#">{t('footer.privacyPolicy')}</a>
              </li>
              <li>
                <a href="#">{t('footer.contactUs')}</a>
              </li>
            </ul>
          </nav>
          <div className={styles.links}>
            <a href="#">
              <Telegram />
            </a>
            <a href="#">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
