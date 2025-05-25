import React from 'react';
import styles from './Authorization.module.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';
import TabManager from '../../components/TabManager';
import { CustomSelect } from '../../components/CustomSelect';
import { useTranslation } from 'react-i18next';

const Authorization: React.FC = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <img className={styles.logo} src="/logo.png" alt="logo" />
        <h2 className={styles.title}>{t('auth.title')}</h2>
        <p className={styles.subtitle}>{t('auth.subtitle')}</p>

        <TabManager
          tabs={[
            {
              title: t('auth.signInTab'),
              element: <SignIn />,
            },
            {
              title: t('auth.signUpTab'),
              element: <SignUp />,
            },
          ]}
        />
        <div className={styles.language}>
          <CustomSelect
            options={Object.keys(i18n.options.resources || {}).map((lng) => ({
              value: lng,
            }))}
            value={i18n.language}
            onChange={(value: string) => {
              i18n.changeLanguage(value);
            }}
          />
        </div>
      </div>
      <div className={styles.promoSection}>
        <img
          className={styles.promoCard}
          src="/prosklad_image.png"
          alt="картиночка"
        />
      </div>
    </div>
  );
};

export default Authorization;
