import styled from "styled-components";

export const NewsCardStyle = styled.article`
    object-fit: cover;
    display: inline-flex;
    width: 100%;
    height: 100%;
    padding: 0px 0px 0px 0px;

    transform: scale(0.9);
    transition: all ease 0.2s;

    :hover {                
        transform: scale(0.98);        
    } 
`;

export const NewsCardImg = styled.div`
    display: flex;
`;

export const NewsContentArea = styled.article`
    background-color: #333;
    width: 100%;
`;

export const NewsTitle = styled.h2`
    text-align: center;
    color: #bee6fd;
`;

export const NewsUrlButton = styled.button`
    cursor: pointer;
    margin: 50px 0 0 45px;
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;    
    background-color: #FFF;
    color: #333;
    
    opacity: 1;
    transition: all ease 0.2s;
    :hover{
        opacity: 0.7;
    }    
`;