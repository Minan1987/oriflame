import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'
import { router } from './routes/index.jsx'
import { store } from './store/index.js';
import "./index.css"
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer position='top-center' />
      </Provider>
    </HelmetProvider>
  </StrictMode>,
)
