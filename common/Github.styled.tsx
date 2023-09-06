import React from 'react'
import { keyframes, styled } from 'styled-components'
import { Tooltip } from './Common.styled'

export const ProjectSection = styled.section`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
`
export const RepositoryCard = styled.a`
    &:hover {
        background: var(--highlight-color);
        color: var(--bg-color);
    }

    &:hover * {
        color: var(--bg-color);
    }

    display: flex;
    flex-direction: column;
    height: calc(9rem + 60px);
    width: 200px;
    margin: 1rem;

    background: var(--accent-color);
    box-shadow: 1px 1px 1px 1px var(--shadow-color);
    border-radius: 10px;

    padding: 10px;

    transition: all linear 0.1s;

    color: var(--primary-color);
    text-decoration: none;
`

export const RepositoryImage = styled.img`
    max-width: 190px;
`

export const RepositoryTitle = styled.h3`
    margin: 2px;
`

export const RepositoryDesc = styled.p`
    font-size: 0.9rem;
`

interface ActionIconInternalProps {
  theme: {
    width?: string
    contrast?: string
  }
}

export const ActionIconInternal = styled.img<ActionIconInternalProps>`
    &:hover {
        filter: invert(90%);
    }

    &:active {
        filter: invert(90%) blur(2px);
    }

    position: relative;

    height: ${props => props.theme.width || '40px'};
    max-width: ${props => props.theme.width || '40px'};
    
    filter: invert(calc(${props => props.theme.contrast || '10%'}));

    transition: all linear 0.1s;

    cursor: pointer;
`

export const ActionIconWrapper = styled.div`
    &:hover ${Tooltip} {
        display: block;
        left: 50%;
    }

    position: relative;
`

interface ActionIconProps {
  src: string
  onClick: () => void
  tooltip?: string
  width?: string
  contrast?: string
}
export const ActionIcon: React.FC<ActionIconProps> = ({ src, onClick, tooltip, width, contrast }) => {
  return <ActionIconWrapper>
        <ActionIconInternal src={src} onClick={onClick} theme={{ width, contrast }}/>
        {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </ActionIconWrapper>
}
export const ActionIconRow = styled.div`
    & > * {
        margin: 0 2px;
    }

    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: auto;
    margin-left: auto;
`

const FadeInAnimation = keyframes`
    0% {
        opacity: 0%;
    }
    100% {
        opacity: 100%;
    }
`
export const CloneWindow = styled.div`
    background: white;
    border: solid 1px grey;

    position: absolute;

    width: 240px;
    left: 0;
    top: 100%;

    box-shadow: 1px 1px 1px 1px var(--shadow-color);

    border-radius: 5px;

    z-index: 1;

    padding: 10px;

    animation: ${FadeInAnimation} 0.2s linear
`

export const CloneWindowTitle = styled.h3`
    font-size: 1rem;
    color: black;
    margin: 5px;
    margin-bottom: 10px;
`

export const CloneUrl = styled.input`
    background: #e3e3e3;
    border: none;
    border-right: 1px solid black;

    padding: 2px;
    white-space: nowrap;
    overflow-x: scroll

    color: #808080;

    width: calc(100% - 30px);

    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
`

export const CloneInput = styled.div`
    display: flex;

    border: solid 1px lightgrey;
    border-radius: 10px;
    background: #e3e3e3;
    
    height: 25px;

    & img {
        max-height: 25px;
    }

    & img:hover {
        filter: invert(70%);
    }
    
    justify-content: space-between;
    overflow: hidden;
`

export const CloneTabBar = styled.div`
    display: flex;

    & > * {
        margin-right: 10px;
    }

    margin: 5px;
`

export const CloneTabButton = styled.button`
    border: none;
    background: none;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    transition: all linear 0.1s;

    padding: 5px;

`

export const ActiveTabBar = styled.hr`
    background: red;
    height: 1px;
    width: 100%;
`

/**
 * Begin Github profile components
 */

export const GithubProfileCard = styled.div`
    &:hover {
        box-shadow: 1px 1px 4px 4px var(--primary-color);
    }

    &:hover ${Tooltip} {
        display: block;
        left: 95%;
        top: 95%;
        color: black;
    }

    &:active {
        background: var(--primary-color);
        color: var(--bg-color);
    }

    
    position: relative;
    padding: 30px;
    background: var(--accent-color);
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px var(--shadow-color);

    transition: all linear 0.1s;
`

export const ProfileImage = styled.img`
    max-width: 10rem;
    border-radius: 50%;
}
`
