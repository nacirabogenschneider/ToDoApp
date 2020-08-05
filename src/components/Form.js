import React, { useState } from "react";
import styled from "styled-components/macro";
import { FiCheck } from "react-icons/fi";
import AppButton from "./AppButton";
import uuid from "react-uuid";
import { FiX } from "react-icons/fi";

function Form({ updateItems, item, setIsVisible }) {
  const [todo, setTodo] = useState(item);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");

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
          size={30}
          color="skyblue"
          style={{ alignSelf: "flex-end" }}
        />
        <TitleInput
          type="text"
          name="title"
          required
          placeholder="Titel eintragen"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          defaultValue={item && item.title}
        />
        <DescriptionInput
          required
          defaultValue={item && item.description}
          type="text"
          name="description"
          placeholder="Beschreibung eintragen"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <FileInput
          type="file"
          name="file"
          onSelect={(e) => handleFileSelect(e)}
          value={fileInputState}
          accept="image/*, .pdf"
        />
        <AppButton onClick={handleSubmit}>
          <FiCheck size={30} color="white" />
        </AppButton>
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

const TitleInput = styled.input`
  height: 48px;
  width: 348px;
  font-size: 20px;
  border-radius: 8px;
  border-color: skyblue;
  padding-left: 10px;
`;
const DescriptionInput = styled.input`
  height: 200px;
  font-size: 20px;
  border-radius: 8px;
  border-color: skyblue;
  padding-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const FileInput = styled.input`
  height: 48px;
  font-size: 20px;
  border-color: skyblue;
`;
const H1 = styled.h1`
  text-align: center;
  font-family: verdana;
  font-size: 30px;
  color: skyblue;
`;
const PreviewWrapper = styled.div`
  width: 348px;
  max-width: 348px;
  margin-left: 20px;
  padding: 10px;
`;
const ImagePreview = styled.img`
  width: 100%;
  height: auto;
`;
