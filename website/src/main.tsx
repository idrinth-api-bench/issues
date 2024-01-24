import './i18n.ts';
import React from 'react';
import 'the-new-css-reset/css/reset.css';
import '@fontsource/roboto/400.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import routes from './routes.tsx';
import Loader from './pagelike/loader.tsx';

const router = createBrowserRouter(routes(Loader,),);

ReactDOM.createRoot(document.getElementById('root',)!,).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
