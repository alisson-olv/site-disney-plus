import Head from 'next/head'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HomeLayout from '@/components/HomeLayout';
import { MovieListType } from '@/types/MovieList';
import { GetServerSideProps } from 'next';

// TODO: Arrumar CTAS /home e talvez fzer o campo de busca?

interface Props {
  movieResults: MovieListType[];
}

export default function Home({ movieResults }: Props) {

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
        <HomeLayout movieResults={movieResults} />
      </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const movieResults = await fetch('http://localhost:3000/api/movies').then(
    (res) => res.json()
  );

  return {
    props: {
      movieResults
    }
  }
};