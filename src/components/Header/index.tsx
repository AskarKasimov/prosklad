import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  // const location = useLocation();

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
                <Link to="/cabinet">Cabinet</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/password">Password</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
