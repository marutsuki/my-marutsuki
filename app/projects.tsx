"use client"
import { SubTitle, Title } from "common/Common.styled";
import { ActionIcon, ActionIconRow, ActiveTabBar, CloneInput, CloneTabBar, CloneTabButton, CloneUrl, CloneWindow, CloneWindowTitle, ProjectSection, RepositoryCard, RepositoryDesc, RepositoryImage, RepositoryTitle } from "common/Github.styled";
import { GitHubClient } from "data/github.client"
import { Repository } from "data/model/Repository";
import { useEffect, useRef, useState } from "react"
import CloneWindowWrapper from "./cloneWindow";
import { useGithubClient } from "hooks/useGithubClient";
import { newTab } from "util/redirect";

const Projects: React.FC<{}> = () => {
    const repos = useGithubClient<Repository[]>(data => data.repos || []);
    const [activeKey, setActiveKey] = useState<number | undefined>();

    const openClonePopup = (index: number) => {
        setActiveKey(index);
    }

    return <>
        <Title>My Projects</Title>
        <SubTitle>Fetched from GitHub</SubTitle>
        <ProjectSection>
            
            {
                repos.map((repo, index) => 
                    <RepositoryCard target="_blank" rel="noopener noreferrer">
                        <RepositoryTitle>{repo.name}</RepositoryTitle>
                        <SubTitle>Last updated: {new Date(repo.lastUpdated).toDateString()}</SubTitle>
                        <RepositoryDesc>{repo.description}</RepositoryDesc>
                        <ActionIconRow>
                            <ActionIcon src="/images/download.png" onClick={() => openClonePopup(index)} tooltip="Clone"></ActionIcon>
                            {
                                index === activeKey ? <CloneWindowWrapper repo={repo} onExit={() => setActiveKey(undefined)}/>: ""
                            }
                            <ActionIcon src="/images/github.svg" onClick={() => newTab(repo.htmlUrl)} tooltip="Repository"/>
                        </ActionIconRow>
                        
                    </RepositoryCard>
                )
            }
        </ProjectSection>
    </>
}

export default Projects;