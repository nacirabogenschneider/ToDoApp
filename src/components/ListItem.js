import React from "react";
import styled from "styled-components/macro";

import { FiTrash2, FiEdit2 } from "react-icons/fi";
function ListItem({ item, setIsVisible, setSelectedItem }) {
  const handleClick = () => {
    setSelectedItem(item);
    setIsVisible(true);
  };
  return (
    <ItemWrapper>
      {item.uri ? (
        <Image src={item.uri} alt="test bild" />
      ) : (
        <Placeholder></Placeholder>
      )}

      <Text>{item.title}</Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <FiEdit2 style={{ margin: 6 }} size={25} onClick={handleClick} />
        <FiTrash2 style={{ margin: 6 }} size={25} />
      </div>
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
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 3px 4px lightgrey;
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
  overflow: hidden;
  flex-wrap: wrap;
  width: 230px;
`;
