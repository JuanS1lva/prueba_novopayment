# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Also the project use the library reactstrap for the design.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Dropdown Recursive

The Dropdown was made of form recursive function, that works with any nivels of submenus.

```javascript

const menu = (menuTemp) => {
    let newSection = []
    for(const section in menuTemp){
      const nombreSeccion = section.replace('_',' ')
      if(!menuTemp[section].length){
        newSection.push(
          <NavItem>
            <NavLink>{nombreSeccion}</NavLink>
          </NavItem>
          )
      }
      else {
        newSection.push(
          <UncontrolledDropdown>
            <DropdownToggle>
                {nombreSeccion}
            </DropdownToggle>
            <DropdownMenu>
                {menu(menuTemp[section][0])}
            </DropdownMenu>
          </UncontrolledDropdown>
        )

      }
    }
    return (
        <>
            {newSection}
        </>
    )
  }
```
