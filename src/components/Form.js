import React from "react";
import styled from "styled-components/macro";
import { FiCheck } from "react-icons/fi";

import uuid from "react-uuid";
import { FiX } from "react-icons/fi";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";

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

  const formik = useFormik({
    initialValues: {
      title: item.title,
      description: item.description,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
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
    item.id
      ? updateItems({
          id: item.id,
          title: values.title,
          description: values.description,
        })
      : updateItems({
          id: uuid(),
          title: values.title,
          description: values.description,
        });
    setIsVisible(false);
  };

  return (
    <MainForm>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: 348,
        }}
      >
        <FiX
          onClick={() => setIsVisible(false)}
          size={34}
          color="skyblue"
          style={{ alignSelf: "flex-end", paddingBottom: 10 }}
        />
        <TextField
          label="Titel"
          name="title"
          variant="outlined"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.email && formik.errors.title}
          style={{ borderColor: "skyblue" }}
          type="text"
        />
        <TextField
          label="Description"
          name="description"
          variant="outlined"
          value={formik.values.description}
          onChange={formik.handleChange}
          multiline
          rows={4}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          style={{ borderColor: "skyblue", marginTop: 20 }}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "skyblue", marginTop: 20 }}
          type="submit"
        >
          <FiCheck size={30} color="white" />
        </Button>
      </form>
    </MainForm>
  );
}

export default Form;
const MainForm = styled.main`
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
