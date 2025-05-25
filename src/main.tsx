import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Authorization from './pages/Authorization';
import Cabinet from './pages/Cabinet';
import Products from './pages/Products';
import Password from './pages/Password';
import './i18n.ts'; // язык

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'cabinet',
        element: <Cabinet />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'password',
        element: <Password />,
      },
    ],
  },
  {
    path: 'auth',
    element: <Authorization />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
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
    </Provider>
  </StrictMode>
);
