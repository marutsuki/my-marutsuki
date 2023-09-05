import Profile from "app/profile";
import { ProfileThemeWrapper, SkinnyLayout, VerticalMiddleLayout } from "common/Container.styled";
import SkillStack from "./skills";
import OtherSkills from "./otherSkills";
import { Separator } from "common/Common.styled";
import Projects from "./projects";

const Home: React.FC<{}> = () => {
    return <ProfileThemeWrapper>
        <VerticalMiddleLayout>
            <SkinnyLayout>
                <Profile name="Lucien" bio="During the weekdays, a Software Engineer. During the weekends, a digital artist and musician." avatarRef="/images/me.png"/>
                <Separator/>
                <SkillStack levels={4} groups={
                    new Map(
                        [
                            [
                                0,
                                {
                                    name: "Database",
                                    skills: [
                                        {
                                            name: "OracleDB",
                                            image: "/images/oracledb.png"
                                        },
                                        {
                                            name: "MySQL",
                                            image: "/images/mysql.png"
                                        },
                                        {
                                            name: "MongoDB",
                                            image: "/images/mongodb.png"
                                        }
                                    ]
                                }
                                
                            ],
                            [
                                1, 
                                {
                                    name: "Backend",
                                    skills: [
                                        {
                                            name: "Spring",
                                            image: "/images/spring-logo.png"
                                        },
                                        {
                                            name: "Apache Kafka",
                                            image: "/images/kafka.png"
                                        },
                                        {
                                            name: "NodeJS",
                                            image: "/images/node.png"
                                        }
                                    ]
                                }
                            ],
                            [
                                2, 
                                {
                                    name: "Frontend",
                                    skills: [
                                        {
                                            name: "React",
                                            image: "/images/react.png"
                                        },
                                        {
                                            name: "Next",
                                            image: "/images/next.png"
                                        }
                                    ]
                                }
                            ],
                            [
                                3, 
                                {
                                    name: "Cloud",
                                    skills: [
                                        {
                                            name: "AWS",
                                            image: "/images/aws.png"
                                        }
                                    ]
                                }
                            ],
                        ]
                    )
                }
                />
                <Separator/>
                <OtherSkills/>
                <Separator/>
                <Projects/>
            </SkinnyLayout>
        </VerticalMiddleLayout>
    </ProfileThemeWrapper>
}

export default Home;