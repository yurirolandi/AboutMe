import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../Colors/Colors';

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    position: absolute;
    padding: 4px;
    border-radius: 2px;
    margin-top: 20px;

    button{
        background-color: ${primaryColor};
        color: white;
        margin: 10px;
        border-radius: 2px;
        padding: 6px;
        border: none !important;
        
        :hover {
            background-color: ${primaryDarkColor};
            color: ${primaryColor}; 
        }
       
    }
`;