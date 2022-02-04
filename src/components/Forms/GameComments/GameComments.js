import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const GameComments = ({ gameId }) => {
  let key = `commentsOfGame_${gameId}`;

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    let list = [];
    const actualStorageValue = localStorage.getItem(key);
    if (actualStorageValue) {
      let actualListStored = JSON.parse(actualStorageValue);
      for (let itemStored in actualListStored) {
        list.push(actualListStored[itemStored]);
      }
    }
    list.push(values);
    localStorage.setItem(key, JSON.stringify(list));

    setSubmitting(false);
    resetForm();
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
