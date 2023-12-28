import React from 'react';
import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/index';
import AutoWiring from './pages/autowiring';
import Examples from './pages/examples';
import Logging from './pages/logging';
import Middlewares from './pages/middlewares';
import Storage from './pages/storage';
import Result from './pages/results';

ReactDOM.createRoot(document.getElementById('root',)!,).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/examples/autowiring" element={<AutoWiring />} />
        <Route path="/examples/results" element={<Result />} />
        <Route path="/examples/logging" element={<Logging />} />
        <Route path="/examples/middlewares" element={<Middlewares />} />
        <Route path="/examples/storage" element={<Storage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
