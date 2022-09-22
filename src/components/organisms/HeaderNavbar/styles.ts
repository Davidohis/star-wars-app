import styled from "styled-components";

export const HeaderNavbarWrapper = styled.nav`
  background: #ffffff;
  grid-area: nav;
  height: 64px;
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0px 2px 6px rgba(229, 229, 229, 0.3);
`;

export const HeaderNavbarItemsRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & svg {
    margin-right: 2rem;
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0px 3.5rem 0px 1.5rem;

  & span {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.117188px;
    color: #303b54;
  }
`;
