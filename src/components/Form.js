import React, { useState } from "react";
import styled from "styled-components/macro";
import { FiCheck } from "react-icons/fi";

import uuid from "react-uuid";
import { FiX } from "react-icons/fi";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

function Form({ updateItems, item, setIsVisible }) {
  const [todo, setTodo] = useState(item);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
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

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFiles(file);
    setFileInputState(e.target.value);
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setPreviewSource(reader.result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    item.id
      ? updateItems({
          id: item.id,
          title: todo.title,
          description: todo.description,
          uris: selectedFiles,
        })
      : updateItems({
          id: uuid(),
          title: todo.title,
          description: todo.description,
          uris: previewSource,
        });
    setIsVisible(false);
  };

  return (
    <MainForm>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: 348,
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <FiX
          onClick={() => setIsVisible(false)}
          size={34}
          color="skyblue"
          style={{ alignSelf: "flex-end", paddingBottom: 10 }}
        />
        <FormControl>
          <CssTextField
            id="outlined-search"
            label="Titel"
            type="search"
            variant="outlined"
            value={item && item.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            style={{ borderColor: "skyblue", marginBottom: 20 }}
          />
        </FormControl>
        <FormControl>
          <CssTextField
            id="outlined-search"
            label="Beschreibung"
            type="search"
            multiline
            rows={4}
            variant="outlined"
            value={item.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            style={{ borderColor: "skyblue", marginBottom: 20 }}
          />
        </FormControl>
        <FileInput
          type="file"
          name="file"
          onChange={(e) => handleFileSelect(e)}
          value={fileInputState}
          accept="image/*, .pdf"
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "skyblue" }}
          onClick={handleSubmit}
        >
          <FiCheck size={30} color="white" />
        </Button>
      </form>
      {previewSource && (
        <PreviewWrapper>
          <ImagePreview src={previewSource} alt=""></ImagePreview>
        </PreviewWrapper>
      )}
    </MainForm>
  );
}

export default Form;
const MainForm = styled.form`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0faff;
`;

const FileInput = styled.input`
  height: 48px;
  font-size: 20px;
  border-color: skyblue;
`;

const PreviewWrapper = styled.div`
  width: 348px;
  height: auto:
  max-width: 348px;
  margin-top: 20px;
  padding-bottom: 40px;
`;
const ImagePreview = styled.img`
  width: 100%;
  height: auto;
`;
