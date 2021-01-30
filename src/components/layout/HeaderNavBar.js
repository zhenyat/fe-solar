import React from 'react'
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAddressCard, faTruck, faStickyNote } from "@fortawesome/free-solid-svg-icons"
// import { faHome, faPhone, faAddressCard, faTruck, faStickyNote } from "@fortawesome/free-solid-svg-icons"

import logo from "assets/images/logo.jpg"
// import logo from "images/logo.jpg"     // public/images

class HeaderNavBar extends React.Component {
  render(){
    return(
      // <div>
        <div className="row">
          <div className="col-md-12">
            <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
            {/* <Navbar className="nav-color" variant="light" expand="sm" navbar-sticky="top"> */}
              <Navbar.Brand href="/">
                {/* <Image src={logo} width="80%" alt="Tree Plexus. Изделия из конопли" /> */}
                <Image src={logo} width="20%" alt="Tree Plexus" />
                &nbsp;Магазин
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                  {/* <Nav.Link href="/">
                    <FontAwesomeIcon icon={faHome} />
                    &nbsp;Магазин
                  </Nav.Link> */}
                  <Nav.Link href="/about">
                    <FontAwesomeIcon icon={faAddressCard } />
                    &nbsp;О нас
                  </Nav.Link>
                  <Nav.Link href="/contacts">
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp;Контакты
                  </Nav.Link>

                  <Nav.Link href="/notes">
                    <FontAwesomeIcon icon={faStickyNote} />
                    &nbsp; Заметки
                  </Nav.Link>
                  <Nav.Link href="/delivery">
                    <FontAwesomeIcon icon={faTruck} />
                    &nbsp;Доставка и оплата
                  </Nav.Link>

                  {process.env.NODE_ENV === 'development' ?
                    <Nav.Link href="/demo">Demo</Nav.Link> : <p></p>
                  }
                </Nav>

                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" size="sm" />
                <Button variant="outline-success" size="sm" >Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      // </div>
    )  
  }
}
export default HeaderNavBar