import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import ListItem from "./ListItem";
import { FiPlus } from "react-icons/fi";
import Form from "./Form";

import AppButton from "./AppButton";
const initialToDos = [
  {
    id: 1,
    uris: [],
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
  },
  {
    id: 2,
    uris: [],
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
  },
  {
    id: 3,
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
    uris: [],
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
    uris: [],
  },
];

function List(props) {
  const [items, setItems] = useState(initialToDos);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    console.log("ITEMs", items);
  }, [items]);
  function updateItems(item) {
    const isItem = items.some((curr) => curr.id === item.id);
    setSelectedItem({});
    console.log(item);
    isItem
      ? setItems(items.map((i) => (i.id !== item.id ? i : item)))
      : setItems([...items, item]);
  }
  return (
    <>
      <Header>ToDo it</Header>
      <MainSection>
        {items.map((item) => (
          <div style={{ height: "100%" }} key={item.id}>
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
      </MainSection>
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
