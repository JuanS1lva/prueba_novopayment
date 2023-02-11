import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import logo from '../../assets/img/Tu-PruTec.svg'
import arrow from '../../assets/img/Arrow-Down.svg'

function NavbarMenu(args) {

  return (
    <>
      <Navbar {...args} color="primary" light={true} dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              width: 150
            }}
          />
        </NavbarBrand>
          <Nav className="me-auto" navbar />
          <NavbarBrand href="/">
            User Name
          </NavbarBrand>
          <UncontrolledDropdown inNavbar direction="start">
              <DropdownToggle nav>
              <img
                alt="flecha abajo"
                src={arrow}
                style={{
                  width: 20
                }}
              />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Options</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Log Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
      </Navbar>
    </>
  );
}

export default NavbarMenu;