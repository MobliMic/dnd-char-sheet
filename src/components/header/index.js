import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const MenuWrapper = styled.div`
  flex: 1 0 50%;
  border: 1px solid lime;
`;

const Menu = styled.ul`
  padding: 0;
`;

const MenuItem = styled.li`
  list-style: none;
  font-size: 1.6rem;
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <MenuWrapper>
          <Menu>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
          </Menu>
        </MenuWrapper>
        <MenuWrapper>
          <MenuItem>Menu item</MenuItem>
        </MenuWrapper>
      </HeaderWrapper>
    );
  }
}

export default Header;