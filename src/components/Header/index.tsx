import React from 'react';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location: string[] = useLocation().pathname.split('/');

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.pagination}>
          <Link to="/" className={styles.logo}>
            <img src="/logo.png" alt="logo" />
            <p>PROSklad</p>
          </Link>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link
                  to="/cabinet"
                  className={
                    location[location.length - 1] === 'cabinet'
                      ? styles.activeNav
                      : ''
                  }
                >
                  Cabinet
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={
                    location[location.length - 1] === 'products'
                      ? styles.activeNav
                      : ''
                  }
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/password"
                  className={
                    location[location.length - 1] === 'password'
                      ? styles.activeNav
                      : ''
                  }
                >
                  Password
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
