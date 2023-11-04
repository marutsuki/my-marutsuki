import { styled } from 'styled-components'
import { Title } from './Common.styled'

export const ProfileSkeleton = styled.div`
    display: grid;
    grid-template:
        "image title"
        "image bio"
`

export const ProfileImage = styled.img`
    max-width: 10rem;
    height: 10rem;
    border-radius: 50%;
}
`

export const ProfileTitle = styled(Title)`
    text-align: right;
`

export const ProfileBio = styled.p`
    text-align: right;
`
