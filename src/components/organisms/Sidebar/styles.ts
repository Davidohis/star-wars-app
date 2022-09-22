import styled from "styled-components";

interface Props {
  active: any;
  path: any;
}

interface ColorProps {
  color: string;
}

export const DesktopSidebarWrapper = styled.nav`
  background-color: #031434;
  border-right: 2px solid #e7e7e7;
  grid-area: sidebar;
  overflow-y: auto;
  padding: 25px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 978px) {
    display: none;
  }
`;

export const NavDesktopLinkItem = styled.span`
  margin-left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    font-size: 13px;
  }
`;
export const NavbarDesktopLogo = styled.li`
  width: 100%;
  max-width: 600px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5rem;
  padding-left: 2.5rem;
`;

export const NavDesktopItemWrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(0px, 0px);
  margin: 25px 0px;
`;
export const NavDesktopMapLinkItems = styled.li<Props>`
  list-style: none;

  & a {
    display: flex;
    justify-content: flex-start;
    background: ${(props) => (props.active === props.path ? "#0A74DC" : "")};
    box-shadow: ${(props) =>
      props.active === props.path
        ? "0px 2px 20px 2px rgba(147, 147, 147, 0.14)"
        : ""};
    border-radius: 5px;
    text-decoration: none;
    color: #ffffff;
    padding: ${(props) =>
      props.active === props.path ? "18px 16px" : "15px 0px 0px 15px"};
    font-size: 17px;
    font-weight: 400;
    width: auto;
    height: 100%;

    & :hover {
      background: none;
      color: #ffffff;
    }

    & svg {
      margin-top: 0.4rem;
    }
  }
`;

export const NavDesktopIcon = styled.span<ColorProps>`
  font-size: 1.5rem;
  width: 17px;
  height: 16px;
  background: ${(props) => props.color};
  border-radius: 5px;
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  margin-top: 0.4rem;

  @media only screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;
