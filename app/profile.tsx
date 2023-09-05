import { ProfileBio, ProfileImage, ProfileSkeleton, ProfileTitle } from "common/Profile.styled";
interface ProfileProps {
    avatarRef: string,
    name: string,
    bio: string
}
const Profile: React.FC<ProfileProps> = ({avatarRef, name, bio}) => {
    return <ProfileSkeleton>
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
}

export default Profile;