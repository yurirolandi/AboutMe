import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../Colors/Colors';

export const H1 = styled.h1`
    color: ${primaryColor};
    font-size: 40px;
    font-family: sans-serif;
    margin-bottom: 20px;
    ::after{
        content: '';
        display: block;
        width: 40px;
        height: 2px;
        background-color: ${primaryColor}
    }
`;

export const BoxImg = styled.div`
    border: 14px solid white;
    border-radius: 5px;
    img{
        width: 100%;
    }
`;

export const BoxText = styled.div`
    margin: 20px 35px;
    max-width: 400px;

    p{
        margin: 10px 0;
        letter-spacing: 1px;
    }

    h1, h3, p{
        color: white;
    }
    h1{
        font-size: 2rem;
    }
    h3{
        margin: 10px 0;
        font-size: 1.1rem;
    }
`;

export const AboutList = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    margin: 10px 0;
`;

export const AboutContent = styled.div`
    display: flex;
    color: white;
    width: 100%;
    margin: 10px;
    font-size: 1.0rem;
    align-items: baseline;
    label{
        margin: 0;
        color: #090a0c;
        font-weight: 500;        
        flex: 0 0 90px;
        border-right: 1px solid ${secondaryColor};
        max-width: 80px;
        color: ${primaryColor};
        font-weight: bold;
    }

    p{
        margin-bottom: 0;
        padding-left: 15px;
        font-size: 14px;
        color: ${secondaryColor};
        font-size: 1.0rem;
    }
`;