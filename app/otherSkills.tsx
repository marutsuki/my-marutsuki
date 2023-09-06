import { TextBlock, Title } from 'common/Common.styled'
import { Section } from 'common/Container.styled'
import React from 'react'

const OtherSkills: React.FC<unknown> = () => {
  return <Section>
        <Title>
            Other things I use
        </Title>
        <TextBlock>
        styled-components • electron • SASS/SCSS
        </TextBlock>

        <TextBlock>
        JUnit • Mockito • Jest
        </TextBlock>

        <TextBlock>
        JAXB • Jackson
        </TextBlock>

        <TextBlock>
        Maven • Gradle • Jenkins • Docker
        </TextBlock>
    </Section>
}

export default OtherSkills
