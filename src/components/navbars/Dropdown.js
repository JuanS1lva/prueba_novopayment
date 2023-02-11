import React from 'react';
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

function Dropdown(args) {

  const data = args.data.list[0];

  const menu = (menuTemp) => {
    let newSection = []
    for(const section in menuTemp){
      const nombre = section.replace('_',' ')
      if(!menuTemp[section].length){
        newSection.push(
          <NavItem key={section + Math.random()}>
            <NavLink>{nombre}</NavLink>
          </NavItem>
          )
      }
      else{
        newSection.push(
          <UncontrolledDropdown nav inNavbar key={section+ Math.random()}>
            <DropdownToggle nav caret key={section+ Math.random()}>
              {nombre}
            </DropdownToggle>
            <DropdownMenu key={section+ Math.random()}>
              {menu(menuTemp[section][0])}
            </DropdownMenu>
          </UncontrolledDropdown>
        )

      }
    }
    return (<>
      {newSection}
    </>)
  }

  const Result = () => {
    return menu(data)
  }


  return (
      <Result />    
  );
}

export default Dropdown;