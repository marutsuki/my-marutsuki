'use client';
import { styled } from "styled-components";
export const DarkBackground = styled.body`
    background-color: #202329;
`;

export const CenteredLayout = styled.main`
    height: inherit;
    width: inherit;
    display: grid;
    place-items: center;
`

export const VerticalMiddleLayout = styled.main`
    display: flex;
    justify-content: center;
`

export const SkinnyLayout = styled.main`
    > * {
        margin: 5rem 0;
    }
    position: absolute;
    top: 25%;
    max-width: ${props => props.theme.width};
`

SkinnyLayout.defaultProps = {
    theme: {
        width: "500px"
    }
}

export const ProfileThemeWrapper = styled.div`
    font-family: 'Ubuntu', sans-serif;
    color: LightSteelBlue
`