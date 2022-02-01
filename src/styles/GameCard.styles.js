import styled from "styled-components";

export const GameCardStyle = styled.div`
    display: inline-block;
    width: 350px;
    padding: 0px 0px 0px 0px;    
`;

export const GameCardImg = styled.div`
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    :hover {
        transform: scale(1);
    } 
`;
