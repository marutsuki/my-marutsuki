import { Badge, BadgeImage, BadgeLabel, SkillStack, SkillStackRow, SkillStackRowHover } from "common/Badge.styled"
import { Title } from "common/Common.styled";
import { Section } from "common/Container.styled";

interface Skill {
    name: string,
    image: string
}
interface SkillGroup {
    name: string,
    skills: Array<Skill>
}
interface SkillsProps {
    levels: number;
    groups: Map<number, SkillGroup>
}

const Skills: React.FC<SkillsProps> = ({levels, groups}) => {
    return <Section>
       <SkillStack>
        <Title>
            What I Use
        </Title>
        {
            [...Array(levels).keys()].reverse().map(level => <SkillStackRow>
                {
                    groups.get(level)?.skills.map(skill => 
                        <Badge>
                            <BadgeImage src={skill.image}/>
                            <BadgeLabel>
                                {skill.name}
                            </BadgeLabel>
                        </Badge>)
                }
                    <SkillStackRowHover>
                        {groups.get(level)?.name || ""}
                    </SkillStackRowHover>
                </SkillStackRow>
                || "")
        }
    </SkillStack>
    </Section>
}

export default Skills;