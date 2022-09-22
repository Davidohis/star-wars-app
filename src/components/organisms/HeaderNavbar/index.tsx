import React from "react";
import { Divider } from "antd";
import * as Atom from "../../atoms";
import {
  HeaderNavbarItemsLeft,
  HeaderNavbarItemsRight,
  HeaderNavbarWrapper,
  HeaderProfile,
} from "./styles";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function HeaderComponent({ goback }: any) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <HeaderNavbarWrapper goback={goback}>
        {goback ? (
          <HeaderNavbarItemsLeft onClick={() => navigate("/dashboard")}>
            <LeftOutlined />
            <span>Back</span>
          </HeaderNavbarItemsLeft>
        ) : null}

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
