import '../styles/globals.css';
import Nav from '../components/Nav';
import MouseEffect from '../components/MouseEffect';

export default function App({ Component, pageProps }) {
  return (
    <div className="app-layout">
      <MouseEffect />
      <Nav />
      <main className="app-main">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
