import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from '../Authorization.module.scss';
import { useTranslation } from 'react-i18next';

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [readyToSubmit, setReadyToSubmit] = React.useState<boolean>(false);

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setReadyToSubmit(true);
    } else {
      setReadyToSubmit(false);
    }
  }, [email, password]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        {t('form.emailLabel')}
        <input
          type="email"
          placeholder={t('form.emailPlaceholder')}
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </label>
      <label>
        {t('form.passwordLabel')}
        <input
          type="password"
          placeholder={t('form.passwordPlaceholder')}
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </label>
      <button
        type="submit"
        className={styles.submitButton}
        disabled={!readyToSubmit}
      >
        {t('auth.signInSubmit')}
      </button>
    </form>
  );
};

export default SignIn;
