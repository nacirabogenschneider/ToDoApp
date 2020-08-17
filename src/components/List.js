import React, { useState } from "react";
import styled from "styled-components/macro";
import ListItem from "./ListItem";
import { FiPlus } from "react-icons/fi";
import Form from "./Form";
import Button from "@material-ui/core/Button";
import { loadFromLocal, saveToLocal } from "../utils/localStorage";

function List() {
  const [items, setItems] = useState(loadFromLocal("todos") || []);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    loadFromLocal("selectedTodo") || {}
  );

  function updateItems(item) {
    const isItem = items.some((curr) => curr.id === item.id);
    setSelectedItem({});
    saveToLocal("selectedTodo", {});
    isItem
      ? setItems(items && items.map((i) => (i.id !== item.id ? i : item)))
      : setItems([...items, item]);
    isItem
      ? saveToLocal(
          "todos",
          items && items.map((i) => (i.id !== item.id ? i : item))
        )
      : saveToLocal("todos", [...items, item]);
  }
  return (
    <>
      <Header>ToDo it</Header>
      {!isVisible && (
        <MainSection>
          {items.map((item) => (
            <div style={{ height: "100%" }} key={item.id}>
              <ListItem
                setItems={setItems}
                item={item}
                items={items}
                setIsVisible={setIsVisible}
                setSelectedItem={setSelectedItem}
              />
            </div>
          ))}
          <Button
            variant="contained"
            style={{ backgroundColor: "skyblue", width: 348, marginTop: 10 }}
            onClick={() => setIsVisible(true)}
          >
            <FiPlus size={30} color="white" />
          </Button>
        </MainSection>
      )}

      {isVisible && (
        <Form
          updateItems={updateItems}
          item={selectedItem}
          setIsVisible={setIsVisible}
        />
      )}
    </>
  );
}

export default List;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding-top: 30px;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: skyblue;
  font-size: 40px;
  font-family: verdana;
`;
