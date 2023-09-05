import { TextBlock, Title } from "common/Common.styled"

const OtherSkills: React.FC<{}> = () => {
    return <section>
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
    </section>
}

export default OtherSkills;