import styled from "styled-components";

interface Props {
  goback: boolean;
}
export const HeaderNavbarWrapper = styled.nav<Props>`
  background: #ffffff;
  grid-area: nav;
  height: 64px;
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: ${(porps) => (porps.goback ? "space-between" : "flex-end")};
  align-items: center;
  box-shadow: 0px 2px 6px rgba(229, 229, 229, 0.3);
`;

export const HeaderNavbarItemsLeft = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #a4a7b7;
    padding-left: 0.8rem;
  }
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
