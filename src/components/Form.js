import React from "react";
import styled from "styled-components/macro";
import { FiCheck } from "react-icons/fi";

import uuid from "react-uuid";
import { FiX } from "react-icons/fi";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import Error from "./Error";
import * as Yup from "yup";

function Form({ updateItems, item, setIsVisible }) {
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, "Must have at least 4 characters")
      .max(255, "Must be shorter than 255 characters")
      .required("Must enter a title"),
    description: Yup.string()
      .min(4, "Must have at least 4 characters")
      .required("Must enter a description"),
    file: Yup.object().label("Datei"),
  });

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "skyblue",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "grey",
        },
        "&:hover fieldset": {
          borderColor: "skyblue",
        },
        "&.Mui-focused fieldset": {
          borderColor: "skyblue",
        },
      },
    },
  })(TextField);

  const handleSubmit = (values) => {
    console.log("Values in HandleSubmit", values.title);
    item.id
      ? updateItems({
          id: item.id,
          title: values.title,
          description: values.description,
          uris: values.file || "",
        })
      : updateItems({
          id: uuid(),
          title: values.title,
          description: values.description,
          uris: values.file || "",
        });
    setIsVisible(false);
  };

  return (
    <MainForm>
      <Formik
        initialValues={{
          title: item.title,
          description: item.description,
          file: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: 348,
            }}
            onSubmit={() => handleSubmit(values)}
          >
            <FiX
              onClick={() => setIsVisible(false)}
              size={34}
              color="skyblue"
              style={{ alignSelf: "flex-end", paddingBottom: 10 }}
            />
            <CssTextField
              name="title"
              id="outlined-search"
              label="Titel"
              type="search"
              variant="outlined"
              autoFocus
              onChange={handleChange}
              value={values.title}
              className={touched.title && errors.title ? "has-error" : null}
              style={{ borderColor: "skyblue" }}
            />
            <Error touched={touched.title} message={errors.title} />

            <CssTextField
              name="description"
              id="outlined-search"
              label="Beschreibung"
              type="search"
              multiline
              rows={4}
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              className={
                touched.description && errors.description ? "has-error" : null
              }
              style={{ borderColor: "skyblue", marginTop: 20 }}
            />
            <Error touched={touched.description} message={errors.description} />

            <FileInput
              type="file"
              name="file"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.file}
              accept="image/*, .pdf"
              style={{ borderColor: "skyblue", marginTop: 20 }}
            />
            {item.uris && <div>{item.uris}</div>}
            <div>{values.file}</div>

            <Button
              variant="contained"
              style={{ backgroundColor: "skyblue", marginTop: 20 }}
              type="submit"
            >
              <FiCheck size={30} color="white" />
            </Button>
          </form>
        )}
      </Formik>
    </MainForm>
  );
}

export default Form;
const MainForm = styled.form`
  position: absolute;
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
  background: #f0faff;
`;

const FileInput = styled.input`
  height: 48px;
  font-size: 20px;
  border-color: skyblue;
`;
