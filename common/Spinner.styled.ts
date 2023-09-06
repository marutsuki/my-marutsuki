'use client'
import { keyframes, styled } from 'styled-components'

const loadAnimation = keyframes`
    0% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
     10%,
    59% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
`

const rotateAnimation = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`

const flashAnimation = keyframes`
    35%,
    65% {
        -webkit-filter: blur(2px);
        filter: blur(2px);
        opacity: 50%;
    }
    0%,
    100% {
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 100%;
    }
`
export const Spinner = styled.span`
    color: #ffffff;
    font-size: 90px;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: absolute;
    animation: ${loadAnimation} 1.7s infinite ease, ${rotateAnimation} 1.7s infinite ease;
`

export const Star = styled.span`
    width: 1em;
    height: 1em;
    font-size: 90px;
    position: absolute;
    background-image: url("/images/marustar.png");
    background-size: contain;
    animation: ${rotateAnimation} 1.7s infinite ease-in-out reverse, ${flashAnimation} 1.7s infinite ease-in-out;
`

export const StarNoAnimation = styled.span`
    width: 1em;
    height: 1em;
    font-size: 90px;
    position: absolute;
    background-image: url("/images/marustar.png");
    background-size: contain;
`
