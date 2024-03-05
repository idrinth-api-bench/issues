import React from 'react';
import {
  Lang,
} from '../../../components/lang.tsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '../../../components/layout.tsx';

const Route = () => <Layout
  Outlet={<>
    <div className='title-card'>
      <h1><Lang lnkey='routes.title'/></h1>
      <p><Lang lnkey='routes.description'/></p>
      <h3>How to add Middleware</h3>
      <p>Adding middleware is a simple task that only takes
        a few minutes. To begin, define your middleware function.
        This can be done in the index file or by creating a seperate
        file.Next add a property to hold the middleware.
        In the example below we used PRE. Finally, assign the name
        of your middleware function to the property. Note: you can
        add as many middleware functions as needed,
        they will be executed in the order they are listed.
      </p>
    </div>
    <div className='card'>
      <h2><Lang lnkey='routes.example.title'/></h2>
      <div>
        <p><Lang lnkey='routes.example.description'/></p>
        <SyntaxHighlighter language='typescript'>{`import {
  Task,
} from '@idrinth/api-bench';

const myMiddleware = (req, res, next) => {
  // Do something with the request ///
  console.log('Middleware executed successfully');
  // Call next to move control to the next middleware ///
  next();
}

export default (apiURL, apiPassword): Task => {
  main: {
    method: 'get',
    url: apiURL + '?' + apiPassword,
  },
  //Apply middleware
  pre: [mtMiddleware]
};
      `}</SyntaxHighlighter>
      </div>
    </div>
  </>}
  page='routes'
  path='/usage/routes'
/>;
export default Route;
