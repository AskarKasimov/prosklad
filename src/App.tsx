import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
