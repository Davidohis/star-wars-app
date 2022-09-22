import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./data";
import * as Atom from "../../atoms";
import {
  DesktopSidebarWrapper,
  NavDesktopIcon,
  NavDesktopLinkItem,
  NavDesktopItemWrapper,
  NavDesktopMapLinkItems,
} from "./styles";
import StarLogo from "../../../assets/logos.svg";

export default function SiderBarComponent() {
  // Active Navbar Link Menu
  const { pathname } = useLocation();
  const ActivePage = pathname.replace("/", "");

  return (
    <DesktopSidebarWrapper>
      <Link to="/">
        <Atom.ImageComponent
          image={StarLogo}
          alt={"logo"}
          sx={"100px"}
          hg={"90px"}
        />
      </Link>
      {SidebarData.map((item) => {
        return (
          <NavDesktopItemWrapper key={item.id}>
            <NavDesktopMapLinkItems
              active={ActivePage}
              path={item.path.split("/")[1]}
            >
              <Link to={item.path}>
                {item.path === "/dashboard" ? (
                  <Atom.MenuIcon />
                ) : (
                  <NavDesktopIcon color={item.color} />
                )}

                <NavDesktopLinkItem>{item.title}</NavDesktopLinkItem>
              </Link>
            </NavDesktopMapLinkItems>
          </NavDesktopItemWrapper>
        );
      })}
    </DesktopSidebarWrapper>
  );
}
