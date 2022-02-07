import React, { useReducer } from "react";
import { useField } from "formik";
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

export const GameVoteField = ({ id, label, ...props }) => {
  const [inputProps, meta] = useField(props);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RateArea>
      <button
        type="button"
        style={{ backgroundColor: "transparent", border: "0" }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        <img alt="" style={{ width: "24px", height: "24px" }} src="https://img.icons8.com/nolan/64/chevron-down.png" />
      </button>
      <GameCommentFormStyle>
        {label && <label htmlFor={id}>{label}</label>}

        <input
          id={id}
          {...inputProps}
          {...props}
          className="input--vote"
          /** NÃO DECOBRI COMO PASSAR O VALOR DESSE CUSTOM FIELD PARA GRAVAR NO LOCAL STORAGE
           *
           *  SÓ VOU IMPLEMENTAR NO REPOSITÓRIO OFICIAL DEPOIS QUE RECEBER A NOTA DESSE PROJETO AVALIATIVO
           *
           *   VOU FICAR DEVENDO ESSA =(           *
           */
          value={state.vote}
          onChange={(v) => {
            props.setFieldValue(state.vote, v);
          }}
        />

        {meta.error && <div>{meta.error.toString()}</div>}
      </GameCommentFormStyle>
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
