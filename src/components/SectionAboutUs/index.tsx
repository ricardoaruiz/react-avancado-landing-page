import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map(({ name, role, image, socialLinks, description }) => (
        <ProfileCard
          key={name}
          name={name}
          role={role}
          image={image[0]}
          socialLinks={socialLinks}
          description={description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
