import styled from "styled-components";

export const CustomInputButton = styled.button`
  margin-top: 20px;
  display: flex;
  height: 60px;
  width: 100%;
  text-decoration: none;
  border-radius: 5px;
  padding: 13px 20px;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  align-items: center;
  transition: linear 0.2s;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #0a74dc;
  background: #0a74dc;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  outline: none;

  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }

  :focus {
    outline: none;
    border: 1px solid #0a74dc;
  }

  :hover {
    box-shadow: 0px 0px 4px 0px #d6d6d6;
    background: #031434;
    color: #fff;
  }

  & svg {
    margin-right: 1rem;
  }
`;
