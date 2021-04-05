import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptsProps } from 'types/api'

const SectionConcepts = ({ title, conceptItems }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {conceptItems.map(({ description }) => (
          <S.Item key={description}>{description}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
