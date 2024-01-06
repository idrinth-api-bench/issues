import './i18n.ts';
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
import Contributing from './pages/contributing';
import NotFound from './pages/not-found';

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
            </>
          }
        />
        <Route
          path="/contributing"
          element={
            <>
              <Navbar />
              <Contributing />
            </>
          }
        />
        <Route
          path="/usage"
          element={
            <>
              <Navbar />
              <Usage />
            </>
          }
        />
        <Route
          path="/usage/autowiring"
          element={
            <>
              <Navbar />
              <AutoWiring />
            </>
          }
        />
        <Route
          path="/usage/results"
          element={
            <>
              <Navbar />
              <Result />
            </>
          }
        />
        <Route
          path="/usage/logging"
          element={
            <>
              <Navbar />
              <Logging />
            </>
          }
        />
        <Route
          path="/usage/middlewares"
          element={
            <>
              <Navbar />
              <Middlewares />
            </>
          }
        />
        <Route
          path="/usage/storage"
          element={
            <>
              <Navbar />
              <Storage />
            </>
          }
        />
        <Route
          path="/imprint"
          element={
            <>
              <Navbar />
              <Imprint />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <NotFound />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
