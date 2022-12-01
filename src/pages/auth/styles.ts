import styled from "styled-components";

export const CustomContainer = styled.div`
  display: flex;
  background: #fff;
  margin: auto;
  width: 100%;
  height: 100vh;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 100vh;
    margin: 0;
  }
`;
