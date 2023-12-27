import Head from 'next/head'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push({
        pathname: "/login",
      });
    }
  }, [])

  if (status === 'loading') return <p>Loading...</p>

  if (session)
    return (
      <>
        <h1>Disney+ Clone</h1>
      </>
    )
}
