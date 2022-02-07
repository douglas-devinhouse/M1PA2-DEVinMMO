import React, { useReducer } from "react";
import { Field } from "formik";
import { GameCommentFormStyle, RateArea } from "./GameComments.styles";

const initialState = { vote: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      if (state.vote < 10) {
        return { vote: state.vote + 1 };
      } else return { vote: state.vote };
      break;
    case "decrement":
      if (state.vote > 0) {
        return { vote: state.vote - 1 };
      } else return { vote: state.vote };
      break;
    default:
      throw new Error();
  }
}

export const GameVote = (props) => {
  const { label, name, ...rest } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RateArea>
      <div></div>
      <button
        type="button"
        style={{ backgroundColor: "transparent", border: "0" }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        <img alt="" style={{ width: "24px", height: "24px" }} src="https://img.icons8.com/nolan/64/chevron-down.png" />
      </button>
      <GameCommentFormStyle>
        <Field
          className="input--vote"
          id={name}
          name={name}
          {...rest}
          value={state.vote}
          onChange={(v) => {
            props.setFieldValue(state.vote, v);
          }}
        />
      </GameCommentFormStyle>
      {/* {state.vote} */}
      <button
        type="button"
        style={{ backgroundColor: "transparent", border: "0" }}
        onClick={() => dispatch({ type: "increment" })}
      >
        <img alt="" style={{ width: "24px", height: "24px" }} src="https://img.icons8.com/nolan/64/chevron-up.png" />
      </button>
    </RateArea>
  );
};
