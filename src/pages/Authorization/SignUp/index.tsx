import React, { ChangeEvent } from 'react';
import styles from '../Authorization.module.scss';

const SignUp: React.FC = () => {
  const [username, setUsername] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [telegramId, setTelegramId] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <form className={styles.form}>
      <label>
        Username
        <input
          type="text"
          placeholder="Your unique username"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="your.email@example.com"
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
        Password
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" />I have read and agree to UserHub’s terms of
        service and privacy policy.
      </label>
      <button type="submit" className={styles.submitButton}>
        Get started
      </button>
    </form>
  );
};

export default SignUp;
