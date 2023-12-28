import { MovieListType } from '@/types/MovieList';
import React, { useEffect } from 'react'
import { AddButton, Container, Controls, Description, GroupWatchButton, ImageTitle, PlayButton, SubTitle, TrailerButton } from './styles';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface Props {
  movieResults: MovieListType;
}

function FilmLayout({ movieResults }: Props) {
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
      <Container
        style={{
          backgroundImage: `url(${movieResults.backgroundImg})`,
          opacity: '0.7',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <ImageTitle>
          <img src={movieResults.titleImg} alt={movieResults.title} />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/images/group-icon.png" alt="" />
          </GroupWatchButton>
        </Controls>
        <SubTitle>{movieResults.subTitle}</SubTitle>
        <Description>{movieResults.description}</Description>
      </Container>
    )
}

export default FilmLayout