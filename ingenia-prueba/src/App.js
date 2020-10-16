import React, { useState } from "react";
import "./App.css";

//Components
import HeaderCard from "./Components/HeaderCard/HeaderCard";
import ContactForm from "./Components/ContactForm/ContactForm";

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const cardsArray = [
    {
      title: "Mexico City",
      street: "ANATOLE FRANCE 311",
      delegation: "Polanco, Miguel Hidalgo",
      city: " 11560 México D.F",
      phone: "50 22 09 00",
      bgImg: "/bg_mexico_city.png",
    },
    {
      title: "Washington D.C.",
      street: "1200 18TH STREET,NW",
      delegation: "Suite 700",
      city: "Washington DC 20036 USA.",
      phone: "50 22 09 00",
      bgImg: "/bg_washington.png",
    },
  ];

  return (
    <div className="App">
      <Navbar expand="md" fixed="top">
        <NavbarBrand href="/">
          <img src="/logo_ingenia.png" />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">ABOUT US</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/components">OUR WORK</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/components">CONTACT</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/components">MANIFIESTO</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          {cardsArray.map((card, index) => {
            return (
              <HeaderCard
                key={index}
                title={card.title}
                street={card.street}
                delegation={card.delegation}
                city={card.city}
                phone={card.phone}
                bgImg={card.bgImg}
              />
            );
          })}
        </Row>

        <Row>
          <Col xs="12" className="contactWrapper">
            <p className="description">
              Ingenia is located in two major business & goverment hubs in the
              Americas
            </p>
            <h2>Contact Us</h2>
            <p>Send us an e-mail and we will get back to you:</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={{ size: "8", offset: 2 }}>
            <ContactForm />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs="12" md="12">
            <p className="textVisit">
              Coming to visit us?{" "}
              <span className="text-muted">
                Here are some of our favorite places around town to
              </span>
              <UncontrolledDropdown setActiveFromChild className="dropDownMenu">
                <DropdownToggle className="nav-link" caret>
                  A quiet place to read a book
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Link</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="6">
            <div>
              <p>MEXICO CITY</p>
              <p>
                Name of place <img src="/icon_places.png" />
              </p>
              <span>123 Main St</span>
              <p className="text-muted">
                amazing burguers, <br />
                impromteau jazz trios
              </p>
            </div>

            <div>
              <p>
                Name of place <img src="/icon_places.png" />
              </p>
              <span>123 Main St</span>
              <p className="text-muted">
                amazing burguers, <br />
                impromteau jazz trios
              </p>
            </div>
          </Col>
          <Col xs="12" md="6">
            <div>
              <p>MEXICO CITY</p>

              <p>
                <img src="/icon_places.png" />
                Name of place
              </p>
              <span>123 Main St</span>
              <p>
                amazing burguers, <br />
                impromteau jazz trios
              </p>
              <p>
                <img src="/icon_places.png" />
                Name of place
              </p>
              <span>123 Main St</span>
              <p>
                amazing burguers, <br />
                impromteau jazz trios
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
