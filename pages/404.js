import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <Link href="/" className="hero-cta" style={{ marginTop: '8px' }}>
        Go home
      </Link>
    </div>
  );
}
