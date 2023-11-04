import { Section } from 'common/styled/Container.styled'
import { ProfileBio, ProfileImage, ProfileSkeleton, ProfileTitle } from 'common/styled/Profile.styled'
import React from 'react'

interface ProfileProps {
  avatarRef: string
  name: string
  bio: string
}
const Profile: React.FC<ProfileProps> = ({ avatarRef, name, bio }) => {
  return <Section>
        <ProfileSkeleton>
        <ProfileImage src={avatarRef}/>
        <section>
            <ProfileTitle>
                {name}
            </ProfileTitle>
            <ProfileBio>
                {bio}
            </ProfileBio>
        </section>
    </ProfileSkeleton>
        </Section>
}

export default Profile
