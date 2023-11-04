'use client'
import { keyframes, styled } from 'styled-components'

export const App = styled.html`
    --bg-color: #202329;
    --primary-color: LightSteelBlue;
    --secondary-color: #8fabbf;
    --accent-color: #404a5c;
    --accent-color-2: #1b1c24;
    --highlight-color: #2c3940;
    --shadow-color: rgba(0, 0, 0, 0.2);

    height: 100%;
`

export const Body = styled.body`
    background-color: var(--bg-color);
    height: 100%;
    & * {
        box-sizing: content-box;
    }
`

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
    position: absolute;
    top: 25%;
    max-width: ${props => props.theme.width};

    @media (max-width: 480px) {
        max-width: 440px;
        top: 10%;
    }
`

SkinnyLayout.defaultProps = {
  theme: {
    width: '800px'
  }
}

const BlurIn = keyframes`
    0% {
        -webkit-filter: blur(2px);
        filter: blur(2px);
        opacity: 0%;
    }
    100% {
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 100%;
    }
`
export const Section = styled.div`
    margin: 2rem 0;
    padding: 50px;

    &:hover {
        background: var(--accent-color-2);
    }

    border-radius: 20px;
    transition: all linear 0.1s;
    animation: 2s ease-out ${BlurIn};

    @media (max-width: 480px) {
        padding: 10px;
        margin: 0;
    }
`

export const ProfileThemeWrapper = styled.div`
    color: var(--primary-color);
`
