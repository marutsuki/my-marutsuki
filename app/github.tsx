import { FlexColumn, FlexRow, SubTitle, TextBlock, Title, Tooltip } from "common/Common.styled";
import { GithubProfileCard, ProfileImage } from "common/Github.styled";
import { ProfileTitle } from "common/Profile.styled";
import { User } from "data/model/User";
import { useGithubClient } from "hooks/useGithubClient";
import { newTab } from "util/redirect";

const GithubProfile: React.FC<{}> = () => {
    const user = useGithubClient<User>(data => data.user);
    if (!user) {
        return null;
    }
    return <><Title>My Github</Title>
        <GithubProfileCard onClick={() => newTab(user.htmlUrl)}>
            <FlexRow>
                <ProfileImage src={user.avatarUrl || ""}/>
                <FlexColumn>
                    <ProfileTitle>{user.name}</ProfileTitle>
                    <SubTitle>Public Repos: {user.publicRepos}</SubTitle>
                    <TextBlock>{user.bio}</TextBlock>
                </FlexColumn>
                
            </FlexRow>
            <Tooltip>Github profile</Tooltip>
        </GithubProfileCard>
    </>
}

export default GithubProfile;