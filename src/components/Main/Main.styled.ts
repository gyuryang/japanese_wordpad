import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding-top: 70px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 5px;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background: #b5dce8;
  color: #555;
  box-shadow: 0px 1px 1px #999;
  cursor: pointer;
`;
