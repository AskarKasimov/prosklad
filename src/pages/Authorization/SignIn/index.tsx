import React, { ChangeEvent, useState } from 'react';
import styles from '../Authorization.module.scss';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <button type="submit" className={styles.submitButton}>
        Log in
      </button>
    </form>
  );
};

export default SignIn;
