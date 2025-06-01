import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';

import './styles/tailwind.css';
import './common/i18n';
import { isProduction } from './common/utils';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export type TanstackRouter = typeof router;

declare module '@tanstack/react-router' {
  interface Register {
    // This takes the type of our router and registers it throughout the app
    router: TanstackRouter;
  }
}

const TanstackRouterDevtools = isProduction
  ? () => null
  : React.lazy(() =>
      import('@tanstack/react-router-devtools').then((result) => ({
        default: result.TanStackRouterDevtools,
      })),
    );

const ReactQueryDevtools = isProduction
  ? () => null
  : React.lazy(() =>
      import('@tanstack/react-query-devtools').then((result) => ({
        default: result.ReactQueryDevtools,
      })),
    );

const rootElement = document.querySelector('#root') as Element;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <React.Suspense fallback={<div>Loading...</div>}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider withGlobalClasses>
            <RouterProvider router={router} />
            <TanstackRouterDevtools
              initialIsOpen={false}
              position="bottom-left"
              router={router}
            />
            <ReactQueryDevtools initialIsOpen={false} position="bottom" />
          </MantineProvider>
        </QueryClientProvider>
      </React.Suspense>
    </React.StrictMode>,
  );
}
