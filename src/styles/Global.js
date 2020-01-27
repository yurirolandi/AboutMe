import styled, { createGlobalStyle } from 'styled-components';
import * as Colors from '../Colors/Colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  sans-serif;
    }

    
    html, body, #root{
        height: 100%;
        background-color: ${Colors.primaryDarkColor};
    }

    button{
        cursor: pointer;
        background-color: ${Colors.primaryColor};
        border: none;
        color: white;
        border-color: ${Colors.primaryColor};
        padding: 10px;
        transition: background-color 1s ease-out;
        border: 2px solid ${Colors.primaryColor}; 
        font-weight: bold;
        :hover{
            background-color: ${Colors.primaryDarkColor};
            color: ${Colors.primaryColor};
        }
    }

    a{
        text-decoration: none;
        color: white;
    }
    ul {
        list-style: none;
    }

`;

export const ContainerColumn = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerRow = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;