import FilmLayout from '@/components/FilmLayout';
import { MovieListType } from '@/types/MovieList'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

interface Props {
  movieResults: MovieListType;
}

export default function MovieInformation({ movieResults }: Props) {
  return (
    <FilmLayout movieResults={movieResults} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/movies');
  const movieData = await res.json();

  const paths = movieData?.map((movie: MovieListType) => (
    {
      params: { id: String(movie.id) }
    }
  ))

  return {
    paths,
    fallback: false
  }
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams

  const movieResults = await fetch(`http://localhost:3000/api/movies/${id}`)
    .then((res) => res.json())

  return {
    props: {
      movieResults
    },
    revalidate: 100
  }
}