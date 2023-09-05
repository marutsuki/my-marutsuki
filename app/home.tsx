import Profile from "app/profile";
import { ProfileThemeWrapper, SkinnyLayout, VerticalMiddleLayout } from "common/Container.styled";

const Home: React.FC<{}> = () => {
    return <VerticalMiddleLayout>
        <SkinnyLayout>
            <ProfileThemeWrapper>
                <Profile name="Lucien" bio="During the weekdays, a Software Engineer. During the weekends, a digital artist and musician." avatarRef="/images/me.png"/>
            </ProfileThemeWrapper>
        </SkinnyLayout>
    </VerticalMiddleLayout>
}

export default Home;