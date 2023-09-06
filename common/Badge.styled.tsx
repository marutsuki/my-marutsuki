import { styled } from 'styled-components'

export const Badge = styled.div`
    display: flex;
    justify-content: space-between;
    height: 2rem;
    width: 10rem;
    background-color: var(--accent-color);
    box-shadow: 1px 1px 1px 1px var(--shadow-color);
    border-radius: 2px;
    padding: 5px;
    margin: 2px;
`

export const BadgeImage = styled.img`
    max-width: 2rem;
    border-radius: 50%;
`

export const BadgeLabel = styled.label`
    margin-top: 0.5rem;
`

export const SkillStackRowHover = styled.div`
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    height: 5rem;
    width: 0%;
    transition: all linear 0.1s;
    overflow: hidden;
    text-align: center;
    line-height: 2.5rem;
    backdrop-filter: blur(2px);
`

export const SkillStackRow = styled.div`
    &:hover ${SkillStackRowHover} {
        width: 100%;
    }
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
`

export const SkillStack = styled.div`
`
