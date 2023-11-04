import { TextBlock, Title } from 'common/styled/Common.styled'
import { Section } from 'common/styled/Container.styled'
import React from 'react'

const OtherSkills: React.FC<unknown> = () => {
  return <Section>
        <Title>
            Other things I use
        </Title>

        <TextBlock>
            Spring Web • Spring Security • Spring Reactive Web • JDBC
        </TextBlock>
        
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
