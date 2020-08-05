import React, { useState } from "react";
import styled from "styled-components/macro";
import ListItem from "./ListItem";
import { FiPlus } from "react-icons/fi";
import Form from "./Form";

import AppButton from "./AppButton";
const initialToDos = [
  {
    id: 1,
    uri: "",
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
  },
  {
    id: 2,
    uri: "",
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
  },
  {
    id: 3,
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
    uri: "",
  },
  {
    id: 4,
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
    uri:
      "https://res.cloudinary.com/djd9snfcp/image/upload/v1596620563/stacy-marie-mLx1dc-AJ5k-unsplash_wsyxfs.jpg",
  },
  {
    id: 5,
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
    uri: "",
  },
];

function List(props) {
  const [items, setItems] = useState(initialToDos);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  function updateItems(item) {
    const isItem = items.some((curr) => curr.id === item.id);
    setSelectedItem({});

    isItem
      ? setItems(items.map((i) => (i.id !== item.id ? i : item)))
      : setItems([...items, item]);
  }
  return (
    <MainSection>
      <Header>ToDo it</Header>
      {items.map((item) => (
        <div key={item.id}>
          <ListItem
            item={item}
            setIsVisible={setIsVisible}
            setSelectedItem={setSelectedItem}
          />
        </div>
      ))}
      <AppButton onClick={() => setIsVisible(true)}>
        <FiPlus size={30} color="white" />
      </AppButton>

      {isVisible && (
        <Form
          updateItems={updateItems}
          item={selectedItem}
          setIsVisible={setIsVisible}
        />
      )}
    </MainSection>
  );
}

export default List;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 60px;
  padding-top: 30px;
  color: skyblue;
  background: #f0faff;
  font-size: 40px;
  font-family: verdana;
`;
