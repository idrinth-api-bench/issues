import React from 'react';
import Navbar from './components/navbar';
import './index.css';
import 'the-new-css-reset/css/reset.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/index';
import AutoWiring from './pages/autowiring';
import Usage from './pages/usage';
import Logging from './pages/logging';
import Middlewares from './pages/middlewares';
import Storage from './pages/storage';
import Result from './pages/results';
import Imprint from './pages/imprint';
import './i18n.ts';
import Contributing from './pages/contributing';
import Footer from './components/footer';

ReactDOM.createRoot(document.getElementById('root',)!,).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/contributing"
          element={
            <>
              <Navbar />
              <Contributing />
              <Footer />
            </>
          }
        />
        <Route
          path="/usage"
          element={
            <>
              <Navbar />
              <Usage />
              <Footer />
            </>
          }
        />
        <Route
          path="/usage/autowiring"
          element={
            <>
              <Navbar />
              <AutoWiring />
              <Footer />
            </>
          }
        />
        <Route
          path="/usage/results"
          element={
            <>
              <Navbar />
              <Result />
              <Footer />
            </>
          }
        />
        <Route
          path="/usage/logging"
          element={
            <>
              <Navbar />
              <Logging />
              <Footer />
            </>
          }
        />
        <Route
          path="/usage/middlewares"
          element={
            <>
              <Navbar />
              <Middlewares />
              <Footer />
            </>
          }
        />
        <Route
          path="/usage/storage"
          element={
            <>
              <Navbar />
              <Storage />
              <Footer />
            </>
          }
        />
        <Route
          path="/imprint"
          element={
            <>
              <Navbar />
              <Imprint />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
