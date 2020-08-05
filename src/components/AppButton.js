import React from "react";

import styled from "styled-components/macro";

function AppButton({ children, onClick }) {
  return (
    <ButtonWrapper onClick={onClick}>
      <Button type="button">{children}</Button>
    </ButtonWrapper>
  );
}

export default AppButton;
const Button = styled.button`
  text-align: center;
  border: none;
  background: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background: skyblue;
  width: 348px;
  border-radius: 8px;
  box-shadow: 2px 3px 4px lightgrey;
`;
