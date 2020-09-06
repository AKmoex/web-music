import styled from "styled-components";
import LogoPic from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  height: 70px;
  overflow: hideen;
`;

export const Nav = styled.div`
  height: 100%;
  width: 1380px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  line-height: 70px;
  color: #161e27;
  font-size: 14px;
`;

export const Logo = styled.div`
  display: block;
  height: 70px;
  width: 146px;
  background: url(${LogoPic}) no-repeat left 50%;
  margin-right: 30px;
`;

export const NavItems = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
`;

export const NavItem = styled.div`
  position: relative;
  height: 70px;
  padding: 0 15px;
  &.active {
    color: #fa2800;
    ::after {
      content: "";
      position: absolute;
      background: #fa2800;
      left: 0;
      right: 0;
      bottom: 15px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      margin: 0 auto;
      opacity: 1;
    }
  }
`;

export const Search = styled.div`
  padding: 0 15px;
  ::after {
    content: "|";
    padding-left: 20px;
    color: #e1e1e1;
  }
`;

export const Login = styled.div``;
