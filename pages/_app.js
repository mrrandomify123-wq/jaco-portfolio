import '../styles/globals.css';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import Nav from '../components/Nav';
import MouseEffect from '../components/MouseEffect';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <div className="app-layout">
      {loading && <div className="route-loading-bar" aria-hidden="true" />}
      <MouseEffect />
      <Nav />
      <main className="app-main">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
