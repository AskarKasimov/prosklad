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
