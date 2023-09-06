import { FlexColumn, FlexRow, SubTitle, TextBlock, Title, Tooltip } from 'common/Common.styled'
import { Section } from 'common/Container.styled'
import { GithubProfileCard, ProfileImage } from 'common/Github.styled'
import { ProfileTitle } from 'common/Profile.styled'
import { type User } from 'data/model/User'
import { useGithubClient } from 'hooks/useGithubClient'
import React from 'react'
import { newTab } from 'util/redirect'

const GithubProfile: React.FC<unknown> = () => {
  const user = useGithubClient<User>(data => data.user)
  if (user === null) {
    return null
  }
  return <Section><Title>My Github</Title>
        <GithubProfileCard onClick={() => { newTab(user.htmlUrl) }}>
            <FlexRow>
                <ProfileImage src={user.avatarUrl}/>
                <FlexColumn>
                    <ProfileTitle>{user.name}</ProfileTitle>
                    <SubTitle>Public Repos: {user.publicRepos}</SubTitle>
                    <TextBlock>{user.bio}</TextBlock>
                </FlexColumn>

            </FlexRow>
            <Tooltip>Github profile</Tooltip>
        </GithubProfileCard>
    </Section>
}

export default GithubProfile
