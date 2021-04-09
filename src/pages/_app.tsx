/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { CookiesProvider } from 'react-cookie';

import '@/styles/globals.css';

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default MainApp;
