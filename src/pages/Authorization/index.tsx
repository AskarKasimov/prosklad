import React from 'react';
import styles from './Authorization.module.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';
import TabManager from '../../components/TabManager';

const Authorization: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <img className={styles.logo} src="/logo.png" alt="logo" />
        <h2 className={styles.title}>Create Your PROSklad Account</h2>
        <p className={styles.subtitle}>
          Join us to manage your user data and explore powerful product
          insights.
        </p>

        <TabManager
          tabs={{
            'Log in': <SignIn />,
            'Create account': <SignUp />,
          }}
        />
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
