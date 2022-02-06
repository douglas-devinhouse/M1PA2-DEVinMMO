import styled, { css } from "styled-components";

export const CommentsContainerStyle = styled.div`
  position: absolute;
  justify-content: space-between;
  z-index: 999;

  margin: -45px 50% 50% 0;
  left: 20%;
  width: 60%;
  padding: 10px;
  text-align: center;
  color: #fff;
`;

export const ListCommentsStyle = styled.ul`
  list-style: none;
  text-align: left;
`;

export const GameCommentFormStyle = styled.div`
  padding: 15px;

  .input--form {
    font-size: 1em;
    width: 150px;
    margin: 0 5px 5px 0;
  }

  .input--email {
    text-transform: lowercase;
  }

  .text--area {
    resize: vertical;
    width: 60%;
    align-items: flex-start;
    display: flexbox;
  }

  .input--vote {
    width: 30px;
  }
`;

export const RateArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -12px;
`;

export const FormButton = styled.button`
  cursor: pointer;
  margin: 10px 0;
  padding: 5px 15px;

  display: inline-block;
  font-size: 1em;
  font-weight: bold;

  border-radius: 5px;
  text-decoration: none;
  background-color: #46d369;
  color: #111;
  width: 100px;

  ${(props) =>
    props.disabled
      ? css`
          background: #e3655b;
        `
      : css`
          background: #5b8c5a;
        `};

  opacity: 1;
  transition: all ease 0.2s;
  :hover {
    opacity: 0.7;
  }
`;

export const CommentaryItemList = styled.li`
  display: flexbox;
  flex-direction: row;
`;
