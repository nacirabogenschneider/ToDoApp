import React, { useState } from "react";
import styled from "styled-components/macro";
import { FiCheck } from "react-icons/fi";
import AppButton from "./AppButton";

function Form({ updateItems, item, setIsVisible }) {
  const [todo, setTodo] = useState(item);
  const handleFileSelect = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    item.id
      ? updateItems({
          id: item.id,
          title: todo.title,
          description: todo.description,
          uri: "",
        })
      : updateItems({
          id: todo[todo.length],
          title: todo.title,
          description: todo.description,
          uri: "",
        });
    setIsVisible(false);
  };

  return (
    <MainForm>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <span onClick={() => setIsVisible(false)}>X</span>
        <input
          type="text"
          name="title"
          placeholder="Titel eintragen"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          defaultValue={item && item.title}
          style={{
            height: 48,
            fontSize: 20,
            padding: 0,
            borderRadius: 8,
            borderColor: "skyblue",
            margin: 20,
            marginTop: 0,
            paddingLeft: 10,
          }}
        />
        <DescriptionInput
          defaultValue={item && item.description}
          type="text"
          name="description"
          placeholder="Beschreibung eintragen"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <input
          type="file"
          name="file"
          onChange={(e) => handleFileSelect(e)}
          style={{
            height: 48,
            fontSize: 20,
            maxWidth: 348,
            padding: 0,
            borderRadius: 8,
            borderColor: "skyblue",
            margin: 20,
            marginTop: 10,
            paddingLeft: 10,
            color: "skyblue",
          }}
          multiple
        />
        <AppButton onClick={handleSubmit}>
          <FiCheck size={30} color="white" />
        </AppButton>
      </form>
    </MainForm>
  );
}

export default Form;
const MainForm = styled.form`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background: #f0faff;
  opacity: 0.95;
`;
const DescriptionInput = styled.input`
  height: 200px;
  font-size: 20px;
  border-radius: 8px;
  border-color: skyblue;
  margin: 20px;
  padding-left: 10px;
  margin-top: 0;
  margin-bottom: 0;
`;
const H1 = styled.h1`
  text-align: center;
  font-family: verdana;
  font-size: 30px;
  color: skyblue;
`;
