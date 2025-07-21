import React, { ChangeEvent, useEffect } from 'react';
import styles from '../Authorization.module.scss';
import { useTranslation } from 'react-i18next';

const SignUp: React.FC = () => {
  const { t } = useTranslation();
  const [username, setUsername] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [telegramId, setTelegramId] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const [readyToSubmit, setReadyToSubmit] = React.useState<boolean>(false);

  useEffect(() => {
    if (
      username.length > 0 &&
      email.length > 0 &&
      telegramId.length > 0 &&
      password.length > 0
    ) {
      setReadyToSubmit(true);
    } else {
      setReadyToSubmit(false);
    }
  }, [username, email, telegramId, password]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        {t('form.usernameLabel')}
        <input
          type="text"
          placeholder={t('form.usernamePlaceholder')}
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </label>
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
        Telegram ID
        <input
          type="text"
          placeholder="@your_telegram_handle"
          value={telegramId}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTelegramId(e.target.value)
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
      <label className={styles.checkbox}>
        <input type="checkbox" />
        {t('auth.privacyCheckbox')}
      </label>
      <button
        type="submit"
        className={styles.submitButton}
        disabled={!readyToSubmit}
      >
        {t('auth.signUpSubmit')}
      </button>
    </form>
  );
};

export default SignUp;
