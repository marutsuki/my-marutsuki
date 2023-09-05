import { styled } from "styled-components";

export const Separator = styled.hr`
    background: linear-gradient(90deg, transparent, var(--primary-color) 25%, var(--primary-color) 75%, transparent);
    border: none;
    height: 5px;
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