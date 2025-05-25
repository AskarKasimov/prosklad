import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.scss';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <div>
        <Header />
        <div className={styles.container}>
          <Outlet />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
