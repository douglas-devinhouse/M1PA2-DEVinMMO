import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CommentaryItemList, CommentsContainerStyle, FormButton, GameCommentFormStyle } from "./GameComments.styles";
import TextArea from "./Textarea";
import { GameVote } from "./GameVote";

export const GameComments = ({ gameId }) => {
  const [gameComments, setGameComments] = useState([]);
  useEffect(() => {
    const commentsStorage = localStorage.getItem("GAME_COMMENTS");
    if (commentsStorage) {
      const items = JSON.parse(commentsStorage);
      const filter = items.find((item) => item.id === gameId);
      setGameComments(filter);
    }
  }, [gameId]);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log({ ...values });
    const commentsStorage = localStorage.getItem("GAME_COMMENTS");

    const item = {
      id: Math.random().toString(16).slice(2),
      ...values,
    };

    let oldComments = [];
    if (gameComments?.comments) {
      oldComments = [...gameComments?.comments];
    }

    const newItems = [{ id: gameId, comments: [...oldComments, item] }];
    setGameComments(...newItems);

    if (commentsStorage) {
      const items = JSON.parse(commentsStorage);
      const newList = items.filter((item) => item.id !== gameId);
      localStorage.setItem("GAME_COMMENTS", JSON.stringify([...newList, ...newItems]));
    } else {
      localStorage.setItem("GAME_COMMENTS", JSON.stringify(newItems));
    }

    setSubmitting(false);
    resetForm();
  };

  const initialFormValues = {
    Name: "",
    Email: "",
    Comments: "",
    Vote: 0,
  };

  const schemaVerify = Yup.object().shape({
    Name: Yup.string().required().max(18),

    Email: Yup.string().email().required(),

    Comments: Yup.string().required().min(10).max(500),

    Vote: Yup.number(),
  });

  return (
    <>
      <CommentsContainerStyle>
        <h1>Comments and Ratings</h1>

        {gameComments?.comments?.map((item) => (
          <>
            <CommentaryItemList>
              <div className="comment--profile">
                <div>
                  <h3>{item.Name}</h3>
                </div>
                <div>
                  <img
                    className="comment--profile--image"
                    alt=""
                    src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-joystick-computer-xnimrodx-lineal-gradient-xnimrodx.png"
                  />
                </div>
              </div>
              <div className="comentary">
                <p>{item.Comments}</p>
              </div>
            </CommentaryItemList>
          </>
        ))}

        <GameCommentFormStyle>
          <h1 style={{ textAlign: "left" }}>Rate this game</h1>
          <Formik
            initialValues={initialFormValues}
            onSubmit={handleSubmit}
            validationSchema={schemaVerify}
            validateOnMount
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Field className="input--form input--name" name="Name" placeholder="Your name" />
                    <ErrorMessage
                      style={{ color: "#E3655B", fontSize: "0.8em", textAlign: "left" }}
                      component={"span"}
                      name="Name"
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Field className="input--form input--email" name="Email" placeholder="Your e-mail" />
                    <ErrorMessage
                      style={{ color: "#E3655B", fontSize: "0.8em", textAlign: "left" }}
                      component={"span"}
                      name="Email"
                    />
                  </div>

                  {/* aqui pretgendo colocar o esquema de ratting */}
                  <GameVote name="Vote" />
                </div>

                {/* <Field className="text--area" name="Comments" placeholder="Your comments" type="textarea" /> */}

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <TextArea
                    style={{ margin: "8px 0" }}
                    label="textarea"
                    rows="5"
                    name="Comments"
                    placeholder="Your comments"
                  />
                  <ErrorMessage
                    style={{ color: "#E3655B", fontSize: "0.8em", textAlign: "left" }}
                    component={"span"}
                    name="Comments"
                  />

                  <FormButton className="form--button" type="submit" disabled={isSubmitting || !isValid}>
                    Send
                  </FormButton>
                </div>
              </Form>
            )}
          </Formik>
        </GameCommentFormStyle>
      </CommentsContainerStyle>
    </>
  );
};
