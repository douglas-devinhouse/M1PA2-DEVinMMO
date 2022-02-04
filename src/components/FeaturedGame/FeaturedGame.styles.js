import styled from "styled-components";

export const FeaturedStyle = styled.div`
    height: 100vh;
    position: absolute;    
`;

export const FeaturedVertical = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #111 25%, transparent 75%);
`;

export const FeaturedTitle = styled.div`
    padding: 100px 0px 0px 45px;
    font-size: 3em;
    font-weight: bold;
    color: #FFF;
`;

export const FeaturedInfo = styled.div`
    padding: 10px 0px 0px 45px;
    font-size: 1.5em;
    font-weight: bold;
    color: #FFF;
`;

export const FeaturedDeveloper = styled.div`
    display: inline-block;
    color: #46d369;    
    margin-right: 15px;
`;

export const FeaturedRelease = styled.div`
    display: inline-block;
    margin-right: 15px;
`;

export const FeaturedGenre = styled.div`
    display: inline-block;
    margin-right: 15px;  
`;

export const FeaturedDescription = styled.div`
    margin: 30px 0 0px 45px;
    font-size: 1.5em;
    color: #999;
    max-width: 45%;
`;

export const FeaturedButtom = styled.a`
    cursor: pointer;
    margin: 20px 0 0 45px;
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    padding: 5px 15px;
    border-radius: 5px;
    text-decoration: none;    
    background-color: #46d369;
    color: #111;
    
    opacity: 1;
    transition: all ease 0.2s;
    :hover{
        opacity: 0.7;        
    }
`;

export const FeaturedRequirements = styled.div`
    margin: 40px 0 0 45px;
    font-size: 1.2em;
    color: #999;
    max-width: 45%;
`;