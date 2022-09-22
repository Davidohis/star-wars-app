import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  height: 145px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem 0px 3rem 0px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1.5rem;

  & > div {
    width: 27px;
    height: 26px;
    background: ${(props) => props.color};
    border-radius: 5px;
  }
`;

export const CardTitle = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: #434854;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  & > span {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 24px;
    color: #00992b;
  }
`;
