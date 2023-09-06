import { keyframes, styled } from 'styled-components'

const GRADIENT = 'linear-gradient(90deg, transparent, var(--primary-color) 25%, var(--primary-color) 75%, transparent)'

const Expand = keyframes`
    0% {
        width: 0;
        opacity: 0%;
    }
    100% {
        width: 100%;
        opacity: 100%;
    }
`
export const Separator = styled.hr`
    background: ${GRADIENT};
    border: none;
    height: 5px;
    animation: 0.5s ease-out ${Expand};
`

export interface TooltipProps {
  theme: {
    left: string
    top: string
  }
}
export const Tooltip = styled.div<TooltipProps>`
    position: absolute;
    background: white;
    border: solid 1px grey;
    display: none;
    padding: 2px;
    font-size: 0.8rem;
    white-space: nowrap;
    left: ${props => props.theme.left};
    top: ${props => props.theme.top};
`
export const Title = styled.h1`
    text-align: center;
    width: 100%;
    margin: 2rem 0;
    font-size: 1.5rem;
`

export const SubTitle = styled.p`
    text-align: center;
    width: 100%;
    margin: 0.5rem 0;
    font-size: 0.9rem;
    font-style: italic;
    color: var(--secondary-color);
`
export const TextBlock = styled.p`
    text-align: center;
    width: 100%;
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const DataTable = styled.table`
    & tr {
        height: 4rem;
        width: 100%;
        display: grid;
        place-items: center;
        grid-template-columns: 0.5fr 1fr;
        grid-template-areas:
            'col1 col2'
            'sep sep'
        
    }

    & tr::after {
        grid-area: sep;
        content: '';
        background: ${GRADIENT};
        width: 80%;
        height: 2px;
        margin: 10px 0;
    }

    & td {
        width: 50%;
        padding: 5px;
    }

    & td:nth-child(1) {
        grid-area: col1;
        background: var(--accent-color);
        border-radius: 10px;
        width: 100%;
        text-align: center;
    }
    & td:nth-child(2) {
        grid-area: col2;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        text-align: right;
    }
    & td:nth-child(2) * {
        margin: 0 5px;
    }
    
    width: 100%;
`

export const Link = styled.a`
    &:visited {
        color: var(--secondary-color);
    }
    color: cyan;
`
