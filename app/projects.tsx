'use client'
import { SubTitle, Title } from 'common/Common.styled'
import { Section } from 'common/Container.styled'
import { ActionIcon, ActionIconRow, ProjectSection, RepositoryCard, RepositoryDesc, RepositoryTitle } from 'common/Github.styled'
import { type Repository } from 'data/model/Repository'
import { useGithubClient } from 'hooks/useGithubClient'
import React, { useState } from 'react'
import { newTab } from 'util/redirect'
import CloneWindowWrapper from './cloneWindow'

const Projects: React.FC<unknown> = () => {
  const repos = useGithubClient<Repository[]>(data => data.repos)
  const [activeKey, setActiveKey] = useState<number | undefined>()

  const openClonePopup = (index: number): void => {
    setActiveKey(index)
  }

  if (repos === null) {
    return null
  }
  return <Section>
        <Title>My Projects</Title>
        <SubTitle>Fetched from GitHub</SubTitle>
        <ProjectSection>

            {
                repos.map((repo, index) =>
                    <RepositoryCard key={index} target="_blank" rel="noopener noreferrer">
                        <RepositoryTitle>{repo.name}</RepositoryTitle>
                        <SubTitle>Last updated: {new Date(repo.lastUpdated).toDateString()}</SubTitle>
                        <RepositoryDesc>{repo.description}</RepositoryDesc>
                        <ActionIconRow>
                            <ActionIcon src="/images/download.png" onClick={() => { openClonePopup(index) }} tooltip="Clone"></ActionIcon>
                            {
                                index === activeKey ? <CloneWindowWrapper repo={repo} onExit={() => { setActiveKey(undefined) }}/> : ''
                            }
                            <ActionIcon src="/images/github.svg" onClick={() => { newTab(repo.htmlUrl) }} tooltip="Repository"/>
                        </ActionIconRow>

                    </RepositoryCard>
                )
            }
        </ProjectSection>
    </Section>
}

export default Projects
