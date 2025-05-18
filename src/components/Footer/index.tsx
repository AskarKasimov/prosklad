import React from 'react';
import styles from './Footer.module.scss';
import { CustomSelect } from '../CustomSelect';

const Footer: React.FC = () => {
  const [lang, setLang] = React.useState<string>('en');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.central}>
          <p className={styles.title}>PROSklad</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <p>Stay up to date</p>
            <div>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <div className={styles.bottom}>
          <CustomSelect
            options={[
              { value: 'en', label: 'English' },
              { value: 'ru', label: 'Русский' },
            ]}
            value={lang}
            onChange={(value: string) => {
              setLang(value);
            }}
          />
          <nav>
            <ul>
              <li>
                <a href="#">© 2025 UserHub</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div className={styles.links}>
            <a href="#">
              <img src="/tg.png" alt="Telegram" />
            </a>
            <a href="#">
              <img src="/gh.png" alt="Github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
