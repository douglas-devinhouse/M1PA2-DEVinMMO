import React from "react";
import { Field } from "formik";

export default function TextArea(props) {
  const { label, name, ...rest } = props;
  return (
    <>
      <div>
        <label htmlFor={name}></label>
        <Field as="textarea" className="text--area" id={name} name={name} {...rest} />
      </div>
    </>
  );
}
