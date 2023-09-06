import { DataTable, FlexRow, Link, TextBlock, Title } from "common/Common.styled"
import { Section } from "common/Container.styled";
import { ActionIcon } from "common/Github.styled";
import { copyText } from "util/copy";

const Contact: React.FC<{}> = () => {
    return <Section>
        <Title>Contact Me</Title>
        <TextBlock>
            <DataTable>
                <tr>
                    <td>Email</td>
                    <td>
                        <FlexRow>
                            lucien.7789@gmail.com
                            <ActionIcon src="/images/toclipboard.png" onClick={() => copyText("lucien.7789@gmail.com")} tooltip="Clone" width="20px" contrast="75%"/>
                        </FlexRow>
                    </td>
                    
                </tr>
                <tr>
                <td>GitHub</td>
                    <td>
                        <FlexRow>
                            <Link target="_blank" href="https://github.com/marutsuki/">To GitHub</Link>
                        </FlexRow>
                    </td>
                </tr>
                <tr>
                <td>LinkedIn</td>
                    <td>
                        <FlexRow>
                            <Link target="_blank" href="https://www.linkedin.com/in/lucienlu7789/">To LinkedIn</Link>
                        </FlexRow>
                    </td>
                </tr>
                    
            </DataTable>
            
        </TextBlock>
    </Section>
}

export default Contact;