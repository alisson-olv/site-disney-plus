import React from 'react'
import { Container } from './styles'
import { VideoData } from './Data'
import { Wrapper } from './styles'
import CategoryContent from './CategoryContent'

function Categories() {
  return (
    <Container>
      {VideoData?.map((item) => (
        <Wrapper key={item.id}>
          <CategoryContent video={item.video} defaultImage={item.imageUrl} name={item.name} />
        </Wrapper>
      ))}

    </Container>
  )
}

export default Categories