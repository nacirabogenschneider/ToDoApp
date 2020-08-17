import React from "react";
import styled from "styled-components/macro";
import { saveToLocal } from "../utils/localStorage";

import { FiTrash2, FiEdit2 } from "react-icons/fi";
function ListItem({ item, items, setIsVisible, setSelectedItem, setItems }) {
  const handleClick = () => {
    setSelectedItem(item);

    setIsVisible(true);
  };
  const handleDeleteClick = () => {
    const notDeletedItems = items.filter((i) => i.id !== item.id);
    setItems(notDeletedItems);
    saveToLocal("todos", notDeletedItems);
  };
  return (
    <ItemWrapper>
      {item.uri ? (
        <Image src={item.uri} alt="test bild" />
      ) : (
        <Placeholder></Placeholder>
      )}
      <Text>{item.title}</Text>
      <IconWrapper>
        <FiEdit2 style={{ margin: 6 }} size={25} onClick={handleClick} />
        <FiTrash2 style={{ margin: 6 }} size={25} onClick={handleDeleteClick} />
      </IconWrapper>
    </ItemWrapper>
  );
}

export default ListItem;

const ItemWrapper = styled.section`
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 348px;
  height: 48px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 3px 4px lightgrey;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: center;
`;
const Image = styled.img`
  height: 48px;
  width: 48px;
`;
const Placeholder = styled.span`
  height: 48px;
  width: 48px;
  background: skyblue;
`;
const Text = styled.span`
  padding: 10px;

  flex-wrap: wrap;
  width: 230px;
`;
