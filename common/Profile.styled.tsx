import { styled } from "styled-components";

export const ProfileSkeleton = styled.div`
    display: grid;
    grid-template:
        "image title"
        "image bio"
`;

export const ProfileImage = styled.img`
    max-width: 15rem;
    border-radius: 50%;
}
`

export const ProfileTitle = styled.h1`
    text-align: right;
`

export const ProfileBio = styled.p`
    text-align: right;
`