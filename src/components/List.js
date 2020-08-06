import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import ListItem from "./ListItem";
import { FiPlus } from "react-icons/fi";
import Form from "./Form";
import Button from "@material-ui/core/Button";

const initialToDos = [
  {
    id: 1,
    uri:
      "https://res.cloudinary.com/djd9snfcp/image/upload/v1596708422/james-day-5YWf-5hyZcw-unsplash_lchmpv.jpg",
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
  },
  {
    id: 2,
    uri:
      "https://res.cloudinary.com/djd9snfcp/image/upload/v1596620563/stacy-marie-mLx1dc-AJ5k-unsplash_wsyxfs.jpg",
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
  },
  {
    id: 3,
    title: "hier kommt der Titel des Todos rein",
    description: "Hier kommt meine erste Aufgabe rein",
    uri:
      "https://res.cloudinary.com/djd9snfcp/image/upload/v1596708422/james-day-5YWf-5hyZcw-unsplash_lchmpv.jpg",
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
    uri:
      "https://res.cloudinary.com/djd9snfcp/image/upload/v1596708625/olia-gozha-9A_peGrSbZc-unsplash_ktdtyo.jpg",
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
      {!isVisible && (
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
