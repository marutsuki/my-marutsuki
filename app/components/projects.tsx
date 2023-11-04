'use client'
import { SubTitle, Title } from 'common/styled/Common.styled'
import { Section } from 'common/styled/Container.styled'
import { ActionIcon, ActionIconRow, ProjectSection, RepositoryCard, RepositoryDesc, RepositoryTitle } from 'common/styled/Github.styled'
import { GitHubClient } from 'data/github.client'
import { type Repository } from 'data/model/Repository'
import { useGithubClient } from 'hooks/useGithubClient'
import { type GetStaticProps } from 'next'
import React, { useState } from 'react'
import { newTab } from 'util/redirect'
import CloneWindowWrapper from '../../common/cloneWindow'

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

export const getStaticProps: GetStaticProps<{
  repo?: Repository[]
}> = async () => {
  const repo = await GitHubClient.getRepos()
  return {
    props: {
      repo
    }
  }
}

export default Projects
