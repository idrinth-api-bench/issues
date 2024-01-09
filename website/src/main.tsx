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
import AutoWiring from './pages/usage/autowiring';
import Usage from './pages/usage';
import Logging from './pages/usage/logging';
import Middlewares from './pages/usage/middlewares';
import Storage from './pages/usage/storage';
import Result from './pages/usage/results';
import Imprint from './pages/imprint';
import Contributing from './pages/contributing';
import NotFound from './pages/not-found';
import License from './pages/license';
import Footer from './components/footer';
import RoutePage from './pages/usage/route';
import DefaultMeta from "./components/default-meta.tsx";

ReactDOM.createRoot(document.getElementById('root',)!,).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route
          path=""
          element={
            <>
              <DefaultMeta page='home' path=''/>
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
              <DefaultMeta page='contributing' path='/contributing'/>
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
              <DefaultMeta path='/usage' page='usage'/>
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
              <DefaultMeta page='autowiring' path='/usage/autowiring'/>
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
              <DefaultMeta page='results' path='/usage/results'/>
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
              <DefaultMeta page='logging' path='/usage/logging'/>
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
              <DefaultMeta path='/usage/middlewares' page='middlewares'/>
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
              <DefaultMeta page='storage' path='/usage/storage'/>
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
              <DefaultMeta page='imprint' path='/imprint'/>
              <Navbar />
              <Imprint />
              <Footer />
            </>
          }
        />
        <Route
          path="/license"
          element={
            <>
              <DefaultMeta page='license' path='/license'/>
              <Navbar />
              <License />
              <Footer />
            </>
          }
        />
        <Route
          path="/usage/route"
          element={
            <>
              <DefaultMeta page='route' path='/usage/route'/>
              <Navbar />
              <RoutePage />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <DefaultMeta path='/404' page='404'/>
              <Navbar />
              <NotFound />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
