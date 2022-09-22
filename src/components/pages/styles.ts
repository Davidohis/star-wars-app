import styled from "styled-components";

/* Global container wrapper */
export const GlobalContainerWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 0.22fr 1fr;
  grid-template-rows: 0.1fr 4fr;
  grid-template-areas:
    "sidebar nav"
    "sidebar main"
    "sidebar footer";

  @media only screen and (max-width: 978px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
      "nav"
      "main"
      "footer";
  }
`;
