import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { usePersistedState } from "../../../utils/usePersistedState";

export const GameComments = ({ gameId }) => {
  console.log(gameId);
  let key = `commentsOfGame_${gameId}`;
  const actualStorageGameComments = localStorage.getItem(key);

  const [storageGameComments, setStorageGameComments] = usePersistedState(key, actualStorageGameComments);
  const [commentsId, setCommentsId] = useState(0);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setCommentsId(commentsId + 1);
    console.log(commentsId);

    setStorageGameComments(JSON.stringify(values, null, 2));
    /** preciso cirar no storage um json
     * [{...},{...},{...},{...},{...},]
     *
     * onde:
     *
     * 0 {id: 1, name: 'douglas', email:'aaa@aaa.aaa', comment:'aaaaaaaaaa a aa a a a a a'},
     * 1 {id: 2, name: 'virginia', email:'bbbb@bbb.bbb', comment:'bbbbbbbbbb b bb b b b b b'},
     * 2 {id: 3, name: 'maria', email:'cccc@ccc.ccc', comment:'cccccccccc c cc c c c c c'},
     *
     * */

    setSubmitting(false);
    resetForm();

    //simulando a chamada para api com setTimeout
    // console.log("ActionsXXX: ", actions);
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    //   resetForm();
    // }, 500);

    /*
        MINHA IDÉIA É USAR UM useState PARA CRIAR UM JSON VAZIO NO STORAGE E ENTÃO
        
        PEGAR ESSE JSON DO FORM E SETAR O STATE DO JSON ANTIGO
    */
    /** ao fazer o submit: deverá salvar no localstorage e limpar o form */
  };

  const initialFormValues = {
    Name: "",
    Email: "",
    Comments: "",
  };

  const schemaVerify = Yup.object().shape({
    Name: Yup.string().required(),

    Email: Yup.string().email().required(),

    Comments: Yup.string().required().min(10).max(500),
  });

  return (
    <>
      <h1>Comments and Ratings</h1>
      <Formik initialValues={initialFormValues} onSubmit={handleSubmit} validationSchema={schemaVerify} validateOnMount>
        {({ isSubmitting, isValid }) => (
          <Form>
            {/* {console.log("isValid",isValid)} */}
            {/* <div style={{display:'flex', flexDirection:'column'}}> */}
            <Field name="Name" placeholder="Your name" />
            <ErrorMessage style={{ color: "red" }} component={"span"} name="Name" />
            {/* </div> */}

            {/* <div style={{display:'flex', flexDirection:'column'}}> */}
            <Field name="Email" placeholder="Your e-mail" />
            <ErrorMessage style={{ color: "red" }} component={"span"} name="Email" />
            {/* </div> */}
            {/* <div style={{display:'flex', flexDirection:'column'}}> */}
            <Field name="Comments" placeholder="Your comments" type="textarea" />
            <ErrorMessage style={{ color: "red" }} component={"span"} name="Comments" />
            {/* </div> */}

            <button type="submit" disabled={isSubmitting || !isValid}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
