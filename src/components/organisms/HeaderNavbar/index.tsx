import React from "react";
import { Divider } from "antd";
import * as Atom from "../../atoms";
import {
  HeaderNavbarItemsRight,
  HeaderNavbarWrapper,
  HeaderProfile,
} from "./styles";

export default function HeaderComponent() {
  return (
    <React.Fragment>
      <HeaderNavbarWrapper>
        <HeaderNavbarItemsRight>
          <Atom.NotifyIcon />

          <Divider type="vertical" />

          <HeaderProfile>
            <Atom.AccountIcon />
            <span>John Doe</span>
          </HeaderProfile>

          <Atom.BarIcon />
        </HeaderNavbarItemsRight>
      </HeaderNavbarWrapper>
    </React.Fragment>
  );
}