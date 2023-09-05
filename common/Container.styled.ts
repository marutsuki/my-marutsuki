'use client';
import { styled } from "styled-components";

export const App = styled.html`
    --bg-color: #202329;
    --primary-color: LightSteelBlue;
    --secondary-color: #8fabbf;
    --accent-color: #404a5c;
    --highlight-color: #6c748c;
    --shadow-color: rgba(0, 0, 0, 0.2);

    height: 100%;
`

export const Body = styled.body`
    background-color: var(--bg-color);
    height: 100%;
    box-sizing: content-box;
`;

export const CenteredLayout = styled.main`
    height: 100%;
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
    color: var(--primary-color);
`