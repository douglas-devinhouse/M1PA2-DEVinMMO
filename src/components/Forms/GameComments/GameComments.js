import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  CommentaryItemList,
  CommentsContainerStyle,
  FormButton,
  GameCommentFormStyle,
  ListCommentsStyle,
} from "./GameComments.styles";
import TextArea from "./Textarea";
import { GameVote } from "./GameVote";

const ItemComments = ({ item }) => {
  return (
    <div style={{ padding: "15px 0" }}>
      <div>
        <h3>{item.Name}</h3>
        {/* exibir aqui o rating */}
      </div>
      <article>
        <p>{item.Comments}</p>
      </article>
    </div>
  );
};

const LoadComments = (parsedActualListStored) => {
  let list = [];
  if (parsedActualListStored) {
    for (let itemStored in parsedActualListStored) {
      list.push(parsedActualListStored[itemStored]);
    }
  }
  return (
    <div>
      <ListCommentsStyle>
        {parsedActualListStored.actualStorageValue.length > 0 &&
          parsedActualListStored.actualStorageValue.map((item) => (
            <CommentaryItemList>
              <div style={{ marginRight: "15px" }}>
                <img
                  alt=""
                  src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-joystick-computer-xnimrodx-lineal-gradient-xnimrodx.png"
                />
              </div>
              <div>
                <ItemComments item={item} />
              </div>
            </CommentaryItemList>
          ))}
      </ListCommentsStyle>
    </div>
  );
};

export const GameComments = ({ gameId }) => {
  let key = `commentsOfGame_${gameId}`;
  const actualStorageValue = localStorage.getItem(key);
  let parsedActualListStored = [];
  if (actualStorageValue) {
    parsedActualListStored = JSON.parse(actualStorageValue);
  }

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    let list = [];

    console.log(values);

    if (parsedActualListStored) {
      for (let itemStored in parsedActualListStored) {
        list.push(parsedActualListStored[itemStored]);
      }
    }

    list.push(values);
    localStorage.setItem(key, JSON.stringify(list));

    setSubmitting(false);
    resetForm();
    <LoadComments actualStorageValue={parsedActualListStored} />;
  };

  const initialFormValues = {
    Name: "",
    Email: "",
    Comments: "",
    Vote: "0",
  };

  const schemaVerify = Yup.object().shape({
    Name: Yup.string().required().max(18),

    Email: Yup.string().email().required(),

    Comments: Yup.string().required().min(10).max(500),

    Vote: Yup.string(),
  });

  return (
    <CommentsContainerStyle>
      <h1>Comments and Ratings</h1>

      <LoadComments actualStorageValue={parsedActualListStored} />

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
              {console.log(isValid)}
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
  );
};
