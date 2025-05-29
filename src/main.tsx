import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import './common/i18n';

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

export type TanstackRouter = typeof router;

declare module "@tanstack/react-router" {
  interface Register {
    // This takes the type of our router and registers it throughout the app
    router: TanstackRouter;
  }
}

const rootElement = document.querySelector('#root') as Element;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </React.StrictMode>
  )
}