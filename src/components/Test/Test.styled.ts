import styled from "styled-components";

export const Wrap = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin: 0 auto;
  padding-top: 70px;
`;

export const Flex = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const MainText = styled.p`
  font-size: 70px;
`;

export const TestNumber = styled.p`
  font-size: 24px;
  align-self: flex-start;
`;

export const Answer = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
  font-size: 24px;
  border: 3px solid #b5dce8;
  border-radius: 5px;
  color: white;
  padding: 10px;

  &:hover {
    color: black;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  font-size: 20px;
  color: #444;
  border: none;
  box-shadow: 0 1px 1px #999;
  border-radius: 5px;
  background: #b5dce8;
  cursor: pointer;
`;
