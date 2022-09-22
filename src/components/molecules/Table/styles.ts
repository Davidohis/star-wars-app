import styled from "styled-components";

export const TableWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
