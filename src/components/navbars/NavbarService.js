import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Spinner
} from 'reactstrap';
import { getMenu } from '../../services/apiNovo';
import Dropdowns from './Dropdown';

let dataMenus;

function NavbarService(args) {
  const [result,setResult] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(()=>{
    const getData = async () =>{
      try {
        let result = await getMenu();
        dataMenus = result;
        setResult(true)
      } catch (error) {
        console.log([error]);
      }
    }
    getData()
  },[])

  return (
    <div>
      <Navbar {...args} expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            { result ? <Dropdowns data={dataMenus} />: <Spinner animation="border" /> } 
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarService;