import { useEffect } from 'react';
import { useRouter } from 'next/router';

// /work redirects to /#work (single page layout)
export default function Work() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/#work');
  }, [router]);
  return null;
}
