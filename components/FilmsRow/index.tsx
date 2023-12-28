import { MovieListType } from '@/types/MovieList';
import React from 'react'
import { Container, Content, Wrapper } from './styles';
import Link from 'next/link';

interface Props {
  movieResults: MovieListType[];
  category: string;
  addMargin?: boolean;
}

function FilmsRow({ movieResults, category, addMargin }: Props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container addMargin={addMargin}>
      <Content {...settings}>
        {movieResults?.filter((item) => item.type === category)
          ?.map((movie) => (
            <div key={movie.id}>
              <Wrapper >
                <Link href={`/movies/${movie.id}`}>
                  <img
                    src={movie.cardImg}
                    alt={movie.title}
                    loading='lazy'
                  />
                </Link>
              </Wrapper>
            </div>
          ))}
      </Content>
    </Container>
  )
}

export default FilmsRow