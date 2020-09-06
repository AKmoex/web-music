import React, { Component } from "react";

import {
  HeaderWrapper,
  Nav,
  Logo,
  NavItems,
  NavItem,
  Search,
  Login,
} from "./style.js";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Nav>
          <Logo></Logo>
          <NavItems>
            <NavItem className="active">发现音乐</NavItem>
            <NavItem>排行榜</NavItem>
            <NavItem>歌单</NavItem>
            <NavItem>歌手</NavItem>
            <NavItem>视频</NavItem>
            <NavItem>MV</NavItem>
          </NavItems>
          <Search>
            <span class="iconfont">&#xe610;</span>
          </Search>
          <Login>登录</Login>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;
