import styled from "styled-components";

/* Wrapper for Content sections */
export const MainContainerWrapper = styled.main`
  grid-area: main;
  overflow-y: auto;
  padding: 10px 40px 30px 40px;

  @media only screen and (max-width: 978px) {
    background: rgba(169, 202, 255, 0.09);
  }
`;

export const TableSection = styled.div`
  margin-top: 5rem;
`;
