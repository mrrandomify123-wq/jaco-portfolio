import { useEffect } from 'react';
import { useRouter } from 'next/router';

// /about redirects to /#about (single page layout)
export default function About() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/#about');
  }, [router]);
  return null;
}
